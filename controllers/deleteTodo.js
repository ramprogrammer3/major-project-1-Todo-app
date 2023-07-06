// import the model

const Todo = require("../models/todo");

// define router handler

exports.deleteTodo = async(req,res)=>{
    try {
        const {id} = req.params;
        await Todo.findByIdAndDelete(id);
        res.json({
            success:true,
            message : "Todo Delete Successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success : false,
            error : error.message,
            message : "Internal server error "
        })
    }
}