const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); // To handle JSON data

const app = express();
app.use(bodyParser.json()); // Middleware to parse JSON request bodies

// Array to store signup info
let users = [];

// Serve static files (including script.js)
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle the POST request to store signup data
app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;

    if (username && email && password) {
        // Append the new user info to the users array
        users.push({
            username: username,
            email: email,
            password: password // In real-world apps, NEVER store passwords as plain text
        });

        console.log('User signed up:', { username, email });
        
        // Respond back to client with success message
        res.json({ success: true });
    } else {
        res.json({ success: false, message: "Invalid signup data" });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
