"use strict";
let categories = ["funnyJoke", "lameJoke"];

let funnyJoke = [
  {
    joke: "Dlaczego komputer poszedł do lekarza?",

    response: "Bo złapał wirusa!",
  },

  {
    joke: "Dlaczego komputer nie może być głodny?",

    response: "Bo ma pełen dysk!",
  },

  {
    joke: "Co mówi jeden bit do drugiego?",

    response: "„Trzymaj się, zaraz się przestawiamy!”",
  },
];

let lameJoke = [
  {
    joke: "Dlaczego programiści preferują noc?",

    response: "Bo w nocy jest mniej bugów do łapania!",
  },

  {
    joke: "Jak nazywa się bardzo szybki programista?",

    response: "Błyskawiczny kompilator!",
  },
];

const express = require("express");
const app = express();

app.use(express.json());

// TODO: 4_2 - Jokebook

app.get("/jokebook/categories", (req, res) => {
  res.json(categories);
});

app.get("/joke/:category", (req, res) => {
  const category = req.params.category;

  if (!category) {
    return res.status(400).json({ error: "Invalid input" });
  }

  let jokes;

  if (category === "lameJoke") {
    jokes = lameJoke;
  } else if (category === "funnyJoke") {
    jokes = funnyJoke;
  } else {
    return res.status(400).json({ error: `no jokes for category ${category}` });
  }

  const randomJoke = Math.floor(Math.random() * jokes.length);

  res.json(jokes[randomJoke]);
});

app.get("/jokebook/jokes", (req, res) => {
  res.json({
    funnyJoke,
    lameJoke,
  });
});

// TODO: 4_3 - CORS

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
