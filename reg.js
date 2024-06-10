function validateForm() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const uname = document.getElementById("uname").value;
    const password = document.getElementById("password").value;
    const cpassword = document.getElementById("cpassword").value;
    const file = document.getElementById("file").value;
    const agree = document.getElementById("agree").checked;
    const nameError = document.getElementById("name-error");
    
    const addressError = document.getElementById(
        "address-error"
    );
    const emailError = document.getElementById(
        "email-error"
    );
    const unameError = document.getElementById(
        "uname-error"
    );
    const passwordError = document.getElementById(
        "password-error"
    );
    const cpasswordError = document.getElementById(
        "cpassword-error"
    );
    const fileError = document.getElementById(
        "file-error"
    );
   
    const agreeError = document.getElementById(
        "agree-error"
    );

    nameError.textContent = "";
    addressError.textContent = "";
    emailError.textContent = "";
    unameError.textContent = "";
    passwordError.textContent = "";
    cpasswordError.textContent = "";
    fileError.textContent = "";
    agreeError.textContent = "";

    let isValid = true;

    if (name === "" || /\d/.test(name)) {
        nameError.textContent =
            "Please enter your name properly.";
        isValid = false;
    }

    if (address === "") {
        addressError.textContent =
            "Please enter your address.";
        isValid = false;
    }

    if (email === "" || !email.includes("@")) {
        emailError.textContent =
            "Please enter a valid email address.";
        isValid = false;
    }
    if (uname === "" || /\d/.test(uname)) {
        unameError.textContent =
            "Please enter your name properly.";
        isValid = false;
    }

    if (password === "" || password.length < 6) {
        passwordError.textContent =
            "Please enter a password with at least 6 characters.";
        isValid = false;
    }
    if ( cpassword !== password ) {
        cpasswordError.textContent =
            "Please enter the password carefully.";
        isValid = false;
    }
    if (file === "" || /\d/.test(file)) {
        fileError.textContent =
            "Please choose a file.";
        isValid = false;
    }

    if (!agree) {
        agreeError.textContent =
            "Please agree to the above information.";
        isValid = false;
    }

    return isValid;
}
