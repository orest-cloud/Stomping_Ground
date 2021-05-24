// initialize Express in project
const express = require('express');
const app = express();
// const logger = require("./middleware/logger");
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(express.json());
// app.use(logger);

const neighborhoodsRoute = require('./routes/neighborhoods');
const propertiesRoute = require('./routes/properties');

// Environment variables
require('dotenv').config();
let devModeMessage = '';

// Use localhost if in development mode:
// > NODE_ENV=development npm start
if (process.env.NODE_ENV == 'production') {
    devModeMessage = ' in production mode.';
} else {
    devModeMessage = ' in development mode.';
}

// Set the port and host URL
// const port = process.env.PORT || 5000;
const port = process.env.PORT || 5000;
const serverHost = process.env.HOST || '/';

//------------------------------
// Endpoint routes
//------------------------------
// Route for getting Google photos
// app.use("/photos", photosAPIRouter);
app.use('/place', neighborhoodsRoute);
app.use('/property', propertiesRoute);

// If in production mode on Heroku, server the static files
if (process.env.NODE_ENV === "production") {
    // Set static folder
    app.use(express.static("../client/build"));

    app.get("*", (_req, res) => {
        res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
    });
}

// start Express on port 5000
app.listen(port, () => {
    console.log(`SG server started on ${serverHost}:${port}${devModeMessage}`);
    console.log('Press CTRL + C to stop server');
    });