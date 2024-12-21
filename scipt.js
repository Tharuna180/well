function login() {
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    
    if (username.trim() === "" || password.trim() === "") {
        message.style.color = "red";
        message.textContent = "Please enter your username and password!";
    } else {
        message.style.color = "green";
        message.textContent = "Login successfully finished";
        
    }
}