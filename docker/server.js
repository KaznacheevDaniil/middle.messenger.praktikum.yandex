const express = require('express');

const app = express();
const PORT = process.env.PORT || 80;

app.use(express.static(__dirname + '/'));

app.get('*', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.listen(process.env.PORT, () => {
  console.log(`Мой порт: ${PORT}!`);
});
