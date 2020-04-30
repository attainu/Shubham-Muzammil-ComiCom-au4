//import 'dotenv/config'
import express from 'express'
const app = express();
import routes from './routes/index'
import { connect } from './models/index'
import cookieSession from 'cookie-session'
import passport from "passport";
import './services/passport';
import products from "./routes/products";
import search from './routes/search'
import payment from './routes/payment'
import path from 'path'

//middlewares
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "https://comicom.netlify.app/");
	res.header("Access-Control-Allow-Credentials", "true");
	res.header("Access-Control-Allow-Methods: PUT, GET, POST");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);
	next();
});
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: ['dfsafasdsad'],
		saveUninitialized: false,
		resave: false
	})
)

app.use(passport.initialize());
app.use(passport.session())
app.use('/auth', routes.auth);
app.use('/products', products)
app.use('/search', search)
app.use('/payment', payment)
app.use('/feature', routes.feature);

/* app.get('/', (req, res) => {
	res.send("App is up and running")
}) */

// Start the app on pre defined port number
const env = process.env.NODE_ENV || 'default';
const PORT = process.env.PORT || 9090;

if(process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'))
	app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

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