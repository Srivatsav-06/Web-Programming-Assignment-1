

function validateLoginForm() {
    let valid = true;

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    const emailError = document.getElementById("loginEmailError");
    const passwordError = document.getElementById("loginPasswordError");

    emailError.style.display = "none";
    passwordError.style.display = "none";

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        emailError.style.display = "block";
        valid = false;
    }

    if (password.length < 6) {
        passwordError.style.display = "block";
        valid = false;
    }

    if (valid) {
        alert("Login Successful. Welcome back!");
        document.getElementById("loginForm").reset();
    }

    return false;
}

function validateRegisterForm() {
    let valid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmError = document.getElementById("confirmError");

    nameError.style.display = "none";
    emailError.style.display = "none";
    passwordError.style.display = "none";
    confirmError.style.display = "none";

    if (name === "") {
        nameError.style.display = "block";
        valid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        emailError.style.display = "block";
        valid = false;
    }

    if (password.length < 6) {
        passwordError.style.display = "block";
        valid = false;
    }

    if (password !== confirmPassword || confirmPassword === "") {
        confirmError.style.display = "block";
        valid = false;
    }

    if (valid) {
        alert("Registration Successful. Welcome to TechWorld!");
        document.getElementById("registerForm").reset();
    }

    return false;
}

