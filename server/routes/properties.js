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
	
	
	
	
	
	
	
	
	
	
module.exports = router;