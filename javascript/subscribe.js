// subscribe form validation 
let subsEl =document.getElementById('subscribe-form');

subsEl.addEventListener('submit', function(e){
    e.preventDefault();

    let subsEmailField = document.getElementById('subs-email');
    let subsEmailValue = subsEmailField.value;
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    
    if(subsEmailValue.match(emailRegex)){
        subsEmailField.style.border ='2px solid green'; 
    } else{
        subsEmailField.style.border ='2px solid red'; 
        alert('Please, Enter valid Email Adress!')  
        return
    }

})