const csvParser = require("csv-parse");
const fs = require("fs");
const path = require("path");

const habitablePlanets = [];

function isHabitablePlanet(planet) {
    return (
        planet["koi_disposition"] === "CONFIRMED" &&
        planet["koi_insol"] > 0.36 &&
        planet["koi_insol"] < 1.11 &&
        planet["koi_prad"] < 1.6
    );
}



//event emitter type function call

function loadPlanetsData(){
    return new Promise((resolve, reject) => 
        {fs.createReadStream(path.join(__dirname,'..', '..', 'data', "kepler_data.csv"))
            .pipe(
                csvParser.parse({
                    comment: "#",
                    columns: true, //return each row in our csv file as a JS Object with key value pairs rather than just an array of key values in a row
                })
            )
        
            //After piping to parse were recieving JS Objects, and for each object were running the on data event
            .on("data", (data) => {
                if (isHabitablePlanet(data)) {
                    habitablePlanets.push(data);
                }
            })
            .on("error", (err) => {
                console.log(err);
                reject(err);
            })
            .on("end", () => {
                console.log(`${habitablePlanets.length} habitable planets found!`);
                resolve();
            });
        }
    )//end of promise
}

function getAllPlanets() {
    return habitablePlanets;
}


//were using Streams in this module, so node 
//wont wait for any of our streams code to 
//complete before it returns our module.exports
//we need to make a JS Promise to solve this
module.exports = {
    loadPlanetsData,
    getAllPlanets,
}