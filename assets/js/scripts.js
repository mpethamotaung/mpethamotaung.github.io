//Navbar Toggle Menu
const navbarToggler = document.querySelector(".navbar-toggler");
const navLinks = document.querySelector(".nav-links");
const navItems = navLinks.querySelectorAll("li a");

navbarToggler.addEventListener("click", mobileMenu);

function mobileMenu() {
    navbarToggler.classList.toggle("active");
    navLinks.classList.toggle("active");
}

//Close Navbar Toggle Menu
navItems.forEach(link => link.addEventListener("click", closeMenu));

function closeMenu(){
    navbarToggler.classList.remove("active");
    navLinks.classList.remove("active");
}

