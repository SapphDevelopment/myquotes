type Category =
  | "Courage"
  | "Family"
  | "Friendship"
  | "Funny"
  | "Happiness"
  | "Inspirational"
  | "Life"
  | "Love"
  | "Motivational"
  | "Success"
  | "Technology"
  | "Wisdom";

interface Quote {
  text: string;
  author: string;
  category: Category;
  tags: string[];
}

const quotes: Quote[] = [
  /**
   * Courage Quotes
   */
  {
    text: "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.",
    author: "Nelson Mandela",
    category: "Courage",
    tags: ["courage"],
  },
  {
    text: "It takes courage to grow up and become who you really are.",
    author: "E.E. Cummings",
    category: "Courage",
    tags: ["courage"],
  },
  {
    text: "Courage is the most important of all the virtues because without courage, you can't practice any other virtue consistently.",
    author: "Maya Angelou",
    category: "Courage",
    tags: ["courage"],
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    category: "Courage",
    tags: ["courage"],
  },
  {
    text: "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.",
    author: "Harriet Tubman",
    category: "Courage",
    tags: ["courage"],
  },
  /**
   * Family Quotes
   */
  {
    text: "You don't choose your family. They are God's gift to you, as you are to them.",
    author: "Desmond Tutu",
    category: "Family",
    tags: ["family"],
  },
  {
    text: "Family is not an important thing. It's everything.",
    author: "Michael J. Fox",
    category: "Family",
    tags: ["family"],
  },
  {
    text: "To us, family means putting your arms around each other and being there.",
    author: "Barbara Bush",
    category: "Family",
    tags: ["family"],
  },
  {
    text: "A family is a place where minds come in contact with one another.",
    author: "Trenton Lee Stewart",
    category: "Family",
    tags: ["family"],
  },
  {
    text: "The bond that links your true family is not one of blood, but of respect and joy in each other's life.",
    author: "Richard Bach",
    category: "Family",
    tags: ["family"],
  },
  /**
   * Friendship Quotes
   */
  {
    text: "Don't walk in front of me; I may not follow. Don't walk behind me; I may not lead. Just walk beside me and be my friend.",
    author: "Albert Camus",
    category: "Friendship",
    tags: ["friends", "friendship"],
  },
  {
    text: "A friend is someone who knows all about you and still loves you.",
    author: "Elbert Hubbard",
    category: "Friendship",
    tags: ["friends", "friendship"],
  },
  {
    text: "True friends stab you in the front.",
    author: "Oscar Wilde",
    category: "Friendship",
    tags: ["friends", "friendship"],
  },
  {
    text: "Walking with a friend in the dark is better than walking alone in the light.",
    author: "Helen Keller",
    category: "Friendship",
    tags: ["friends", "friendship"],
  },
  {
    text: "A friend is one that knows you as you are, understands where you have been, accepts what you have become, and still, gently allows you to grow.",
    author: "William Shakespeare",
    category: "Friendship",
    tags: ["friends", "friendship"],
  },
  /**
   * Funny Quotes
   */
  {
    text: "I used to think I was indecisive, but now I'm not sure.",
    author: "Unknown",
    category: "Funny",
    tags: ["funny", "fun"],
  },
  /**
   * Happiness Quotes
   */
  {
    text: "Happiness is nothing more than good health and a bad memory.",
    author: "Albert Schweitzer",
    category: "Happiness",
    tags: ["happy", "happiness"],
  },
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
    category: "Happiness",
    tags: ["happy", "happiness"],
  },
  {
    text: "The most important thing is to enjoy your life—to be happy—it's all that matters.",
    author: "Audrey Hepburn",
    category: "Happiness",
    tags: ["happy", "happiness"],
  },
  {
    text: "Happiness is when what you think, what you say, and what you do are in harmony.",
    author: "Mahatma Gandhi",
    category: "Happiness",
    tags: ["happy", "happiness"],
  },
  {
    text: "Folks are usually about as happy as they make their minds up to be.",
    author: "Abraham Lincoln",
    category: "Happiness",
    tags: ["happy", "happiness"],
  },
  /**
   * Inspirational Quotes
   */
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    category: "Inspirational",
    tags: ["inspirational", "inspiration", "inspire"],
  },
  /**
   * Life Quotes
   */
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    category: "Life",
    tags: ["life"],
  },
  {
    text: "Twenty years from now you will be more disappointed by the things you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    author: "Mark Twain",
    category: "Life",
    tags: ["life"],
  },
  {
    text: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
    category: "Life",
    tags: ["life"],
  },
  {
    text: "The wound is the place where the light enters you.",
    author: "Rumi",
    category: "Life",
    tags: ["life"],
  },
  {
    text: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
    category: "Life",
    tags: ["life"],
  },
  {
    text: "All our dreams can come true, if we have the courage to pursue them.",
    author: "Walt Disney",
    category: "Life",
    tags: ["life"],
  },
  {
    text: "Don't cry because it's over, smile because it happened.",
    author: "Dr. Seuss",
    category: "Life",
    tags: ["life"],
  },
  {
    text: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author: "Maya Angelou",
    category: "Life",
    tags: ["life"],
  },
  {
    text: "Stop telling people everything. Most people don't care, and some secretly want you to fail.",
    author: "Unknown",
    category: "Life",
    tags: ["life"],
  },
  {
    text: "Choose your friends wisely. The fastest way to become better is to surround yourself with better people.",
    author: "Unknown",
    category: "Life",
    tags: ["life"],
  },
  {
    text: "Expect nothing, appreciate everything Be grateful for the little things in your life to find inner peace.",
    author: "Unknown",
    category: "Life",
    tags: ["life"],
  },
  {
    text: "Do your best and trust the process. The harder you work, the luckier you will get.",
    author: "Unknown",
    category: "Life",
    tags: ["life"],
  },
  {
    text: "5. Control yourself, not others Controlling others is strength. Controlling yourself is true power.",
    author: "Unknown",
    category: "Life",
    tags: ["life"],
  },
  {
    text: "6. Learn to react less. When you control your reaction, nobody can manipulate you.",
    author: "Unknown",
    category: "Life",
    tags: ["life"],
  },
  /**
   * Love Quotes
   */
  {
    text: "Love is not just a feeling, it's an action.",
    author: "Unknown",
    category: "Love",
    tags: ["love", "feelings"],
  },
  {
    text: "I have found that if you love life, life will love you back.",
    author: "Maya Angelou",
    category: "Love",
    tags: ["love", "feelings"],
  },
  {
    text: "The best love is the kind that awakens the soul and makes us reach for more, that plants a fire in our hearts and brings peace to our minds. And that's what you've given me. That's what I'd hoped to give you forever.",
    author: "Nicholas Sparks",
    category: "Love",
    tags: ["love", "feelings"],
  },
  {
    text: "If I know what love is, it is because of you.",
    author: "Hermann Hesse",
    category: "Love",
    tags: ["love", "feelings"],
  },
  {
    text: "I cannot let you burn me up, nor can I resist you. No mere human can stand in a fire and not be consumed.",
    author: "Jane Austen",
    category: "Love",
    tags: ["love", "feelings"],
  },
  {
    text: "There are no goodbyes for us. Wherever you are, you will always be in my heart.",
    author: "Rinaa#0007",
    category: "Love",
    tags: ["love", "feelings"],
  },
  {
    text: "Beauty is not in the face; beauty is a light in the heart.",
    author: "Rinaa#0007",
    category: "Love",
    tags: ["love", "feelings"],
  },
  {
    text: "Love is like the wind, you can't see it but you can feel it.",
    author: "Nicholas Sparks",
    category: "Love",
    tags: ["love", "feelings"],
  },
  {
    text: "In love there are two things: bodies and words.",
    author: "Joyce Carol Oates",
    category: "Love",
    tags: ["love", "feelings"],
  },
  {
    text: "Continue to share your heart with people even if it has been broken.",
    author: "Amy Poehler",
    category: "Love",
    tags: ["love", "feelings"],
  },
  {
    text: "Love is such a powerful force. It's there for everyone to embrace-that kind of unconditional love for all of humankind. That is the kind of love that impels people to go into the community and try to change conditions for others, to take risks for what they believe in.",
    author: "Coretta Scott King",
    category: "Love",
    tags: ["love", "feelings"],
  },
  {
    text: "To love is to recognize yourself in another.",
    author: "Eckhart Tolle",
    category: "Love",
    tags: ["love", "feelings"],
  },
  {
    text: "To be fully seen by somebody, then, and be loved anyhow - this is a human offering that can border on miraculous.",
    author: "Elizabeth Gilbert",
    category: "Love",
    tags: ["love", "feelings"],
  },
  {
    text: "Love has nothing to do with what you are expecting to get — only with what you are expecting to give — which is everything.",
    author: "Katharine Hepburn",
    category: "Love",
    tags: ["love", "feelings"],
  },
  {
    text: "Where there is great love, there are always miracles.",
    author: "Willa Cather",
    category: "Love",
    tags: ["love", "feelings"],
  },
  {
    text: "In real love, you want the other person's good. In romantic love, you want the other person.",
    author: "Margaret Anderson",
    category: "Love",
    tags: ["love", "feelings"],
  },
  /**
   * Motivational Quotes
   */
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "Motivational",
    tags: ["motivational", "motiveation"],
  },
  /**
   * Success Quotes
   */
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
    category: "Success",
    tags: ["success"],
  },
  {
    text: "Most great people have attained their greatest success just one step beyond their greatest failure.",
    author: "Napoleon Hill",
    category: "Success",
    tags: ["success"],
  },
  {
    text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer",
    category: "Success",
    tags: ["success"],
  },
  /**
   * Technology Quotes
   */
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    category: "Technology",
    tags: ["technology", "tech"],
  },
  {
    text: "I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it.",
    author: "Bill Gates",
    category: "Technology",
    tags: ["technology", "tech"],
  },
  {
    text: "The biggest risk is not taking any risk. In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks.",
    author: "Mark Zuckerberg",
    category: "Technology",
    tags: ["technology", "tech"],
  },
  {
    text: "When something is important enough, you do it even if the odds are not in your favor.",
    author: "Elon Musk",
    category: "Technology",
    tags: ["technology", "tech"],
  },
  /**
   * Wisdom Quotes
   */
  {
    text: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
    category: "Wisdom",
    tags: ["wisdom"],
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    category: "Wisdom",
    tags: ["wisdom"],
  },
  {
    text: "The mind is everything. What you think you become.",
    author: "Buddha",
    category: "Wisdom",
    tags: ["wisdom"],
  },
  {
    text: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
    category: "Wisdom",
    tags: ["wisdom"],
  },
];

export { quotes, Quote, Category };
