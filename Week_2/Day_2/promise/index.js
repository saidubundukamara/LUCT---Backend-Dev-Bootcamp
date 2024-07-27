const fs = require('fs').promises; // Import the 'fs' module using the promises API for asynchronous operations

// Use promises to read from and write to the file
fs.readFile('example.txt', 'utf8')
  .then(data => {
    console.log(data); // Log the initial contents of the file
  })
  .then(() => {
    // Write new content to the file
    return fs.writeFile('example.txt', 'Ojo say e nr dae cam');
  })
  .then(() => {
    // Read the updated contents of the file
    return fs.readFile('example.txt', 'utf8');
  })
  .then(data => {
    console.log(data); // Log the updated contents of the file
  })
  .catch(err => {
    console.error(err); // Log any errors that occur during the file operations
  });
