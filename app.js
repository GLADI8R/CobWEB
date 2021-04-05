const port = 3000;
const express = require('express');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
   res.render('Home');
})

app.listen(port, () => {
   console.log("Server started. Port:", port);
});