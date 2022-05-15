const express = require("express");

const app = express();
process.env.PORT = "3000";

app.use(express.static(__dirname + "/dist"));

app.get("*", function (req, res) {
  res.sendfile(__dirname + "/dist/index.html");
});

app.listen(process.env.PORT, () => {
  console.log(`Мой порт: ${process.env.PORT}!`);
});
