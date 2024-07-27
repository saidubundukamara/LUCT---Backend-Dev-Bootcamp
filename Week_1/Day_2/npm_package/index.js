// Importing the 'country-code-lookup' module
const lookup = require('country-code-lookup');

// Looking up country information by ISO code 'USA'
let countryCode = lookup.byIso('SL');

// Printing the country information to the console
console.log(countryCode);

