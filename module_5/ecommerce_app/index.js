const express = require("express");
const productsRoutes = require("./routes/productsRoutes");
const port = 3000;

const app = express();

app.use(express.json());
app.use("/", express.static("public"));
app.use("/products", productsRoutes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
