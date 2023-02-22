/**
 * @file server.js
 * @brief main js file for the site
 * imports dependencies, initializes
 * the variables, starts and runs the
 * webserver
 * @author Jamey Bryce
 */
const express = require('express');
const exphbs = require('express-handlebars');
const dotenv = require('dotenv');
const path = require('path');
const morgan = require('morgan');
const colors = require('colors');

// Load environment variables
dotenv.config({ path: './config/config.env' });

// get the express module
const app = express();

// Setup templating engine
app.engine('handlebars', exphbs.engine({defaultLayout: false}));

app.set('view engine', 'handlebars');

// Set static folder
app.use(express.static(__dirname + '/public'));

// Body Parser
app.use(express.json());

// Development logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Mount routes
app.get('/', (req, res) => {
    res.render('main');
});

// Start webserver on PORT and log to the console
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));