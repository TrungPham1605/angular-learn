function checkPassword() {
    const password = document.getElementById('password').value;
    const result = document.getElementById('result');
    
    // Regular expressions for password validation
    const minLength = /.{8,}/; // At least 8 characters
    const upperCase = /[A-Z]/; // At least one uppercase letter
    const digit = /\d/; // At least one digit
    const specialChar = /[!@#$%^&*()_+\-=\[\]{}]/; // At least one special character

    if (minLength.test(password) &&
        upperCase.test(password) &&
        digit.test(password) &&
        specialChar.test(password)) {
        result.textContent = "Password is strong!";
        result.style.color = "green";
    } else {
        result.textContent = "Password is weak. It should be at least 8 characters long, include an uppercase letter, a digit, and a special character from !@#$%^&*()_+-=[]{}.";
        result.style.color = "red";
    }
}
