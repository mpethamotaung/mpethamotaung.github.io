//Navbar Toggle Menu
const navbarToggler = document.querySelector(".navbar-toggler");
const navLinks = document.querySelector(".nav-links");

navbarToggler.addEventListener("click", mobileMenu);

function mobileMenu() {
    navbarToggler.classList.toggle("active");
    navLinks.classList.toggle("active");
}

//Close Navbar Toggle Menu
navLinks.forEach(n=> n.addEventListener("click", closeMenu));

function closeMenu() {
    navbarToggler.classList.remove("active");
    navLinks.classList.remove("acitve");
}

