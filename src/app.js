const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

//Importing routes
const customerRoutes = require('./routes/customer');
const { urlencoded } = require('express');

// settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middelwares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password:'' ,
    port: 33065,
    database: 'crudjs'
}, 'single'));
app.use(express.urlencoded({extended: false}));

//routes

app.use('/', customerRoutes);

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//Starting server

app.listen(app.get('port'), () =>{
    console.log('Server on Port 3000');
});