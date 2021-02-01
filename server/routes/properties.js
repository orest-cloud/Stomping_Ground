const express = require('express')
const router = express.Router()
const neighborhoods = require('../data/neighborhoods.json');
const properties = require('../data/properties.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { stringify } = require('querystring');

router
.get('/', (req, res) => {
    return res.send(properties);
    })
	
router
.get('/:id', (req, res) => {
	// Package to return
	// responsePackage = [];
	
	// Gets neighborhood info
    let propertyID = properties.find((property)=> property.Id == req.params.id);
	// responsePackage.push(hoodID);
	
	// Gets listings
	//let listings = properties.filter((property)=> property.neighborhood == req.params.id);
	//responsePackage.push(listings);
	
    // return res.send(responsePackage);
	return res.send(propertyID);
    })	
	
	
	
	
	
	
	
	
	
module.exports = router;