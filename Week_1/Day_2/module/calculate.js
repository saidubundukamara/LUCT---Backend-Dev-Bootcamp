// Defining the add function
function add(a, b) {
    return a + b;
}

// Defining the sub function
function sub(a, b) {
    return a - b;
}

// Defining the mul function
function mul(a, b) {
    return a * b;
}

// Exporting the functions for use in other modules
module.exports = {
    add,
    sub,
    mul
};