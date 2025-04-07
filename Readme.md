Space Explorer Log


Overview
Welcome to the "Space Explorer Log" task! You’ll build a system to manage a log of planetary discoveries using pure JavaScript. This task will test your skills with arrays, objects, functions, booleans, null, undefined, loops, and if statements. Use console.log or console.table to show your results. Let’s blast off!

Step 1: Create the Planetary Log
Objective: Create an array called planetLog with at least 5 planet objects. Each planet should have:
name (string): Planet name (e.g., "Mars").
distance (number): Distance from Earth in millions of kilometers (e.g., 78).
explored (boolean): True if visited, false if not.
type (string): "Rocky", "Gas", or "Ice".
Example:
javascript
const planetLog = [
  { name: "Mars", distance: 78, explored: true, type: "Rocky" },
  // Add 4 more...
];
Task: Display the log using console.table(planetLog).

Step 2: Loop Through the Log
Objective: Use a for or while loop to log planets based on their explored status.
Output:
If explored: "Explored: [name] - [type]"
If not explored: "Uncharted: [name] - [distance]M km away"
Task: Add " - Nearby!" if the distance is less than 100 million km and it’s unexplored.

Step 3: Validate Planet Data
Objective: Write a function validatePlanet(planet) that checks if any property is null or undefined.
Task:
If a property is missing, log: "Error: [name] has incomplete data!"
Test it by adding a planet with type: null or distance: undefined.
Task: Loop through planetLog to validate all entries.

Step 4: Find Close Planets
Objective: Write a function getClosePlanets() that uses .filter() to return planets with a distance less than 200 million km and explored set to false.
Task: Display the result with console.table.
Task: If no planets are found, log "No close unexplored planets!" using an if statement.

Step 5: Mark a Planet as Explored
Objective: Write a function markExplored(name) that finds a planet by its name (case-insensitive) and sets explored to true.
Task:
If found, update it and log: "[name] has been explored!"
If not found, log: "Planet not in log!"
Challenge: Handle cases where name is null or undefined by logging "Please provide a valid planet name!".

Deliverables
A single JavaScript file with all code.
Clear console output for each step using console.log or console.table.
Comments explaining each section (e.g., // Step 1: Creating the planet log).

Tips for Success
Add real or fictional planets for fun!
Test with edge cases (e.g., missing data, huge distances).
Pair up with a teammate to compare logs.

Submission
Due by 4 PM on Monday, April 7, 2025.
Click here to Submit

Important Note
Google things, research solutions, and write the code yourself. Avoid AI tools for code generation—working through challenges will make you a stronger coder. You’ve got this!
Happy coding! Let me know if you have questions.
