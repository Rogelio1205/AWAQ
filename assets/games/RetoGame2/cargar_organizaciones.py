"""
═══════════════════════════════════════════════════════════════════════════════
 CARGA DE ORGANIZACIONES A SALESFORCE
═══════════════════════════════════════════════════════════════════════════════

 ¿QUÉ HACE ESTE SCRIPT?
 ----------------------
 Sube la información de las organizaciones participantes a Salesforce. Crea dos
 tipos de registros:

   1. Paises   (objeto Pais__c)    -> un registro por cada país único
   2. Empresas (objeto Empresa__c) -> un registro por cada organización,
                                       enlazada al país que le corresponde

 El script primero crea los países y luego las organizaciones, asignándole a cada
 organización el país correcto de forma automática.

 ¿POR QUÉ ESTE SCRIPT Y NO EL IMPORTADOR DE SALESFORCE?
 ------------------------------------------------------
 Las herramientas nativas de importación (Data Import Wizard / carga por Excel)
 no lograron mapear correctamente los campos personalizados ni la relación con el
 país. Este script usa la API de Salesforce directamente y sí funciona de forma
 confiable. Además es repetible: sirve para volver a cargar o ampliar datos.


 ───────────────────────────────────────────────────────────────────────────────
 REQUISITOS ANTES DE USARLO (hazlo una sola vez)
 ───────────────────────────────────────────────────────────────────────────────

 1) Tener Python 3 instalado.
    - Descárgalo de https://www.python.org/downloads/
    - IMPORTANTE: durante la instalación marca la casilla "Add Python to PATH".

 2) Instalar las librerías que el script necesita. Abre una terminal y ejecuta:

        pip install simple-salesforce requests

 3) Tener una "Connected App" en Salesforce con el flujo Client Credentials
    activado, y a la mano sus credenciales:
        - Consumer Key    (también llamado Client ID)
        - Consumer Secret (también llamado Client Secret)
    El usuario asignado a esa Connected App debe tener permisos de lectura y
    escritura sobre los objetos Pais__c y Empresa__c y todos sus campos.


 ───────────────────────────────────────────────────────────────────────────────
 CÓMO USARLO
 ───────────────────────────────────────────────────────────────────────────────

 1) Rellena la sección "CONFIGURACIÓN" de abajo con los datos de tu org.
 2) Rellena la lista "ORGANIZACIONES" con tus datos reales.
 3) Guarda el archivo y, en una terminal, ejecútalo con:

        python cargar_organizaciones.py

 El script irá mostrando en pantalla un ✓ por cada registro creado y, al final,
 un resumen de cuántos se crearon bien y cuántos fallaron.

═══════════════════════════════════════════════════════════════════════════════
"""

import requests
from simple_salesforce import Salesforce


# ═══════════════════════════════════════════════════════════════════════════════
#  CONFIGURACIÓN  ←  CAMBIA ESTOS TRES VALORES POR LOS DE TU ORGANIZACIÓN
# ═══════════════════════════════════════════════════════════════════════════════

# Dominio de tu Salesforce, SIN "https://" y SIN barra final.
# Lo ves en la URL cuando entras a Salesforce. Ejemplo: "miempresa.my.salesforce.com"
DOMAIN = "awaq.my.salesforce.com"

# Credenciales de la Connected App (Consumer Key y Consumer Secret).
# Las obtienes en: Setup → App Manager → [tu app] → Manage Consumer Details
CLIENT_ID = "PEGA_AQUI_TU_CONSUMER_KEY"
CLIENT_SECRET = "PEGA_AQUI_TU_CONSUMER_SECRET"


# ═══════════════════════════════════════════════════════════════════════════════
#  DATOS DE LAS ORGANIZACIONES  ←  AQUÍ PONES TU INFORMACIÓN
# ═══════════════════════════════════════════════════════════════════════════════
#
#  Cada organización es una línea entre paréntesis con CINCO valores EN ESTE ORDEN,
#  separados por comas:
#
#       ("Nombre", "País", "Descripción", "URL", "Tags")
#
#  - Nombre      : nombre de la organización
#  - País        : país de la organización (el script crea el país solo)
#  - Descripción : texto descriptivo
#  - URL         : enlace principal / redes de la organización
#  - Tags        : categoría o línea temática
#
#  Reglas:
#  - No borres los paréntesis ni las comas.
#  - Cada línea (menos la última, opcionalmente) termina con una coma.
#  - Si algún texto lleva comillas dobles por dentro, cámbialas por comillas
#    simples para no romper la línea.
#  - Puedes agregar tantas organizaciones como quieras.
#
#  NOTA: El campo "URL Logo" (URL_Logo__c) se deja vacío en la carga. Si más
#  adelante quieres llenarlo, edita el registro directamente en Salesforce o
#  amplía el script.
# ───────────────────────────────────────────────────────────────────────────────

ORGANIZACIONES = [
    # ("Nombre", "País", "Descripción", "URL", "Tags"),
    ("Salesforce", "Estados Unidos", "Plataforma de CRM y servicios en la nube.", "https://www.salesforce.com", "Tecnología / Social"),
    ("AECID", "España", "Agencia gubernamental española de cooperación internacional.", "https://www.aecid.es", "Cooperación Internacional / Desarrollo"),
    # ... agrega aquí el resto de tus organizaciones, una por línea ...
]


# ═══════════════════════════════════════════════════════════════════════════════
#  DE AQUÍ HACIA ABAJO NO NECESITAS CAMBIAR NADA
# ═══════════════════════════════════════════════════════════════════════════════

# Nombres internos (API Names) de los objetos y campos en Salesforce.
# Si en tu org los campos tienen otros nombres, ajústalos aquí.
OBJ_PAIS = "Pais__c"
OBJ_EMPRESA = "Empresa__c"
CAMPO_DESCRIPCION = "Descripcion__c"
CAMPO_URL_REDES = "URL_Redes__c"
CAMPO_URL_LOGO = "URL_Logo__c"
CAMPO_TAGS = "Tags__c"
CAMPO_PAIS_LOOKUP = "Pais__c"  # campo en Empresa que apunta al país


def conectar():
    """
    Se conecta a Salesforce usando el flujo Client Credentials de la Connected App
    y devuelve un objeto 'sf' que sirve para crear y consultar registros.
    """
    print("Conectando con Salesforce...")

    # Pedimos un token de acceso temporal con las credenciales de la Connected App.
    respuesta = requests.post(
        f"https://{DOMAIN}/services/oauth2/token",
        data={
            "grant_type": "client_credentials",
            "client_id": CLIENT_ID,
            "client_secret": CLIENT_SECRET,
        },
    )
    datos_token = respuesta.json()

    # Si no llegó el token, mostramos el error y detenemos el script.
    if "access_token" not in datos_token:
        print("ERROR de autenticación. Revisa el DOMAIN y las credenciales.")
        print("Respuesta de Salesforce:", datos_token)
        raise SystemExit(1)

    sf = Salesforce(instance=DOMAIN, session_id=datos_token["access_token"])
    print("✓ Conectado correctamente\n")
    return sf


def crear_paises(sf):
    """
    Recorre las organizaciones, saca los países únicos y crea cada uno en el
    objeto Pais__c. Si un país ya existe en Salesforce, lo reutiliza en vez de
    duplicarlo.

    Devuelve un diccionario  { "nombre del país": "Id del registro en Salesforce" }
    que luego usamos para enlazar cada empresa con su país.
    """
    # set() elimina repetidos; sorted() los ordena alfabéticamente.
    paises_unicos = sorted(set(org[1] for org in ORGANIZACIONES))
    ids_por_pais = {}

    print("Creando países...")
    for nombre in paises_unicos:
        try:
            resultado = sf.__getattr__(OBJ_PAIS).create({"Name": nombre})
            ids_por_pais[nombre] = resultado["id"]
            print(f"  ✓ {nombre}")
        except Exception:
            # Si falló al crear (por ejemplo, porque ya existía), lo buscamos.
            consulta = sf.query(
                f"SELECT Id, Name FROM {OBJ_PAIS} WHERE Name = '{nombre}'"
            )
            if consulta["totalSize"] > 0:
                ids_por_pais[nombre] = consulta["records"][0]["Id"]
                print(f"  ~ {nombre} (ya existía, se reutiliza)")
            else:
                print(f"  ✗ No se pudo crear ni encontrar: {nombre}")

    print(f"\n✓ Países procesados: {len(ids_por_pais)}\n")
    return ids_por_pais


def crear_organizaciones(sf, ids_por_pais):
    """
    Crea cada organización en el objeto Empresa__c, asignándole el Id del país
    que le corresponde. Devuelve cuántas se crearon bien y cuántas fallaron.
    """
    print("Creando organizaciones...")
    exitos = 0
    errores = 0

    for nombre, pais, descripcion, url, tags in ORGANIZACIONES:
        # Buscamos el Id del país de esta organización.
        id_pais = ids_por_pais.get(pais)
        if not id_pais:
            print(f"  ✗ {nombre}: no se encontró el país '{pais}'")
            errores += 1
            continue

        try:
            sf.__getattr__(OBJ_EMPRESA).create({
                "Name":               nombre,
                CAMPO_PAIS_LOOKUP:    id_pais,      # enlace al país (relación)
                CAMPO_DESCRIPCION:    descripcion,
                CAMPO_URL_REDES:      url,
                CAMPO_URL_LOGO:       "",           # se deja vacío en la carga
                CAMPO_TAGS:           tags,
            })
            print(f"  ✓ {nombre}")
            exitos += 1
        except Exception as e:
            print(f"  ✗ {nombre}: {e}")
            errores += 1

    return exitos, errores


def main():
    """Punto de entrada: ejecuta todo el proceso de carga en orden."""
    # 1. Conectarse a Salesforce.
    sf = conectar()

    # 2. Crear primero los países (necesarios para enlazar las empresas).
    ids_por_pais = crear_paises(sf)

    # 3. Crear las organizaciones, ya enlazadas a su país.
    exitos, errores = crear_organizaciones(sf, ids_por_pais)

    # 4. Mostrar el resumen final.
    print("\n" + "=" * 45)
    print(f"  Organizaciones creadas correctamente: {exitos}")
    print(f"  Organizaciones con error:             {errores}")
    print("=" * 45)


# Esto hace que main() se ejecute solo cuando corres el archivo directamente.
if __name__ == "__main__":
    main()
