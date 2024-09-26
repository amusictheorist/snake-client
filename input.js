const { MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, HUNGRY_MESSAGE, SSS_MESSAGE, PYTHON_MESSAGE, RATTLE_MESSAGE } = require("./constants");

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  stdin.resume();
};

const handleUserInput = function(key) {
  if (key === "\u0003") {
    process.exit();
  }
if (key === MOVE_UP_KEY) {
  connection.write("Move: up");
} else if (key === MOVE_LEFT_KEY) {
  connection.write("Move: left");
} else if (key === MOVE_DOWN_KEY) {
  connection.write("Move: down");
} else if (key === MOVE_RIGHT_KEY) {
  connection.write("Move: right");
} else if (key === HUNGRY_MESSAGE) {
  connection.write("Say: I'm hungry");
} else if (key === SSS_MESSAGE) {
  connection.write("Say: ssssssssss");
} else if (key === PYTHON_MESSAGE) {
  connection.write("Say: this isn't python!");
} else if (key === RATTLE_MESSAGE) {
  connection.write("Say: rattle my brain");
}
};

module.exports = { setupInput }


    // conn.write("Move: up");
    // setTimeout(() => {
    //   conn.write("Move: right");
    // }, 500);
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 1000);
    // setTimeout(() => {
    //   conn.write("Move: right");
    // }, 1500);