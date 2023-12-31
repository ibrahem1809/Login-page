let userInfo = document.getElementById("user_info");
let links = document.getElementById("links");
let main = document.getElementById("main");

let checkUserName = localStorage.getItem("username");
if(checkUserName){
    links.remove();
    userInfo.style.display = "flex";
    main.innerHTML = `Hello, ${checkUserName}`
    userInfo.innerHTML = `
        <li><a href="#" id="user">${checkUserName} <i class="fa-solid fa-user"></i></a></li>
        <li><a href="#" id="logOut">Logout <i class="fa-solid fa-right-from-bracket"></i></a></li>
    `
}

logOut.addEventListener("click", function(){
    localStorage.clear;
    setTimeout( () => {
            window.location ="sign_up.html";
        }, 2000);
})