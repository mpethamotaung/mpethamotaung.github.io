// Navbar Toggle Menu
const navbarToggler = document.querySelector(".navbar-toggler");
const navLinks = document.querySelector(".nav-links");
const navItems = navLinks.querySelectorAll("li a");

navbarToggler.addEventListener("click", mobileMenu);

function mobileMenu() {
    navbarToggler.classList.toggle("active");
    navLinks.classList.toggle("active");
}

// Close Navbar Toggle Menu
navItems.forEach(link => link.addEventListener("click", function(e) {
    e.preventDefault(); // Prevent default anchor click behavior
    closeMenu(); // Close the mobile menu
    
    // Smooth scroll to the section
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}));

function closeMenu() {
    navbarToggler.classList.remove("active");
    navLinks.classList.remove("active");
}
