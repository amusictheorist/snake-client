const net = require("net");
const { IP, PORT, MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, HUNGRY_MESSAGE, SSS_MESSAGE, PYTHON_MESSAGE, RATTLE_MESSAGE } = require("./constants");

// Establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    IP,
    PORT
  });

  // Interpret incoming data as text
  conn.setEncoding("utf8");

  // Log server messages
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  // Register handler for 'connect' event
  conn.on("connect", () => {
    console.log("Successfully connected to game server");

    // Send name to server upon connection
    conn.write("Name: AMT");
    
  });

  return conn;
};

module.exports = { connect };