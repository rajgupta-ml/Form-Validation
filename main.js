let id = (id) => document.getElementById(id);
let clss = (clss) => document.getElementsByClassName(clss);
let username = id("username");
let email = id("email");
let password = id("password");
let errorMsg = clss("error");
let successIcon = clss("success");
let faliureIcon = clss("failure");
let form = id("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    engine(username, 0, 'Username Cannot be blank');
    engine(email, 1, 'Email Cannot be blank');
    engine(password, 2, 'Password Cannot be blank');

});


let engine = (id, serial,message) =>{
    if(id.value.trim() === ''){
        errorMsg[serial].innerHTML = message;
        faliureIcon[serial].style.opacity = "1"; 
        successIcon[serial].style.opacity ="0";
    }else{
        errorMsg[serial].innerHTML = '';
        faliureIcon[serial].style.opacity = "0"; 
        successIcon[serial].style.opacity ="1";
    }
}