var arrayQuotes = [
  {
    caption: "Be yourself; everyone else is already taken.",
    author: "― Oscar Wilde",
  },
  {
    caption:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",

    author: "― Marilyn Monroe",
  },
  {
    caption:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "― Albert Einstein",
  },
  {
    caption: "So many books, so little time.",
    author: "― Frank Zappa",
  },
  {
    caption: "A room without books is like a body without a soul.",
    author: "― Marcus Tullius Cicero",
  },
  {
    caption:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "― Bernard M. Baruch",
  },
  {
    caption:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: "― Dr. Seuss",
  },
  {
    caption: "You only live once, but if you do it right, once is enough.",
    author: "― Mae West",
  },
  {
    caption: "Be the change that you wish to see in the world.",
    author: "― Mahatma Gandhi",
  },
  {
    caption:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "― Robert Frost",
  },
  {
    caption: "If you tell the truth, you don't have to remember anything.",
    author: "― Mark Twain",
  },
  {
    caption: "A friend is someone who knows all about you and still loves you.",
    author: "― Elbert Hubbard",
  },
  {
    caption:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "― Oscar Wilde",
  },
  {
    caption: "Always forgive your enemies; nothing annoys them so much.",
    author: "― Oscar Wilde",
  },
  {
    caption:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "― Mahatma Gandhi",
  },
  {
    caption: "Without music, life would be a mistake.",
    author: "― Friedrich Nietzsche",
  },
  {
    caption:
      "It is better to be hated for what you are than to be loved for what you are not.",
    author: "― Andre Gide",
  },
];

function getQuote() {
  var newQuote = document.getElementById("new-quote");
  var newAuthor = document.getElementById("new-author");
  var random = Math.floor(Math.random() * arrayQuotes.length);
  content = ``;
  for (var i = 0; i < random; i++) {
    content = `<q class="text-white" id="new-quote">${arrayQuotes[i].caption}</q><br />
    <cite class="text-white" id="new-author">${arrayQuotes[i].author}</cite>`;
  }
  document.getElementById("random-quote").innerHTML = content;
}
