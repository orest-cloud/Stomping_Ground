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

//------------------------------
// Endpoint routes
//------------------------------
// Route for getting Google photos
// app.use("/photos", photosAPIRouter);
app.use('/place', neighborhoodsRoute);
app.use('/property', propertiesRoute);

// start Express on port 8080
app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
    });