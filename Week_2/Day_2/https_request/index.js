const https = require('https'); // Import the 'https' module for making HTTPS requests

let url = 'https://jsonplaceholder.typicode.com/posts'; // Define the URL to make a request to

// Make a GET request to the specified URL
https.get(url, (res) => {
    let data = ''; // Initialize a variable to accumulate data chunks

    // Listen for 'data' events to receive data chunks from the response
    res.on('data', (chunk) => {
        data += chunk; // Concatenate each chunk to the data variable
    });

    // Listen for the 'end' event, which signifies the end of the response
    res.on('end', () => {
        console.log(JSON.parse(data)); // Parse and log the complete response data as JSON
    });

}).on('error', (err) => {
    // Handle any errors that occur during the request
    console.error(err);
});
