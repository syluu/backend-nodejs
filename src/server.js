const { log } = require('console');
const express = require('express')
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRoute = require('./routes/web');
const mysql = require('mysql2');
require('dotenv').config();
// import express from 'express'; 
const app = express();
const port = process.env.PORT || 3001;


// Config
configViewEngine(app);

//khai bao route
app.use('/', webRoute);

//test connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'magento',
    password: 'magento123',
    database: 'nodedb'
});

connection.query(
    'SELECT * FROM Users u',
    function (err, results, fields) {
        console.log(">>>results=", results);
        console.log(">>>fields=", fields);
    }
)

//run server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})