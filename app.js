const port = 3000;
const express = require('express');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
   res.render('Home');
});

app.get('/admission', (req, res) => {
   res.render('Admission');
});

app.get('/bTech', (req, res) => {
   res.render('BTech');
});

app.get('/MTech', (req, res) => {
   res.render('MTech');
});

app.get('/PhD', (req, res) => {
   res.render('PhD');
});

app.get('/faculty', (req, res) => {
   res.render('Faculty');
});

app.get('/labs', (req, res) => {
   res.render('Laboratory');
});

app.get('/resProj', (req, res) => {
   res.render('ResearchProjects');
});

app.get('/resFaci', (req, res) => {
   res.render('ResearchFacilities');
});

app.listen(port, () => {
   console.log("Server started. Port:", port);
});