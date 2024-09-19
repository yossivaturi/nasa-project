// const {launches} = require('../../models/launches.model');
const {
    getAllLaunches,
    addNewLaunch
} = require('../../models/launches.model');


//The controller takes the data as it lives in the model 
//and manipulates the data into a format that works for our API (json for the front end)

//Ideally the controller will focus on the request and the response 
//and our models will give us the data accesss functions which control how the data
//in the model can be Written/Read
function httpGetAllLaunches(req, res) {//Practice: every func that starts with http return a response
    //Not good- our controller doesnt need to know
    //the launches is of type Map and convert it to Array
    //It will be better to abstract this implementation detail away
    // return res.status(200).json(Array.from(launches.values()));
    return res.status(200).json(Array.from(getAllLaunches()));
}

function httpAddNewLaunch(req, res) {
    const launch = req.body;

    if(!launch.mission || !launch.rocket || !launch.launchDate
         || !launch.destination){
        return res.status(400).json({
            error: "Missing required launch property",
        });
        }

    launch.launchDate = new Date(launch.launchDate)
    if(isNaN(launch.launchDate)) {
        return res.status(400).json({
            error: 'Invalid launch date',
        });
    }
    addNewLaunch(launch);
    //201 = Created
    return res.status(201).json(launch);
}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch
}