// Tabs de días
function mostrarDia(id, btn) {
    document.querySelectorAll('.dia-content').forEach(d => d.classList.add('hidden'));
    document.querySelectorAll('.tab-dia').forEach(t => t.classList.remove('active'));
    document.getElementById(id).classList.remove('hidden');
    btn.classList.add('active');
}

    // Acordeón
function toggleAccordion(header) {
const body = header.nextElementSibling;
const chevron = header.querySelector('.chevron');
const isOpen = body.classList.contains('open');

// Cerrar todos
document.querySelectorAll('.accordion-body').forEach(b => b.classList.remove('open'));
document.querySelectorAll('.chevron').forEach(c => c.classList.remove('open'));

    // Abrir el actual si estaba cerrado
if (!isOpen) {
    body.classList.add('open');
    chevron.classList.add('open');
}
}