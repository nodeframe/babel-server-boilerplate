import si,{act,add} from 'utils/seneca';
import config from './config';
import setup from './setup';
import express from 'express';

const app = express();

console.log(config);
app.get('/',(req,res)=>{
    res.send("Hello World");
});

app.listen("3000",()=>{
  console.log("Listening 3000 ...");
});

// add({role:"ROLE",cmd:"ACTION"},({role,cmd})=>{
//   return {role,action};
// });


//setup(config);
