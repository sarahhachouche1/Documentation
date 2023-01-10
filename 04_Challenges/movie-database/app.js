require('dotenv').config()

const express = require('express')
const app = express()

const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const movies = require('./models/movies');
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true})
const db = mongoose.connection; 
db.on("error", (error)=> console.error(error))
db.once("open", ()=> console.log('connected to db'))
 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/movies', require('./routes/movies'))


app.get('/', (req, res) => {
  res.send('ok')
})
 


app.get('/test', (req, res) => {
  const obj = {
      status:200, 
      message:"ok"
  }
  res.send(obj)
})
app.get('/time', (req, res) => {
  let date = new Date();
  const obj = {
    
      status:200, 
      message: `${date.getHours()}:${date.getMinutes()}`
  }
  res.send(obj)
})


app.get('/hello/:id?'  , function(req, res) {
   let id=req.params.id
   let obj
   if (typeof id=== 'undefined') {
     obj={
      status:200, 
      message:`Hello`}
     }
     else{
      obj={
        status:200, 
        message:`Hello, ${id}`}
     }
  
  res.send(obj);
});

app.get('/search',(req,res) => {
  const search = req.query.s;

  if (typeof search != 'undefined') {
      
      const response = {
          status:200, message:"ok", data: search
      };

      res.send(response);
  }
  else {
      const response = {
          status:500, error:true, message: "you have to provide a search"
      };


      res.status(500);
      res.send(response);
  }
});


const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
