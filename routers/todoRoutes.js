// importing express to create Router
const express = require("express")
//creating router
const router = express.Router();

//define api post router
const {createTodo} = require("../controllers/createTodo");

router.post("/createTodo",createTodo);

// define api delete router

const {deleteTodo} = require("../controllers/deleteTodo");
router.delete("/deleteTodo/:id",deleteTodo)


// define api get all todo router
const {getTodo} = require("../controllers/getTodo")

router.get("/",getTodo)

// exporting router 

module.exports = router;