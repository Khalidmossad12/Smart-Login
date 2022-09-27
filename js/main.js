
// Sign Up
var signUpNameInput = document.getElementById('name');
var signUpEmailInput = document.getElementById('email');
var signUpPasswordInput = document.getElementById('password');
var signUpButton = document.getElementsByClassName("signup");

// Log In
var logInEmailInput = document.getElementById('login-email');
var logInPasswordInput = document.getElementById('login-password');
//var logInBtn = document.querySelector(".logIn") ;
var linkLogin = document.getElementById("link");


var container = [];
if (localStorage.getItem('ourData') != null) {
    container = JSON.parse(localStorage.getItem('ourData'));
}

//signUpButton.addEventListener("click" , signUp ) ;

function signUp() {

    if (signUpNameInput.value == "" || signUpEmailInput.value == "" || signUpPasswordInput.value == "") {

        document.getElementById("exist").innerHTML = "All inputs is required";
    }

    else {
        var data = {
            name: signUpNameInput.value,
            email: signUpEmailInput.value,
            password: signUpPasswordInput.value
        }

        for( var i = 0; i < container.length; i++)
        {
            if (signUpEmailInput.value == container[i].email) {
                document.getElementById("exist").innerHTML = "email already exist";
                document.getElementById("good").innerHTML = "";
                return;
            }

        }

        document.getElementById("exist").innerHTML = "";
        container.push(data);
        localStorage.setItem("ourData", JSON.stringify(container));
        document.getElementById("good").innerHTML = "success";
        console.log(container);
    }

} 

//wellcome
var user = localStorage.getItem('nameStorage');
document.getElementById("add").innerHTML = user;

function logIn() {
    if (logInEmailInput.value == "" || logInPasswordInput == "") {
        document.getElementById("incorrect").innerHTML = "All inputs is required";
    }

    else {

        document.getElementById("incorrect").innerHTML = "";
        for (var i = 0; i < container.length; i++) {

            if (logInEmailInput.value == container[i].email && logInPasswordInput.value == container[i].password) {

                localStorage.setItem("nameStorage" , container[i].name)
                window.location.href = "welcome.html";
            }
        }
        document.getElementById("incorrect").innerHTML = "incorrect email or password";

    }
}








