document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuList = document.querySelector(".menu-list");
    const header = document.querySelector(".header-container");
    
    if (menuToggle && menuList) {
        menuToggle.addEventListener("click", () => {
            menuList.classList.toggle("active");
        });
        
        document.addEventListener("click", (e) => {
            if (!header.contains(e.target) && menuList.classList.contains("active")) {
                menuList.classList.remove("active");
            }
        });
    }
    
    window.addEventListener("scroll", () => {
        const scrollTop = window.pageYOffset;
        if (scrollTop > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
    
    const headerHeight = header.offsetHeight;
    document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            
            if (menuList && menuList.classList.contains("active")) {
                menuList.classList.remove("active");
            }
            
            if (targetId === "inicio") {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            } else {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: "smooth"
                    });
                }
            }
        });
    });
    
    console.log("FyF Seguridad Electrónica - Sitio web cargado correctamente");
});
