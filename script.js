document.getElementById('toggleButton').addEventListener('click', function() {
    const body = document.body;
    const button = document.getElementById('toggleButton');

    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        button.textContent = 'Cambiar a tema claro';
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        button.textContent = 'Cambiar a tema oscuro';
    }
});

document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add('nuevo-fondo');

    document.querySelectorAll('.card').forEach(card => {
        card.classList.add('tarjeta-estilo');  // Agregar clase para aplicar estilos específicos
    });

    document.querySelectorAll('.card a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();  
            alert('¡Enlace clickeado!');
        });
    });

    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.opacity = '0.7';  
        });
        img.addEventListener('mouseout', () => {
            img.style.opacity = '1';  
        });
    });

    const categories = document.querySelectorAll(".category");

    categories.forEach((category, index) => {
        category.addEventListener("click", function() {
            const content = category.querySelector(".content");

            
            content.style.display = content.style.display === "block" ? "none" : "block";

            document.body.classList.remove("bg-blue", "bg-green", "bg-yellow"); // Eliminar las clases anteriores

            switch (index) {
                case 0:
                    document.body.classList.add("bg-blue");
                    break;
                case 1:
                    document.body.classList.add("bg-green");
                    break;
                case 2:
                    document.body.classList.add("bg-yellow");
                    break;
            }
        });
    });
});
