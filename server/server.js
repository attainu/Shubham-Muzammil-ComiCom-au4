const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const routes = require('./routes/index');
const db = require('./models/index.js');
const cookieSession = require('cookie-session')
const passport = require('passport');

// const servicesPass = require('./services/passport')

//middlewares
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

require('./services/passport')
// app.use(servicesPass)

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: ['dfsafasdsad']
	})
)

app.use(passport.initialize());
app.use(passport.session())
app.use('/', routes.auth);

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