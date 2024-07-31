// JavaScript to toggle between Sign In and Sign Up forms

document.addEventListener('DOMContentLoaded', () => {
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');
    const showSignUp = document.getElementById('showSignUp');
    const showSignIn = document.getElementById('showSignIn');

    showSignUp.addEventListener('click', (e) => {
        e.preventDefault();
        signInForm.style.display = 'none';
        signUpForm.style.display = 'block';
    });

    showSignIn.addEventListener('click', (e) => {
        e.preventDefault();
        signInForm.style.display = 'block';
        signUpForm.style.display = 'none';
    });
});

function togglePasswordVisibility(fieldId) {
    const passwordField = document.getElementById(fieldId);
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}




function showPayment() {
    var courseDropdown = document.getElementById("courseDropdown");
    var paymentInput = document.getElementById("payment");
    
    // Course payment mapping
    var coursePayment = {
      "Web Development": "5000",
      "Data Science": "7000",
      "Graphic Design": "6000"
    };

    // Get selected course
    var selectedCourse = courseDropdown.value;

    // Display the payment
    paymentInput.value = coursePayment[selectedCourse] || "";
  }