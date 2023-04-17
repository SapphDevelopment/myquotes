import {
  courageQuotes,
  familyQuotes,
  friendshipQuotes,
  happinessQuotes,
  lifeQuotes,
  loveQuotes,
  motivationQuotes,
  perseveranceQuotes,
  successQuotes,
  technologyQuotes,
  wisdomQuotes,
} from "./quotes/imports.js";

function getQuote(category, index) {
  let quotes = [];

  if (category === "Courage") {
    quotes = courageQuotes;
  } else if (category === "Family") {
    quotes = familyQuotes;
  } else if (category === "Friendship") {
    quotes = friendshipQuotes;
  } else if (category === "Happiness") {
    quotes = happinessQuotes;
  } else if (category === "Life") {
    quotes = lifeQuotes;
  } else if (category === "Love") {
    quotes = loveQuotes;
  } else if (category === "Motivation") {
    quotes = motivationQuotes;
  } else if (category === "Perseverance") {
    quotes = perseveranceQuotes;
  } else if (category === "Success") {
    quotes = successQuotes;
  } else if (category === "Technology") {
    quotes = technologyQuotes;
  } else if (category === "Wisdom") {
    quotes = wisdomQuotes;
  } else {
    quotes = [
      ...courageQuotes,
      ...familyQuotes,
      ...friendshipQuotes,
      ...happinessQuotes,
      ...lifeQuotes,
      ...loveQuotes,
      ...motivationQuotes,
      ...perseveranceQuotes,
      ...successQuotes,
      ...technologyQuotes,
      ...wisdomQuotes,
    ];
  }

  const quoteIndex =
    index !== undefined ? index : Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];
  return { author: quote.author, quote: quote.quote, category: quote.category };
}

export default getQuote;
