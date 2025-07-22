const loginForm = document.getElementById("login-form")
const loginButton = document.getElementById("login-form-submit")
const loginErrorMsg = document.getElementById("login-error-msg")

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "login") {
        sessionStorage.setItem("loggedIn", "true");
        alert("Login Successful!");
        window.location.href = "success.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})