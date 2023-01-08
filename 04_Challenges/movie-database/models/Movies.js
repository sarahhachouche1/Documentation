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

const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب', year: 1992, rating: 6.2 }
  ];
  
  
module.exports=movies