
// import mongoose for database connection 

const mongoose = require("mongoose");

// importing mongodb database URL ans dot env to config

require('dotenv').config();
const url = process.env.DATABASE_URL;

// creating function to database connection

const dbConnection = () => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("DB Connection successful");
    }).catch((err) => {
        console.log("DB Connection failed ");
        process.exit(1);
    })
}

// exporting DB connection function
module.exports = dbConnection;
