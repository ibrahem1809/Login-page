let userEmail = document.getElementById("useremail");
let password = document.getElementById("password");
let btn_login = document.getElementById("btn-sing-in");

let getUser = localStorage.getItem('email');
let getPassword = localStorage.getItem('password');

btn_login.addEventListener("click", function(e){
    e.preventDefault();
    if(userEmail.value === "" || password.value === ""){
        alert("Please Fill Data")
    }else {
        if((getUser && getUser === userEmail.value) && (getPassword && getPassword === password.value)){
            setTimeout( () => {
            window.location ="index.html";
        }, 1500);
        }else {
            console.log("username or passwor is wrong !!")
        }
    }
});
