const express = require("express");
const calcRoutes = require("./routes/calculatorRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();

app.use(express.json());
app.use("/", express.static("public"));
app.use("/calculator", calcRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
