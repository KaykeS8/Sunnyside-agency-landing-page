const btnMobile = document.querySelector('[data-menu="menu-open"]');
const burguer = document.querySelector('.burger');
const nav = document.querySelector('.nav');


btnMobile.addEventListener('click', () => {
    burguer.classList.toggle('close')
    nav.classList.toggle('show')
})