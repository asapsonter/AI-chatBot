import express from 'express';


const app = express(); //express var

// get 
// put 
// post 
// del
app.use(express.json());
app.delete('/user/:id', (req, res, next) => {

  console.log(req.params.id);
  return res.send('hello');
  
});

app.listen(3000, ()=> console.log("server Open now ")); // server port listening





