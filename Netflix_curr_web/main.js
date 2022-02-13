'use strict';
const toggle = document.querySelector('.navbar__toggle');
const dropdownMenu = document.querySelector('.dropdown__menu');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('clicked');
    dropdownMenu.classList.toggle('active');
});
