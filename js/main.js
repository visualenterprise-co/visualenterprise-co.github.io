document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar elementos del DOM
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    const serviciosItem = document.getElementById('servicios');

    // Añadir evento de clic al botón de menú hamburguesa
    menuToggle.addEventListener('click', function(event) {
        mainNav.classList.toggle('active');
        this.classList.toggle('active'); // Añadir/quitar clase active al botón hamburguesa
        // Prevenir comportamiento predeterminado
        event.preventDefault();
        event.stopPropagation();
    });

    // En dispositivos móviles, hacer que el elemento 'servicios' muestre su submenú al hacer clic
    if (window.innerWidth <= 768) {
        serviciosItem.addEventListener('click', function(e) {
            // Si se hace clic en el enlace principal de 'Servicios', prevenir la navegación y mostrar el submenú
            if (e.target.tagName === 'A' && e.target.parentElement === serviciosItem.querySelector('a').parentElement) {
                e.preventDefault();
                this.classList.toggle('active');
                e.stopPropagation();
            }
        });

        // Permitir que los enlaces del submenú funcionen y cierren el menú
        const subNavLinks = serviciosItem.querySelectorAll('.subNavServicios a');
        subNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('active');
                serviciosItem.classList.remove('active');
            });
        });
    }
    
    // Cerrar submenús al hacer clic fuera de ellos
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && !serviciosItem.contains(e.target)) {
            serviciosItem.classList.remove('active');
        }
    });

    // Cerrar el menú al hacer clic en un enlace
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Solo cerrar el menú si no es el enlace de servicios en móvil
            if (!(this.parentNode.id === 'servicios' && window.innerWidth <= 768)) {
                mainNav.classList.remove('active');
            }
        });
    });
});