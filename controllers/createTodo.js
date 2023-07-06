
const Todo = require("../models/todo");

exports.createTodo = async(req,res)=>{
    
    try {
        // extract description and category from request body
        const {description, category} = req.body;
        // create a new todo object and insert in DB
        const response = await Todo.create({description,category});

        // send a json response with success flag

        res.status(200).json({
            success : true,
            data : response,
            message : "Todo create successfully"
        })
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            success : false,
            data : "Internal Server Error",
            message : error.message
        })
        
    }
    
}