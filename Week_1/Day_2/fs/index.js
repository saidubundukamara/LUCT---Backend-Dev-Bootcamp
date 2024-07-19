// Importing the 'fs' (file system) module
const fs = require('fs');

// Reading the contents of 'example.txt' with UTF-8 encoding
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    // Handling errors if the file read fails
    console.error(err);
    return;
  }
  // Printing the content of the file to the console
  console.log(data);
});

// Writing 'The quick brown fox' to 'example.txt'
fs.writeFile('example.txt', 'The quick brown fox', (err) => {
  if (err) {
    // Handling errors if the file write fails
    console.error(err);
    return;
  }
  // Logging a success message
  console.log('File written successfully!');
});

// Appending ', jumps over the lazy dog' to 'example.txt'
fs.appendFile('example.txt', ', jumps over the lazy dog', (err) => {
  if (err) {
    // Handling errors if the file append fails
    console.error(err);
    return;
  }
  // Logging a success message
  console.log('File appended successfully!');
});

// Deleting 'example.txt'
fs.unlink('example.txt', (err) => {
  if (err) {
    // Handling errors if the file delete fails
    console.error(err);
    return;
  }
  // Logging a success message
  console.log('File deleted successfully!');
});
