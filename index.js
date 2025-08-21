const express = require("express");
const app = express();
const port = 3002;

app.get("/", (req, res) => {
  res.send("Finding Sum");
});
app.get("/findsum", (req, res) => {
  res.send("Need to implement");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
