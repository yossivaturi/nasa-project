const launches = new Map();

//state
let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'kepler expo 1',
    rocket: 'explorer is1',
    launchDate: new Date('December 27, 2030'),
    destination: 'Kepler-442 b',
    customer: ['ZTM', 'NAASA'],
    upcoming: true,
    success: true,
};

launches.set(launch.flightNumber, launch);

//Thats our data access function
function getAllLaunches(){
    return Array.from(launches.values());
}

function addNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(
        latestFlightNumber,
        launch.flightNumber, 
        Object.assign(launch, {
            success: true,
            upcoming: true,
            customers: ['Zero to Mastery', 'NASA'],
            flightNumber: latestFlightNumber
        })
    );
}

module.exports = {
    getAllLaunches,
    addNewLaunch
};