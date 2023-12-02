document.querySelectorAll('.btn-turno a').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = '/turno.html';
    });
});

// Selecciono todos los elementos a (anchor) y les doy el desplasamineto suave, uso un forEach para que vaya agarrando cada uno de los a 
document.querySelectorAll('a').forEach(function(navLink) {
    navLink.addEventListener('click', function(e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
