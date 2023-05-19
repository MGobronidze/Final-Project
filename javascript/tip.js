// adding read more functionality
let readMoreEl =document.querySelector('.read-more');
let hiddenEl = document.querySelector('.tips-paragraph-hide');
let tipsPEl = document.querySelector('.tips-paragraph');
let showLessEl =document.querySelector('.show-less');


readMoreEl.addEventListener('click', function(){
    hiddenEl.classList.add('tips-paragraph-show');
    readMoreEl.classList.add('disable')
    tipsPEl.classList.add('tips-container')
})
showLessEl.addEventListener('click', function(){
    hiddenEl.classList.remove('tips-paragraph-show');
    readMoreEl.classList.remove('disable')
    tipsPEl.classList.remove('tips-container')
})

