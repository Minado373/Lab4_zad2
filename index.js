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

// Com4_2.1be
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

// Com4_2.2be
app.post("/jokebook/joke/:category", (req, res) => {
  const category = req.params.category;
  const { joke, response } = req.body;
  if (!category || !joke || !response) {
    return res.status(400).json({ error: "Invalid input" });
  }

  if (category === "lameJoke") {
    lameJoke.push({ joke, response });
    res.json({ joke, response });
  } else if (category === "funnyJoke") {
    funnyJoke.push({ joke, response });
    res.json({ joke, response });
  } else {
    return res.status(400).json({ error: `no jokes for category ${category}` });
  }
});

// TODO: 4_3 - CORS

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
