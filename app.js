
/**
 * Module dependencies.
 */

var app = require('./server/web-layer/index');
var debug = require('debug')('crud-api:server');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);


/**
 * Listen on provided port, on all network interfaces.
 */

app.listen(port, () => {
  console.info("Server running on port %d", port);
});
/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}