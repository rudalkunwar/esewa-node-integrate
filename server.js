const express = require("express");
const bodyParser = require("body-parser");
const connectToMongo = require("./database/db");
const esewaRoutes = require("./routes/esewaRoute");
const addProductRoute = require("./routes/addProduct");

const app = express();
app.use(bodyParser.json());

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

connectToMongo();

// Routes
app.use("/product", addProductRoute);
app.use("/", esewaRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
