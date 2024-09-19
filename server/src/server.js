const http = require("http");

const app = require("./app");

const { loadPlanetsData } = require("./models/planets.model");
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

startServer();
//STARTING OUR SERVER USING THE HTTP BUILT IN MODULE
//ALLOWS US TO RESPONG TO HTTP REQUESTS BUT ALSO
//TO OTHERT TYPES OF CONNECTIONS FOR EXAMPLE
// WEBSOCKETS FOR REAL TIME COMMUNICATIONS AS
//OPPOSED TO SENDING REQUESTS AND SENDING RESPONSE
