import express from 'express';

const route = express.Router();

route.get('/api/hi',(req,res)=>{
  throw new Error("api hi");
  res.send('Hello World');
});

export default route;
