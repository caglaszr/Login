const formOpenBtn = document.querySelector("#form-open");
home = document.querySelector(".home");
formContainer = document.querySelector(".form_container");
formCloseBtn = document.querySelector(".form_close");
signupBtn = document.querySelector("#signup");
loginBtn = document.querySelector("#login");
pwShowHide = document.querySelectorAll(".fa-eye-slash");


formOpenBtn.addEventListener("click",()=>home.classList.add("show"));
formCloseBtn.addEventListener("click",()=>home.classList.remove("show"));

pwShowHide.forEach(icon =>{
    icon.addEventListener("click" , () => {
        let getPwInput = icon.parentElement.querySelector("input");
        if(getPwInput === "password")
        {
            getPwInput.type="text";
            icon.classList.replace("fa-eye-slash","fa-eye");
        }
        else{
            getPwInput.type="password";
            icon.classList.replace("fa-eye","fa-eye-slash");
        }
    })
})

signupBtn.addEventListener("click",(e) =>{
    e.preventDefault();
    formContainer.classList.add("active")

})

loginBtn.addEventListener("click",(e) =>{
    e.preventDefault();
    formContainer.classList.remove("active")

})