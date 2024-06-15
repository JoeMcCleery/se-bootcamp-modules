const products = require("../data/products");

function get(req, res) {
  res.status(200).json(products);
}

function categories(req, res) {
  const categories = products.reduce((acc, p) => {
    if (!acc.includes(p.category)) acc.push(p.category);
    return acc;
  }, []);

  res.status(200).json(categories);
}

module.exports = { get, categories };
