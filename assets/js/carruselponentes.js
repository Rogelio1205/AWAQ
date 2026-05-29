
    const track = document.getElementById('ponentes-track');
    const dotsContainer = document.getElementById('ponentes-dots');
    const slides = track.children;
    const total = slides.length;
    let current = 0;

    const visibleCount = () => {
        if (window.innerWidth >= 1024) return 3;
        if (window.innerWidth >= 640) return 2;
        return 1;
    };

    // Generar dots
    for (let i = 2; i < total; i++) {
        const dot = document.createElement('div');
        dot.className = `w-2 h-2 rounded-full cursor-pointer transition-colors ${i === 0 ? 'bg-[#097589]' : 'bg-gray-300'}`;
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
    }

    function updateDots() {
        [...dotsContainer.children].forEach((dot, i) => {
            dot.className = `w-2 h-2 rounded-full cursor-pointer transition-colors ${i === current ? 'bg-[#097589]' : 'bg-gray-300'}`;
        });
    }

    function goTo(index) {
        const max = total - visibleCount();
        current = Math.max(0, Math.min(index, max));
        const pct = 100 / visibleCount();
    track.style.transform = `translateX(-${current * pct}%)`;
    updateDots();
}

document.getElementById('ponentes-prev').addEventListener('click', () => goTo(current - 1));
document.getElementById('ponentes-next').addEventListener('click', () => goTo(current + 1));
window.addEventListener('resize', () => goTo(current));