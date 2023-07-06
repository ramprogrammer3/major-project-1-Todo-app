// importing mongoose library to create schema
const mongoose = require("mongoose");

// creating Todo Schema


const todoSchema = new mongoose.Schema({
    descripton: {
        type: String,
        required: true,
        maxLength: 200,
    },

    category: {
        type: String,
        required: true,
        maxLength: 50,
    },
    date: {
        type: Date,
        default: Date.now(),
    }
})

// exporting schema 

module.exports = mongoose.model("Todo", todoSchema);