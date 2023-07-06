
// import the model
const Todo = require("../models/todo");


// define the get Route handler


exports.getTodo = async(req,res)=>{
    try {

        // fetch all todo item from dataBase

        const todos = await Todo.find({});
        // console.log(todos);
        const formateTodo = todos.map((todo)=>{
            const todoCreatedDate = new Date(todo.date);
            
            // formateDate 

            const formattedDate = todoCreatedDate.toLocaleDateString('en-Us',{
                year : "numeric",
                month : "short",
                day : "numeric"
            });


            return {
                ...todo._doc,
                date : formattedDate
            }

        })
     
        return res.render("home",{
            title : "Todo App",
            allTodos : formateTodo,
            backEndContributor : "ram kumar"
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
