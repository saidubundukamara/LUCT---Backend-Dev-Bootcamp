const fs = require('fs'); // Import the 'fs' module for file system operations

// Use the readFile method to read the contents of 'example.txt'
fs.readFile('example.txt', 'utf8', (err, data) => {
  // The callback function is executed once the file is read

  if (err) {
    // If an error occurs during the read operation, log it to the console
    console.error(err);
    return; // Exit the callback function to prevent further execution
  }

  // If no error, log the contents of the file to the console
  console.log(data);
});
