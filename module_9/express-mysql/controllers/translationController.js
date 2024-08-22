"use strict";

const { Translate } = require("@google-cloud/translate").v2;
const translate = new Translate();

const translateText = (data, res) => {
  translate
    .translate(data.text, data.target)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  translateText,
};
