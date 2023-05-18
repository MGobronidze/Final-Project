// add user experience section on the index page
let clientsExperienceWrapperEl = document.querySelector('.clients-experience-wrapper');
let arrowLeftEl = document.querySelector('.fa-circle-chevron-left')
let arrowRightEl = document.querySelector('.fa-circle-chevron-right');
let indexCount= 0;

let infoLength;

// get user experience from API
function addUserInfo(){
    fetch('https://reqres.in/api/users?page=2', {
    method:'Get'
})
.then(function(respose){
    if(respose.status !==200){
        throw 'error'
    }
    return respose.json();
})
.then(function(resposeDataJs){
    // create user card info elements
    let imgEl = document.createElement('img');
    let fullNameEl =document.createElement('p');

    // add classes to the user image and user full name elements
    imgEl.classList.add('user-image');
    fullNameEl.classList.add('user-fullname');

    // set image src attribute to the user image link from api
    imgEl.setAttribute('src',resposeDataJs.data[indexCount]['avatar']);

    // create user full name template string 
    let userFullName =`${resposeDataJs.data[indexCount]['first_name']} ${resposeDataJs.data[indexCount]['last_name']}`;
    
    // set full name element to the user full name from the api
    fullNameEl.textContent= userFullName;

    // add image and full name elements to the user experience section
    clientsExperienceWrapperEl.appendChild(imgEl);
    clientsExperienceWrapperEl.appendChild(fullNameEl);


    // create comment section  
    let commentEl =document.createElement('p');
    commentEl.classList.add('user-comment');
    commentEl.textContent = 'If you’re twenty-two, physically fit, hungry to learn and be better, I urge you to travel – as far and as widely as possible. Sleep on floors if you have to';
    clientsExperienceWrapperEl.appendChild(commentEl);
    infoLength = resposeDataJs.data.length;
})
.catch(function(error){
    let pEl =document.createElement('p');
    pEl.textContent = 'Server Error';
    pEl.setAttribute('class', 'error-message')
    clientsExperienceWrapperEl.appendChild(pEl);
});
}
addUserInfo();

// adding functionality to the left and right arrows;
arrowLeftEl.addEventListener('click', function(){
    if(indexCount == 0){
        return
    }else{
        indexCount--;
        clientsExperienceWrapperEl.textContent =' ';
        addUserInfo()
    }   
})

arrowRightEl.addEventListener('click', function(){
    if(indexCount == infoLength-1){
        return
    }else{
        indexCount++;
        clientsExperienceWrapperEl.textContent =' ';
        addUserInfo()
    }
})
