const fs = require('fs').promises; // Import the 'fs' module and use the promises API for asynchronous operations

async function main() {
    // Define an asynchronous function to read from a file
    async function readFileAsync() {
        try {
            // Attempt to read 'example.txt' with UTF-8 encoding
            const data = await fs.readFile('example.txt', 'utf8');
            console.log(data); // Log the file contents to the console
        } catch (err) {
            console.error(err); // Log any errors that occur during the read operation
        }
    }

    // Define an asynchronous function to write to a file
    async function writeToFile() {
        try {
            // Attempt to write a string to 'example.txt'
            await fs.writeFile('example.txt', 'Ojo say e nr dae cam');
        } catch (error) {
            console.error(error); // Log any errors that occur during the write operation
        }
    }

    // Execute the functions sequentially
    await readFileAsync(); // Read and log the contents of the file before writing
    await writeToFile();   // Write new content to the file
    await readFileAsync(); // Read and log the contents of the file after writing
}

main(); // Call the main function to execute the code
