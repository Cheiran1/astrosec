document.addEventListener("DOMContentLoaded", function() {
    // --- Active Navigation Link Styling ---
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll("header nav ul li a");

    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href");
        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });

    // --- Button Ripple Effect ---
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("click", function (e) {
            const x = e.clientX - e.target.offsetLeft;
            const y = e.clientY - e.target.offsetTop;
            const ripple = document.createElement("span");
            ripple.classList.add("ripple");
            ripple.style.left = x + "px";
            ripple.style.top = y + "px";
            this.appendChild(ripple);
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // --- NEW: Hamburger Menu Toggle ---
    const hamburger = document.querySelector(".hamburger-menu");
    const navMenu = document.querySelector("nav ul");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("is-active");
            navMenu.classList.toggle("is-active");
        });
    }
});

