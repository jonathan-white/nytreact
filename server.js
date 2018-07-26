const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const logger = require("morgan");
const routes = require("./routes");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;
require("dotenv").config();

// Socket.io
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(logger("dev"));

// Setup data parsing Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use Static Public
if (process.env.NODE_ENV === "production") {
  // app.use(express.static('public'));
  app.use(express.static(path.join(__dirname, 'client/build')));
}

app.use(routes);

// If deployed, use the deployed database. Otherwise use the local nytreact database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");

// Config socket.io
io.on('connection', function(socket) {
	console.log('a user connected');

	socket.on('disconnect', function() {
		console.log('user disconnected');
	});

	// Listen for savedArticle event, then emit the save message to all clients
	socket.on('savedArticle', (msg) => {
		console.log('socket.io message: ' + msg);
		socket.emit('savedArticle', msg);
	});
});

server.listen(PORT, function() {
  console.log("App listening on port http://localhost:" + PORT);
});
