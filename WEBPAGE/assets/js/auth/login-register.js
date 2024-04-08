// Function to handle login form submission
function handleLoginFormSubmission(event) {
    event.preventDefault(); // Prevent form submission

    // Extract email and password from form fields
    // const email = document.getElementById("loginEmail").value;
    // const password = document.getElementById("loginPassword").value;

    // Extract email and password from form fields
    const email = document.querySelector(".login-form input[type='email']").value;
    const password = document.querySelector(".login-form input[type='password']").value;

    // HTTP request to login endpoint
    fetch('http://projectbackend.test/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    })
    .then(response => {
        if (response.ok) {
            // Login successful
            // return response.json();
             window.location.href = response.headers.get('Location');
        } else {
            // Handle error response
            throw new Error('Login failed');
        }
    })
    .then(data => {
        // Handle successful login response
        console.log(data);
        // Optionally, redirect to another page or update UI
    })
    .catch(error => {
        // Handle error
        console.error(error);
    });
}

// Function to handle registration form submission
function handleRegistrationFormSubmission(event) {
    event.preventDefault(); // Prevent form submission

    // Extract name, email, and password from form fields
    // const name = document.getElementById("registerName").value;
    // const email = document.getElementById("registerEmail").value;
    // const password = document.getElementById("registerPassword").value;

 // Extract name, email, and password from form fields
 const name = document.querySelector(".signup-form input[type='text'][placeholder='Enter your name']").value;
 const email = document.querySelector(".signup-form input[type='text'][placeholder='Enter your email']").value;
 const password = document.querySelector(".signup-form input[type='password']").value;


    // HTTP request to registration endpoint
    fetch('http://projectbackend.test/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
        }),
    })
    .then(response => {
        if (response.ok) {
            // Registration successful
            return response.json();
        } else {
            // Handle error response
            throw new Error('Registration failed');
        }
    })
    .then(data => {
        // Handle successful registration response
        console.log(data);
        // Optionally, redirect to login page or update UI
    })
    .catch(error => {
        // Handle error
        console.error(error);
    });
}
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to login and registration forms
    document.querySelector(".login-form form").addEventListener("submit", handleLoginFormSubmission);
    document.querySelector(".signup-form form").addEventListener("submit", handleRegistrationFormSubmission);
});

