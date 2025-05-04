// Menú móvil
const mobileBtn = document.querySelector('.mobile-menu-btn');
const navbar = document.querySelector('.navbar');
const body = document.body;

mobileBtn.addEventListener('click', () => {
    mobileBtn.classList.toggle('active');
    navbar.classList.toggle('active');
    body.classList.toggle('no-scroll');
    });

// Cerrar menú al hacer clic en enlace
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileBtn.classList.remove('active');
        navbar.classList.remove('active');
        body.classList.remove('no-scroll');
    });
});

// Animación al hacer scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.news-card, .section').forEach(element => {
    observer.observe(element);
});