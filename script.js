
// JavaScript to toggle between Sign In and Sign Up forms

document.addEventListener('DOMContentLoaded', () => {
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    const showSignUp = document.getElementById('showSignUp');
    const showSignIn = document.getElementById('showSignIn');
    const showForgotPassword = document.getElementById('showForgotPassword');
    const backToSignIn = document.getElementById('backToSignIn');

    showSignUp.addEventListener('click', (e) => {
        e.preventDefault();
        signInForm.style.display = 'none';
        signUpForm.style.display = 'block';
        forgotPasswordForm.style.display = 'none';
    });

    showSignIn.addEventListener('click', (e) => {
        e.preventDefault();
        signInForm.style.display = 'block';
        signUpForm.style.display = 'none';
        forgotPasswordForm.style.display = 'none';
    });

    showForgotPassword.addEventListener('click', (e) => {
        e.preventDefault();
        forgotPasswordForm.style.display = 'block';
        signInForm.style.display = 'none';
        signUpForm.style.display = 'none';
    });

    backToSignIn.addEventListener('click', (e) => {
        e.preventDefault();
        signInForm.style.display = 'block';
        signUpForm.style.display = 'none';
        forgotPasswordForm.style.display = 'none';
    });
});





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