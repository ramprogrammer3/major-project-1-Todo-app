

// server creation start
const express = require("express")
const app = express();
// server creation end

// Set the view engine to EJS
app.set("view engine", "ejs");

// Set the path to the views directory
app.set("views", "./views");

// adding middleware for static file
app.use(express.static('views'))

// importing dotenv and port or default port
require("dotenv").config();
const port = process.env.PORT || 8080;

// adding middleware
app.use(express.json());


// importing router and mounting router
const todoRouters = require("./routers/todoRoutes")
app.use("/",todoRouters);


app.use("/", (req, res) => {
    return res.render('home', {
        title: "Todo App"
    })
})

// importing dbconnection function and connecting mongodb compass

const dbConnection = require("./config/db");
dbConnection();


app.listen(8080, () => {
    console.log("Server is running on port 8080");
})



