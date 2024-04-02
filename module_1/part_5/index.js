const express = require("express");
const Sentiment = require("sentiment");

const app = express();
const sentiment = new Sentiment();

app.get("/", (req, res) => {
  res.send(getSentiment("Coding ist sehr wunderbar, but javascript is meh!"));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

function getSentiment(sentence) {
  return sentiment.analyze(sentence);
}
