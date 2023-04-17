<div align="center">
	<br />
	</p>
	<br />
	<p>
		<a href="https://discord.gg/TKz7BMwEap"><img src="https://img.shields.io/discord/909261119103832084?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
		<a href="https://www.npmjs.com/package/quotes.js"><img src="https://img.shields.io/npm/v/quotes.js.svg?maxAge=3600" alt="npm version" /></a>
		<a href="https://www.npmjs.com/package/quotes.js"><img src="https://img.shields.io/npm/dt/quotes.js.svg?maxAge=3600" alt="npm downloads" /></a>
	</p>
</div>

## Example Usage

Install quotes.js

```
npm install quotes.js
```

```js
// TypeScript: import { getQuote } from "quotes.js";
const { getQuote } = require("quotes.js");

// Get a random quote's author
console.log(getQuote().author);

// Get a random quote
console.log(getQuote().quote);

// Get a love quote
console.log(getQuote("Love").quote);

// Get a random author, quote and category
console.log(`
${getQuote().author}
${getQuote().quote}
${getQuote().category}
`);
```

## Testing
```
npm test
```