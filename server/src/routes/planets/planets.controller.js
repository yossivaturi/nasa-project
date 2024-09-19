const {getAllPlanets} = require('../../models/planets.model');

function httpGetAllPlanets(req, res) {
    // the return value isnt used by express we just
    // using the return here to make sure our function 
    // will stop executing after setting the response
    return res.status(200).json(getAllPlanets());
}


module.exports = {
    httpGetAllPlanets
};