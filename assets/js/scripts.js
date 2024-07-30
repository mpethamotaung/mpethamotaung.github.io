document.addEventListener('DOMContentLoaded', () => {
    const navbarToggler = document.getElementById('navbar-toggler');
    const navLinks = document.getElementById('nav-links');

    navbarToggler.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
