import express from 'express'
const app = express();
import cors from 'cors'
import routes from './routes/index'
import {connect} from './models/index'
import cookieSession from 'cookie-session'
import passport from "passport";
import products from "./routes/products";
import search from './routes/search'

// const servicesPass = require('./services/passport')

//middlewares
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

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
app.use('/products', products)
app.use('/search', search)


// Start the app on pre defined port number
const env = process.env.NODE_ENV || 'default';
const PORT = process.env.PORT || 9090;
connect()
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