const launches = new Map();

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

module.exports = {
    getAllLaunches
};