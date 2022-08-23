const express = require('express')
const app =  express();
var cors = require('cors')
const dotenv = require('dotenv');
const connectDatabase = require('./src/Config/DatabaseConfig')
app.use(express.json());
app.use(cors())

//config
dotenv.config()
//database connection
connectDatabase();

//Route import
const product = require("./src/Routes/ProductRoute");


app.use("/api/v1",product);
//server listen
app.listen(process.env.PORT , ()=>{
    console.log(`http://localhost:${process.env.PORT}`);
})