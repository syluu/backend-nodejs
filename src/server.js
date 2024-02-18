const { log } = require('console');
const express = require('express')
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRoute = require('./routes/web');
require('dotenv').config();
// import express from 'express'; 
const app = express();
const port = process.env.PORT || 3001;


// Config
configViewEngine(app);

//khai bao route
app.use('/', webRoute);

//run server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})