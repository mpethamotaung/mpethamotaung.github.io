// assets/js/scripts.js

// Scroll to Top Button Script
var mybutton = document.getElementById("scrollTopBtn");
var navbar = document.querySelector(".navbar");

// When the user scrolls down 20px from the top of the document, show the button and change navbar style
window.onscroll = function() {
    scrollFunction();
    handleNavbarTransparency();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleNavbarTransparency() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
}
