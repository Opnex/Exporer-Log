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
// function validatePlanet(planet) {
//     for (let key in planetLog) {
//         if (planet[key] === null || planet[key] === undefined) {
//             console.error(`Error: ${planet.name} has incomplete data!`)
//             return;
//         }
//     }
// }
// validatePlanet("Adulthood");

// Step 3: Validate Planet Data
function validatePlanet(planet) {
    for (let key in planet) { // Loop through the properties of the planet object
        if (planet[key] === null || planet[key] === undefined) {
            console.error(`Error: ${planet.name} has incomplete data! Missing property: ${key}`);
            return;
        }
    }
    console.log(`${planet.name} has complete data.`);
}


// Loop through planetLog to validate all entries
planetLog.forEach(planet => validatePlanet(planet)); 


// Step 4: Find Close Planets
function getClosePlanets() {
    const closePlanets = planetLog.filter(planet => planet.distance < 200 && !planet.explored);
    if (closePlanets.length > 0) {
        console.table(closePlanets);
    } else {
        console.log("No close unexplored planets!");
    }
}

// Call the function
getClosePlanets();


// Step 5: Mark a Planet as Explored
function markExplored(name) {
    if (!name) {
        console.log("Please provide a valid planet name!");
        return;
    }

    const planet = planetLog.find(planet => planet.name.toLowerCase() === name.toLowerCase());
    if (planet) {
        planet.explored = true;
        console.log(`${planet.name} has been explored!`);
    } else {
        console.log("Planet not in log!");
    }
}

// Example usage
markExplored("Venus"); // Marks Venus as explored
markExplored(""); // Logs "Please provide a valid planet name!"
markExplored("Pluto"); // Logs "Planet not in log!"