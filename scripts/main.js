// Archivo JavaScript para agregar interactividad y animaciones al sitio web

document.addEventListener("DOMContentLoaded", function() {
    // Función para el desplazamiento suave entre secciones
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animaciones al cargar las páginas
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('hidden');
        section.getBoundingClientRect(); // Forzar el reflow
        section.classList.remove('hidden');
        section.classList.add('fade-in');
    });
});

// CSS para las animaciones
const style = document.createElement('style');
style.innerHTML = `
    .hidden {
        opacity: 0;
        transform: translateY(20px);
    }
    .fade-in {
        animation: fadeIn 0.5s forwards;
    }
    @keyframes fadeIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);