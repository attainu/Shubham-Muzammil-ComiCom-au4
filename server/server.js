const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const routes = require('./routes/index');
const db = require('./models/index.js');

//middlewares
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// Start the app on pre defined port number
const env = process.env.NODE_ENV || 'default';
const PORT = process.env.PORT || 9090;
db.connect()
	.then(function () {
		app.listen(PORT, function () {
			console.log("Application has started in environment " + env + " and running on port: ", PORT);
			//console.log(process.env);
		}).on('error', function (error) {
			console.log("Unable to start app. Error >>>>", error);
		});
	}).catch(function (error) {
	console.log("Failed to setup connecton with database.", error);
});