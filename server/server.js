// initialize Express in project
const express = require('express');
const app = express();
// const logger = require("./middleware/logger");
const cors = require('cors');

app.use(cors());
app.use(express.json());
// app.use(logger);

const neighborhoodsRoute = require('./routes/neighborhoods');
const propertiesRoute = require('./routes/properties');

// Environment variables
require('dotenv').config();
let devModeMessage = '';
var serverHost = '';

// Use localhost if in development mode:
// > NODE_ENV=development npm start
if (process.env.NODE_ENV == 'development') {
    serverHost = process.env.DEV_HOST;
    devModeMessage = ' in development mode.';
} else {
    serverHost = process.env.HOST;
}

//------------------------------
// Endpoint routes
//------------------------------
// Route for getting Google photos
// app.use("/photos", photosAPIRouter);
app.use('/place', neighborhoodsRoute);
app.use('/property', propertiesRoute);

// start Express on port 8080
app.listen(8080, () => {
    console.log(`SG server started on ${serverHost}:${process.env.PORT}${devModeMessage}`);
    console.log('Press CTRL + C to stop server');
    });