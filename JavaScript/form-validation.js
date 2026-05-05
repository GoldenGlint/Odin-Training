const email=document.getElementById("email");

email.addEventListener("input", (event)=>{
    if(email.validity.valueMissing){
        email.setCustomValidity("Missing email");
    }
    else{
        email.setCustomValidity("");
    }
})

const country=document.getElementById("country");

country.addEventListener("input", (event)=>{
    if(country.validity.valueMissing){
        country.setCustomValidity("Missing country");
    }
    else{
        country.setCustomValidity("");
    }
})

const postalCode=document.getElementById("postal-code");

postalCode.addEventListener("input", (event)=>{
    if(postalCode.validity.valueMissing){
        postalCode.setCustomValidity("Missing postal code");
    }
    else{
        postalCode.setCustomValidity("");
    }
})

const password=document.getElementById("password");

password.addEventListener("input", (event)=>{
    if(password.validity.valueMissing){
        password.setCustomValidity("Missing password");
    }
    else{
        password.setCustomValidity("");
    }
})

const confirmPassword=document.getElementById("confirm-password");

confirmPassword.addEventListener("input", (event)=>{
    if(confirmPassword.validity.valueMissing){
        confirmPassword.setCustomValidity("Missing Confirm password");
    }
    else{
        confirmPassword.setCustomValidity("");
    }
    if(confirmPassword.value!=password.value){
        confirmPassword.setCustomValidity("Make sure passwords match");
    }
    else{
        confirmPassword.setCustomValidity("");

    }
})

email.setCustomValidity("Missing email");
country.setCustomValidity("Missing country");
postalCode.setCustomValidity("Missing postal code");
password.setCustomValidity("Missing password");
confirmPassword.setCustomValidity("Missing Confirm password");



const form=document.getElementById("form");

form.addEventListener("submit", (event)=>{
    if(!form.checkValidity()){
        event.preventDefault();
        form.setCustomValidity("There are errors in this form");
    }
    else{
        console.log("High Five!");
    }
})