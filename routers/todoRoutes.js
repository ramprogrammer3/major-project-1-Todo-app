// importing express to create Router
const express = require("express")
//creating router
const router = express.Router();

//define api post router
const {createTodo} = require("../controllers/createTodo");

router.post("/createTodo",createTodo);





// exporting router 

module.exports = router;