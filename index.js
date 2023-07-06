

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


app.use("/",(req,res)=>{
    return res.render('home',{
        title : "Todo App"
    })
})



app.listen(8080,()=>{
    console.log("Server is running on port 8080");
})



