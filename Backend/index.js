const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("we are live");
});

app.listen(4000, () => {
  console.log("hlo we are live");
});
