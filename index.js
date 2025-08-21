const express = require("express");
const app = express();
const port = 3002;

app.get("/", (req, res) => {
  res.send("Finding Sum");
});
app.get("/findsum", (req, res) => {
  const n1 = parseInt(req.query.n1);
  const n2 = parseInt(req.query.n2);
  res.send("Sum " + (n1 + n2));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
