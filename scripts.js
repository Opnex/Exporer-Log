// Step 1: Create the Planetary Log
const planetLog = [
        { name: "Mars", distance: 78, explored: true, type: "Rocky" },
        { name: "Venus", distance: 41, explored: false, type: "Rocky" },
        { name: "Jupiter", distance: 628, explored: true, type: "Gas" },
        { name: "Neptune", distance: 4495, explored: false, type: "Ice" },
        { name: "Mercury", distance: 91, explored: true, type: "Rocky" }
  ];
  console.table(planetLog);
  
//   Step 2: Loop Through the Log

planetLog.forEach((planet, index) => {
    if (planet.explored) {
        console.log(`Explored: ${planet.name} - ${planet.type}`);
    } else {
        let charted = `Uncharted: ${planet.name} - ${planet.distance}M km away`;
        if (planet.distance < 100) {
            charted += " - Nearby!";
        }
        console.log(charted);
    }
});


// Step 3: Validate Planet Data
function validatePlanet(planet) {
    for (let key in planet) {
        if (planet[key] === null || planet[key] === undefined) {
            console.error(`Error: ${planet.name || "Unknown"} has incomplete data! Missing property: ${key}`);
            return false;
        }
    }
    return true;
}
// Example usage: Validate all planets in the planetLog
planetLog.forEach(planet => validatePlanet(planet));