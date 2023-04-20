import { quotes, Quote, Category } from "./quotes.js";

function getQuote(category: Category | "Random"): Quote {
  const categories: Category[] = [...new Set(quotes.map(quote => quote.category))];
  let filteredQuotes: Quote[];

  if (category === "Random") {
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];
    filteredQuotes = quotes.filter(
      (quote) => quote.category === randomCategory
    );
  } else {
    filteredQuotes = quotes.filter((quote) => quote.category === category);
  }

  const quote =
    filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];
  return quote
}

export { getQuote };
