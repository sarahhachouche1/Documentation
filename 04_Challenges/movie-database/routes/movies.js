const { query } = require('express');
const express = require('express');
const { assign } = require('mongodb/lib/utils');
const router =express.Router()
const movies =  require ('../models/movies')


router.get('/read', async function (req, res) {
    
    const data = await movies.find();
    res.status(200).json(data);
  });
  
router.get('/read/:variable',async function (req, res) {
     let x=req.params.variable
     let sorted,obj
    
     function sorting (movies)
     {
        if(x == 'by-date')
        {
          return movies.sort((a,b) => b.year-a.year)
        }
        else
        {
          if(x == 'by-rating')
          {
            return movies.sort((a,b) => b.rating-a.rating)
          }
          else
          {
              if(x=='by-title')
              {
                return movies.sort((a, b) => a.title.localeCompare(b.title));
              }
          }
        }
     }
     try {
      const data = await movies.find();
      data=sorting(data)
      if(!data) {
       throw new Error('no document found');
      }
      res.json({status:200, message:data})
   } catch (error) {
    res.json({status:404, error:true, message:`the movie ${req.params.id} does not exist`})
 }
  });
  
  
router.get('/read/id/:id'  , async function(req, res) {
     try {
        let data = await movies.find(titlt, req.params.id ? req.params.id : null);
        if(!data) {
         throw new Error('no document found');
        }
        res.json({status:200, data:data})
     } catch (error) {
      res.json({status:404, error:true, message:`the movie ${req.params.id} does not exist`})
   }
});
 
 router.post('/add', async (req,res) =>{
    /*const newmovie ={
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
    res.end()*/

    var newmovie = new movies({
        title:req.query.title,
        year:req.query.year,
        rating:req.query.rating? req.query.rating : 4
    });

    const data= await newmovie.save()
    res.jsom({status:404 , message: data})
      
  });


router.delete('/delete/:id', (req, res) => {
    id=req.params.id
  /* let index = movies.findIndex(x => x.title.toLocaleLowerCase() == id.toLocaleLowerCase());
   if(index==-1)
   {
     res.send({status:404, error:true, message:`the movie ${id} does not exist`})
   }
   movies.splice(index,1)*/
   try{
     movies.deleteOne({title:id})
     res.send({status:200, message:`${id} deleted`})
   }
   catch(err)
   {
       res.json({message:err})
   }
});


router.patch('/update/:id'  ,(req, res) => {
    id=req.params.id
   /*let index = movies.findIndex(x => x.title.toLocaleLowerCase() == id.toLocaleLowerCase());
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
   res.json(movies)*/
  try{
     let doc= movies.updateOne({title:id},{$set:{title:req.query.title ? req.query.title:movies.title,
      year:req.query.year ? req.query.year:movies.year,
      rating:req.query.rating ? req.query.rating:movies.rating,
      }},)
      if(doc) res.json(doc)
      else res.send({status:404, error:true, message:`the movie ${id} does not exist`})
    }
    catch(err)
    {
        res.json({message:err})
    }
 })
    
module.exports=router;