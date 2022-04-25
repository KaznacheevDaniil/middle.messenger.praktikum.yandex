const express = require('express');

const app = express();
const PORT = 3000;


app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req, res){
    res.render(`${__dirname}/dist/index.html`);
});


app.listen(PORT, () => {
    console.log(`Мой текст и порт: ${PORT}!`);
});