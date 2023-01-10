const mongoose = require('mongoose')

const moviesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
     },
     year: {
       type: Number,
       required: true,
     },
     rating:{
       type: Number,
       default:4,
       min:0,
       max: 10,
     },
 
 }) 
 module.exports = mongoose.model("Movies" , moviesSchema)