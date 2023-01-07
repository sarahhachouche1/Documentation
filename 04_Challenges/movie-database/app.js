const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('ok')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
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

app.get('/sarah', (req, res) => {
  req.send()
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
      // Search string applied
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