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
if (key === "w") {
  connection.write("Move: up");
} else if (key === "a") {
  connection.write("Move: left");
} else if (key === "s") {
  connection.write("Move: down");
} else if (key === "d") {
  connection.write("Move: right");
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