// add functonality to the destination pages btns 
// destination page btn elements
let southAmericaBtnEl = document.querySelector('.south-america-btn');
let northAmericaBtnEl = document.querySelector('.north-america-btn');
let europeBtnEl = document.querySelector('.europe-btn');
let africaBtnEl = document.querySelector('.africa-btn');
let asiaBtnEl = document.querySelector('.asia-btn');

// destination page continent elements
let southAmericaEl =document.querySelector('.south-america');
let northAmericaEl =document.querySelector('.north-america');
let europeEl =document.querySelector('.europe');
let africaEl =document.querySelector('.africa');
let asiaEl = document.querySelector('.asia');

// display defaunlt
europeEl.classList.add('display');
europeBtnEl.classList.add('backgroundBlue');


// add functionality to the south ametica btn
southAmericaBtnEl.addEventListener('click', function(){
    southAmericaEl.classList.toggle('display');
    southAmericaBtnEl.classList.toggle('backgroundBlue');

    northAmericaEl.classList.remove('display');
    europeEl.classList.remove('display');
    asiaEl.classList.remove('display');
    africaEl.classList.remove('display');
    
    northAmericaBtnEl.classList.remove('backgroundBlue');
    europeBtnEl.classList.remove('backgroundBlue');
    asiaBtnEl.classList.remove('backgroundBlue');
    africaBtnEl.classList.remove('backgroundBlue');
})

// add functionality to the north ametica btn
northAmericaBtnEl.addEventListener('click', function(){
    northAmericaEl.classList.toggle('display');
    northAmericaBtnEl.classList.toggle('backgroundBlue');
    
    southAmericaEl.classList.remove('display');
    europeEl.classList.remove('display');
    asiaEl.classList.remove('display');
    africaEl.classList.remove('display');
    
    southAmericaBtnEl.classList.remove('backgroundBlue');
    europeBtnEl.classList.remove('backgroundBlue');
    asiaBtnEl.classList.remove('backgroundBlue');
    africaBtnEl.classList.remove('backgroundBlue');
})

// add functionality to the europe btn
europeBtnEl.addEventListener('click', function(){
    europeEl.classList.remove('notDisplay')
    europeEl.classList.toggle('display');
    europeBtnEl.classList.toggle('backgroundBlue')

    northAmericaEl.classList.remove('display');
    southAmericaEl.classList.remove('display');
    asiaEl.classList.remove('display');
    africaEl.classList.remove('display');
    
    northAmericaBtnEl.classList.remove('backgroundBlue');
    southAmericaBtnEl.classList.remove('backgroundBlue');
    asiaBtnEl.classList.remove('backgroundBlue');
    africaBtnEl.classList.remove('backgroundBlue');
})

// add functionality to the africa btn
africaBtnEl.addEventListener('click', function(){
    africaEl.classList.remove('notDisplay')
    africaEl.classList.toggle('display');
    africaBtnEl.classList.toggle('backgroundBlue')

    northAmericaEl.classList.remove('display');
    europeEl.classList.remove('display');
    asiaEl.classList.remove('display');
    southAmericaEl.classList.remove('display');
    
    northAmericaBtnEl.classList.remove('backgroundBlue');
    europeBtnEl.classList.remove('backgroundBlue');
    asiaBtnEl.classList.remove('backgroundBlue');
    southAmericaBtnEl.classList.remove('backgroundBlue');
})

// add functionality to the asia btn
asiaBtnEl.addEventListener('click', function(){
    asiaEl.classList.remove('notDisplay')
    asiaEl.classList.toggle('display');
    asiaBtnEl.classList.toggle('backgroundBlue')

    northAmericaEl.classList.remove('display');
    europeEl.classList.remove('display');
    southAmericaEl.classList.remove('display');
    africaEl.classList.remove('display');
    
    northAmericaBtnEl.classList.remove('backgroundBlue');
    europeBtnEl.classList.remove('backgroundBlue');
    southAmericaBtnEl.classList.remove('backgroundBlue');
    africaBtnEl.classList.remove('backgroundBlue');
})
