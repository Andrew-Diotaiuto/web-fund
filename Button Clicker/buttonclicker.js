function message() {
alert("Ninja was liked!");
}

function login(button) {
if(button.innerText == "Login") {
button.innerText = "Logout";
} else {
    button.innerText = "Login"};
}

function hidebutton(button) {
button.remove();
}
