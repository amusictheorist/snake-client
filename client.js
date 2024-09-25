const net = require("net");

// Establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
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
    conn.write("Name: AMT"); // Replace ABC with your chosen initials
  });

  return conn;
};

module.exports = { connect };