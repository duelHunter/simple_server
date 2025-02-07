const express = require('express'); // Import Express
const app = express(); // Create an Express app

const PORT = 3000; // Define the port

// Define a basic route
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
