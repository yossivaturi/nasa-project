//this router Moudule is exported to app.js, the router is using a controller
//and the controller is using the model
//launchesRouter takes care of requests related to launches
const express = require("express");
const {
    httpGetAllLaunches,
    httpAddNewLaunch
} = require("./launches.controller");

const launchesRouter = express.Router();

launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpAddNewLaunch);

module.exports = launchesRouter;