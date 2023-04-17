<div align="center">
	<br />
	</p>
	<br />
	<p>
		<a href="https://discord.gg/TKz7BMwEap"><img src="https://img.shields.io/discord/909261119103832084?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
		<a href="https://www.npmjs.com/package/myquotes"><img src="https://img.shields.io/npm/v/myquotes.svg?maxAge=3600" alt="npm version" /></a>
		<a href="https://www.npmjs.com/package/myquotes"><img src="https://img.shields.io/npm/dt/myquotes.svg?maxAge=3600" alt="npm downloads" /></a>
	</p>
</div>

## Example Usage

Install myquotes

```
npm install myquotes
```

```js
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
```

## Testing
```
npm test
```