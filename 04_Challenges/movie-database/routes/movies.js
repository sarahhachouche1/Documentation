const { query } = require('express');
const express = require('express')
const router =express.Router()
const movies =  require ('../models/Movies')


router.get('/read', function (req, res) {
    res.status(200).json(movies);
  });
  
router.get('/read/:variable', function (req, res) {
     let x=req.params.variable
     let sorted,obj
     if(x == 'by-date')
     {
      sorted=movies.sort((a,b) => b.year-a.year)
     }
     else
     {
       if(x == 'by-rating')
       {
        sorted=movies.sort((a,b) => b.rating-a.rating)
       }
       else
       {
          if(x=='by-title')
          {
            sorted=movies.sort((a, b) => a.title.localeCompare(b.title));
          }
          else{
            const response = {
              status:404, error:true
          };
    
          }
       }
     }
     obj={
      status:200, 
      message:sorted
     }
      res.send(sorted)
  
  });
  
  
router.get('/read/id/:id'  , function(req, res) {
    let id=req.params.id
    const movie= movies.find(collator => collator.title.toLowerCase() === id);
    if(typeof movie == 'undefined')
    {
       res.json({status:404, error:true, message:`the movie ${id} does not exist`})
    }
    else
    {
           res.json({status:200, data:movie})
    }
  
  });
 
 router.post('/add', (req,res) =>{
    const newmovie ={
        title:req.query.title,
        year:req.query.year,
        rating:req.query.rating? req.query.rating : 4
    }
    if(newmovie.title === undefined || newmovie.year === undefined || newmovie.year.length != 4 || isNaN(newmovie.year))
    {
        console.log(newmovie.title)
        console.log(newmovie.year)
       res.send({status:403, error:true, message:`you cannot create a movie without providing a ${newmovie.title} and a ${newmovie.year}`})
       
    }
    movies.push(newmovie)
    res.end()
})

router.delete('/delete/:id', (req, res) => {
    id=req.params.id
   let index = movies.findIndex(x => x.title.toLocaleLowerCase() == id.toLocaleLowerCase());
   if(index==-1)
   {
     res.send({status:404, error:true, message:`the movie ${id} does not exist`})
   }
   movies.splice(index,1)
   res.json(movies)

});


router.put('/update/:id'  ,(req, res) => {
    id=req.params.id
   let index = movies.findIndex(x => x.title.toLocaleLowerCase() == id.toLocaleLowerCase());
   if(index==-1)
   {
     res.send({status:404, error:true, message:`the movie ${id} does not exist`})
   }
   title=req.query.title,
   year=req.query.year,
   rating=req.query.rating

   if(title) movies[index].title=title
   if(year)  movies[index].year=year
   if(rating) movies[index].rating=rating

   res.json(movies)

});
module.exports=router;