const firstName = document.querySelector("#fname");
const firstNameError = document.querySelector("#fnameerr");
const userName = document.querySelector("#uname");
const userNameError = document.querySelector("#unameerr");
const email = document.getElementById("email");
const emailError = document.getElementById("emailerr");
const password = document.getElementById("pwd");
const passwordError = document.getElementById("pwderr");
const telephone = document.getElementById("teleno");
const telephoneError = document.getElementById("telenoerr");
const panCard = document.getElementById("pcard");
const panCardError = document.getElementById("pcarderr");

firstName.addEventListener('keyup', ()=>{
    const name = firstName.value;
    if(!(name.match(/^[a-zA-Z]{4,14}[a-zA-Z]$/))){
    firstName.style.borderColor = "yellow";
    firstNameError.innerHTML ="First name should contain 4-15 characters.";
    }
    else{
        firstName.style.borderColor = "black";
        firstNameError.innerHTML ="";
    }
}, false);

userName.addEventListener('keyup', ()=>{
    const uname = userName.value;
    if(!(uname.match(/^[a-zA-Z0-9]{5,11}[a-zA-Z0-9]$/))){
    userName.style.borderColor = "yellow";
    userNameError.innerHTML ="User name should be alphanumeric and should contain 5-12 characters.";
    }
    else{
        userName.style.borderColor = "black";
        userNameError.innerHTML ="";
    }
}, false);

email.addEventListener('keyup', ()=>{
    const userEmail = email.value;
    if(!(userEmail.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/))){
    email.style.borderColor = "yellow";
    emailError.innerHTML ="Enter a valid email address";
    }
    else{
        email.style.borderColor = "black";
        emailError.innerHTML ="";
    }
}, false);

password.addEventListener('keyup', ()=>{
    const pwd = password.value;
    if(!(pwd.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/))){
    password.style.borderColor = "yellow";
    passwordError.innerHTML ="Password must be alphanumeric and 8-20 characters long.";
    }
    else{
        password.style.borderColor = "black";
        passwordError.innerHTML ="";
    }
}, false);

telephone.addEventListener('keyup', ()=>{
    const tele = telephone.value;
    if(!(tele.match(/^[6-9][0-9]{9}$/))){
    telephone.style.borderColor = "yellow";
    telephoneError.innerHTML ="Enter a valid telephone number.";
    }
    else{
        telephone.style.borderColor = "black";
        telephoneError.innerHTML ="";
    }
}, false);

panCard.addEventListener('keyup', ()=>{
    const pan = panCard.value;
    if(!(pan.match(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/))){
        panCard.style.borderColor = "yellow";
        panCardError.innerHTML ="Enter a valid pan card number.";
    }
    else{
        panCard.style.borderColor = "black";
        panCardError.innerHTML ="";
    }
}, false);


