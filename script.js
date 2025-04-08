document.addEventListener("DOMContentLoaded", () => {
    // Funcionalidad del menú hamburguesa
    const menuToggle = document.querySelector(".menu-toggle");
    const menuList = document.querySelector(".menu-list");

    menuToggle.addEventListener("click", () => {
        menuList.classList.toggle("active");
    });

    // Ajustar el scroll para tener en cuenta el encabezado fijo
    const header = document.querySelector(".header-container");
    const headerHeight = header.offsetHeight;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);

            // Si el enlace es "inicio", ir al tope de la página
            if (targetId === "inicio") {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            } else {
                // Para otros enlaces, ajustar el scroll con el encabezado fijo
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: "smooth"
                    });
                }
            }
        });
    });
});