const express = require('express');
const path = require('path');

const app = express(); 
// App_port = 3000;

require('dotenv').config();

// const PORT = process.env.PORT || 3000;
app.use(express.static('public'));
app.use(express.json());


const connectDB = require('./config/db');
connectDB();
// console.log(connectDB);

//template engine

app.set('views', path.join(__dirname, '/views'));
app.set('view engine','ejs'); 

//router
app.use('/api/files', require('./routes/files'));

app.use('/files', require('./routes/show'));
app.use('/files/download', require("./routes/download"));

app.listen(process.env.App_port, () => {
       
    console.log(`listning on Port ${process.env.App_port}`);

});
