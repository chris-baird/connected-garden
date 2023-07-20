const {
  TICK_RATE,
  WATER_EMPTY,
  MOISTURE_LOW,
  MOISTURE_HIGH,
} = require("./constants");

// App starts
// Startup function runs
// Main interval starts and runs tick function
// Water level is checked
// Moisture level is checked
// Pump is run if moisture level too low
// Pump turns off if moisture is good

let waterIsEmpty = false;
let moistureLevel = 1000;

function init() {
  console.log("Init");
  setup();

  let tickInterval = setInterval(tick, TICK_RATE);
}

function setup() {
  console.log("Setup");
}

function tick() {
  console.log("************************Tick************************");
  checkWaterLevel();
  if (!waterIsEmpty) {
    checkMoisture();
  }
}

function checkWaterLevel() {
  console.log("Checking water level");
  // Use float switch logic here water level
  let waterLevel = 1;

  if (waterLevel === WATER_EMPTY) {
    console.log("Water is empty");
    waterIsEmpty = true;
    // Handle notification here for empty water
  }
}

function checkMoisture() {
  console.log("Checking moisture level");
  // Use moisture sensor logic here to get moisture and update moistureLevel variable

  // DEV LOWER MOISTURE
  moistureLevel -= 100;
  // DEV END

  if (moistureLevel < MOISTURE_LOW) {
    console.log("Moisture is low, starting pump");
    startPump;
  }
}

function startPump() {
  console.log("Pump running");
  // Use relay logic here to open relay
}

function stopPump() {
  console.log("Stopping pump");
  // Use relay logic here to close relay
}

function handleError() {
  console.log("Error occurred");
}

init();
