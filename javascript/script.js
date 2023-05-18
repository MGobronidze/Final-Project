// burger logic

let burgerEl = document.querySelector('.burger');
let navigationEl = document.querySelector('.navigation');
let navIconEl = document.querySelector('.nav-icon');
let headerPEl =document.querySelector('.header-paragraph');
let underlineEl = document.querySelector('.underline');
let navigationContainerEl = document.querySelector('.navigation-container');
let topElement = document.querySelector('.top')
let middleElement = document.querySelector('.middle')
let bottomElement = document.querySelector('.bottom')


burgerEl.addEventListener('click', function(){
    navigationEl.classList.toggle('enable');
    navIconEl.classList.toggle('disable');
    headerPEl.classList.toggle('disable');
    underlineEl.classList.toggle('disable');
    navigationContainerEl.classList.toggle('set-height')
    topElement.classList.toggle('displayTop')
    middleElement.classList.toggle('disable')
    bottomElement.classList.toggle('displayBottom')
})
