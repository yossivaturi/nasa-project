//we keep our controllers and routers together
// in the folder structure because
//they always in a one to one relationships.
//a router uses a controller, the controller is only ever used by that router
//a controller can use several models, and also a model can be used by several controllers
//our model isn't so it seperated in the folder structure

const express = require('express');
const {//Destructure functions from module
    httpGetAllPlanets,  
} = require('./planets.controller')

const planetsRouter = express.Router();

planetsRouter.get('/planets', httpGetAllPlanets);

module.exports = planetsRouter;