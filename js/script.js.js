document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.navbar').classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  });
  
  // Cerrar menú al hacer clic en un enlace
  document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('.navbar').classList.remove('active');
      document.querySelector('.mobile-menu-btn').classList.remove('active');
      document.body.classList.remove('no-scroll');
    });
  });
