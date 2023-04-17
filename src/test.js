// TypeScript: import quote from "myquotes";
const quote = require("myquotes");

// Get a random quote's author
console.log(quote().author);

// Get a random quote
console.log(quote().quote);

// Get a love quote
console.log(quote("Love").quote);

// Get a random author, quote and category
console.log(`
${quote().author}
${quote().quote}
${quote().category}
`);