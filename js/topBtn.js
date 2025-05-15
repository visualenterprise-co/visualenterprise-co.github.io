// Mostrar el botón al llegar al final de la página
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('scrollToTopBtn');
    window.addEventListener('scroll', function() {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
            btn.style.display = 'block';
            btn.style.opacity = '1';
            btn.style.background = 'rgba(35,67,93,1)';
        } else {
            btn.style.display = 'none';
        }
    });
    // Efecto hover para mayor visibilidad
    btn.onmouseover = function() {
        this.style.opacity = '1';
        this.style.background = 'rgba(35,67,93,1)';
    };
    btn.onmouseout = function() {
        this.style.opacity = '1';
        this.style.background = 'rgba(35,67,93,1)';
    };
    // Scroll suave al top
    btn.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
});
