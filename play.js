const { connect } = require("./client");
const { setupInput } = require("./setupInput");

console.log("Connecting...");

connect();
setupInput();