    const track = document.getElementById('carousel-track');
    const slides = track.children;
    const dotsContainer = document.getElementById('dots');
    const isMobile = () => window.innerWidth < 768;
    
    let current = 0;
    const total = slides.length;
    const visibleSlides = () => isMobile() ? 1 : 3;

    // Generar dots
    for (let i = 0; i < total; i++) {
        const dot = document.createElement('div');
        dot.className = `w-2 h-2 rounded-full cursor-pointer transition-colors ${i === 0 ? 'bg-teal-600' : 'bg-gray-300'}`;
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
    }

    function updateDots() {
        [...dotsContainer.children].forEach((dot, i) => {
            dot.className = `w-2 h-2 rounded-full cursor-pointer transition-colors ${i === current ? 'bg-teal-600' : 'bg-gray-300'}`;
        });
    }

    function goTo(index) {
        const maxIndex = total - visibleSlides();
        current = Math.max(0, Math.min(index, maxIndex));
        const slideWidth = 100 / visibleSlides();
        track.style.transform = `translateX(-${current * slideWidth}%)`;
        updateDots();
    }

    document.getElementById('prev-btn').addEventListener('click', () => goTo(current - 1));
    document.getElementById('next-btn').addEventListener('click', () => goTo(current + 1));

    window.addEventListener('resize', () => goTo(current));