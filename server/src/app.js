const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const planetsRouter = require('./routes/planets/planets.router');
const launchesRouter = require('./routes/launches/launches.router');


const app = express();



//Middleware
app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use(morgan('combined'));//middleware for logging

app.use(express.json());
//to serve all of our public files -> after this we can only 'npm run server' from our root directory and both apps should be served
app.use(express.static(path.join(__dirname, '..','public')));

app.use(planetsRouter)
app.use(launchesRouter);
//we want to serve the index.html file in our root url -> '/'
//index.html is the root of our React client app
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})

module.exports = app;