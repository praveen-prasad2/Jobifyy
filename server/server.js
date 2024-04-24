const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/jobs",require("./routes.js/jobRoute"))

app.listen(port, () => {
  console.log("Server Running");
});
