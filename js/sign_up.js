let userName = document.getElementById("userName");
let email = document.getElementById("userEmail");
let password = document.getElementById("password");

let register_btn = document.getElementById("sign-up-btn");

register_btn.addEventListener("click" , function(){
    if(userName.value === "" || email.value === "" || password.value === ""){
        alert("Please Fill Data")
    }else {
        localStorage.setItem('username', userName.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value);
        
        setTimeout( () => {
            window.location ='sign_in.html';
        });
    }
})