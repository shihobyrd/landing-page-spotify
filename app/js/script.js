const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.header__menu');

document.querySelector('#btnHamburger').addEventListener('click', function () {
    console.log('click hamburger');

    if (header.classList.contains('open')) { // Close Hamburger Menu
        header.classList.remove('open');
        overlay.classList.add('fade-out');
        overlay.classList.remove('fade-in');
        menu.classList.add('fade-out');
        menu.classList.remove('fade-in');
    }
    else { // Open Hamburger Menu
        header.classList.add('open');
        overlay.classList.add('fade-in');
        overlay.classList.remove('fade-out');
        menu.classList.add('fade-in');
        menu.classList.remove('fade-out');
    }

});