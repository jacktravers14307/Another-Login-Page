function signup_info() {
    let email = document.getElementById("email-input").value;
    let username = document.getElementById("username-input").value;
    let password = document.getElementById("password-input").value;
    let password2 = document.getElementById("password-input2").value;

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate inputs
    if (!email || !username || !password || !password2) {
        alert('All fields are required');
        return;
    } else if (!emailRegex.test(email)) {
        alert('Invalid email format');
        return;
    } else if (password !== password2) {
        alert('Passwords do not match');
        return;
    }

    // Prepare the data to be sent to the server
    let signupData = {
        email: email,
        username: username,
        password: password
    };

    // Send data to the server using a POST request
    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Signup successful');
        } else {
            alert('Signup failed');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

// Real-time check for password match
function checkPasswordMatch() {
    let password = document.getElementById("password-input");
    let password2 = document.getElementById("password-input2");

    if (password.value !== password2.value) {
        password.style.border = "2px solid red";
        password2.style.border = "2px solid red";
    } else {
        password.style.border = "";
        password2.style.border = "";
    }
}

// Event listeners for password inputs
document.getElementById("password-input").addEventListener('input', checkPasswordMatch);
document.getElementById("password-input2").addEventListener('input', checkPasswordMatch);

function login_info() {
    let username = document.getElementById("username-input");
    let password = document.getElementById("password-input");

    let inputs = [username, password];
    inputs.forEach(input => {
        input.style.border = "";
    });

    if (!username.value || !password.value) {
        inputs.forEach(input => {
            if (!input.value) {
                input.style.border = "2px solid red";
            }
        });
    } else {
        console.log(`Username: ${username.value} \nPassword: ${password.value}`);
    }
}

