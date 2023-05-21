// form element
let formEl=document.getElementById('contacts-form');
let messageField;

messageField=document.getElementById('message');
   // empty messige field when user clicks in message field input
   messageField.addEventListener('click', function(){
    messageField.innerText=" ";
})

formEl.addEventListener('submit', function(e){
    e.preventDefault();
    
    // first name element
    let firstNameField = document.getElementById('first-name');
    let firstNameValue = document.getElementById('first-name').value;
    let errorTextFirstName = document.getElementById('error-first-name');
    // name and last name regex
    let nameRegex = /^[a-zA-Zა-ჰ]+(([',. -][a-zA-Zა-ჰ ])?[a-zA-Z ა-ჰ]*)*$/;

    // first name field validation logic
    if(firstNameValue.match(nameRegex)){
        firstNameField.style.border ='2px solid green';
        errorTextFirstName.innerText =' '
    } else{
        errorTextFirstName.innerText='Please, enter valid First Name!';
        errorTextFirstName.style.color='red'
        firstNameField.style.border ='2px solid red';
        
    }
    // last name element
    let lastNameField = document.getElementById('last-name');
    let lastNameValue =document.getElementById('last-name').value;
    let errorTextlastName =document.getElementById('error-last-name');
    
    // last name field validation logic
    if(lastNameValue.match(nameRegex)){
        lastNameField.style.border ='2px solid green';
        errorTextlastName.innerText =' '
    } else{
        errorTextlastName.innerText='Please, enter valid Last Name!';
        errorTextlastName.style.color='red'
        lastNameField.style.border ='2px solid red';
        
    }

    // subject element
    let subjectValue =document.getElementById('subject').value;
    let errorTextSubject= document.getElementById('error-subject');
    let subjectField = document.getElementById('subject');
    // subject field validation logic
    if(subjectValue.length==0){
         errorTextSubject.innerText='Please, enter the subject!';
        errorTextSubject.style.color='red';
        subjectField.style.border =' 2px solid red'
        
    }else{
        subjectField.style.border='2px solid green';
       

    }

    // message element
    messageField = document.getElementById('message');
    let messageValue= messageField.value;
    let errorTextMessage = document.getElementById('error-message');
    // message field validation logic
    if(messageValue == " " || messageValue=="Message"){
        errorTextMessage.textContent="Please enter message!";
        errorTextMessage.style.color='red'
        messageField.style.border="2px solid red"
    }else{
        errorTextMessage.textContent=''
        messageField.style.border="2px solid green"
    }

    // email element
    let emailField = document.getElementById('email');
    let emailValue = document.getElementById('email').value;
    let errorTextEmail =document.getElementById('error-email');
    // email regex
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    // email field validation 
    if(emailValue.match(emailRegex)){
        emailField.style.border ='2px solid green';
        errorTextEmail.innerText =' '
        
    } else{
        errorTextEmail.innerText='Please, enter valid Name!';
        errorTextEmail.style.color='red'
        emailField.style.border ='2px solid red';   
    }

})

    // emailfield validation logic 
    emailField.addEventListener('blur', function(){
         // email element
        let emailField = document.getElementById('email');
        let emailValue = document.getElementById('email').value;
        let errorTextEmail =document.getElementById('error-email');
        // email regex
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if(emailValue.match(emailRegex)){
            emailField.style.border ='2px solid green';
            errorTextEmail.innerText =' '
            
        } else{
            errorTextEmail.innerText='Please, enter valid Name!';
            errorTextEmail.style.color='red'
            emailField.style.border ='2px solid red';   
        }
    })
