document.addEventListener('DOMContentLoaded', () => {

    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;

    // Seleccionar el nuevo botón "Volver Arriba"
    const backToTopButton = document.getElementById('back-to-top-btn');

    // LÓGICA DE LA BARRA DE NAVEGACIÓN Y BOTÓN DE INICIO
    window.addEventListener('scroll', () => {
        // --- Lógica para ocultar/mostrar la barra de navegación ---
        if (lastScrollY < window.scrollY && window.scrollY > 150) {
            navbar.classList.add('navbar-hidden');
        } else {
            navbar.classList.remove('navbar-hidden');
        }
        lastScrollY = window.scrollY; // Actualizar siempre la posición

        // --- Lógica para mostrar/ocultar el botón de "Volver Arriba" ---
        if (window.scrollY > 300) { // Aparece después de 300px de scroll
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });


    // --- Control del menú móvil (hamburguesa) ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li a');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-bars');
        menuToggle.querySelector('i').classList.toggle('fa-times');
    });

    // Cierra el menú al hacer clic en un enlace
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });

});