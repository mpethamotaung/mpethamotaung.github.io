document.getElementById('navbar-toggler').addEventListener('click', function() {
    var menu = document.getElementById('navbar-menu');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
    } else {
        menu.classList.add('show');
    }
});
