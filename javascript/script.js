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

// validation to the submit form

let footerFormEl = document.getElementById('footer-form');

footerFormEl.addEventListener('submit', function(e){
    e.preventDefault()
    let nameRegex = /^[a-zA-Zა-ჰ]+(([',. -][a-zA-Zა-ჰ ])?[a-zA-Z ა-ჰ]*)*$/;

    let footerfirstNameField = document.getElementById('footer-first-name');
    let footerfirstNameFieldValue= footerfirstNameField.value;
    
    if(footerfirstNameFieldValue.match(nameRegex)){
        footerfirstNameField.style.border='2px solid green'
    }else{
        footerfirstNameField.style.border='2px solid red'
        alert('Enter valid First Name!');
        return
    }


    let footerLatsNameField = document.getElementById('footer-last-name')
    let footerLatsNameValue = footerLatsNameField.value;
   
    if(footerLatsNameValue.match(nameRegex)){
        footerLatsNameField.style.border='2px solid green'
    }else{
        footerLatsNameField.style.border='2px solid red'
        alert('Enter valid Last Name!');
        return
    }


    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let footerEmailField = document.getElementById('footer-email');
    let footerEmailValue = footerEmailField.value;
    if(footerEmailValue.match(emailRegex)){
        footerEmailField.style.border='2px solid green'
    }else{
        footerEmailField.style.border='2px solid red'
        alert('Enter valid Email Adress!');
        return
    }

})

