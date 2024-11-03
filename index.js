
    const heroText = document.querySelector('.hero-section h2');
    let position = 0;
    const speed = 8; 

    function animateText() {
        position += speed; 
        heroText.style.transform = `translateX(${position}px)`; 
        if (position > window.innerWidth) {
            position = -heroText.offsetWidth; 
        }
        requestAnimationFrame(animateText); 
    }

    animateText(); 


    document.addEventListener("DOMContentLoaded", function() {
        const cards = document.querySelectorAll('.destinasi-card');

        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('visible'); 
            }, index * 300); 
        });
    });
    const toggle = document.getElementById('toggle')
    const nav = document.getElementById('nav')
    toggle.addEventListener('click', () => nav.classList.toggle('active'))
    
