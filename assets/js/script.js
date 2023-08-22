/*Header functionality */
document.querySelector('header').addEventListener('click', function() {
    this.style.backgroundColor = '#f4f4f4'
})

/*Scroll button functionality */
document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.getElementById('scroll-to-top');

    scrollToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top:0,
            behavior:'smooth'
        });
    });

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300){
            scrollToTopButton.classList.add('active');
        }else{
            scrollToTopButton.classList.remove('active');
        }
    });
});

/*Navbar Toggle Function*/
document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse')

    navbarToggler.addEventListener('click', function () {
        navbarCollapse.classList.toggle('show');
    })
})