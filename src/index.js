import express from 'express';
import logger from 'morgan';

const PORT = process.env.PORT || '3000';

const app = express();

app.use(logger('dev'));

app.get('/id',(req,res)=>{
  res.send("id");
});

if (app.get('env') === 'development') {

  app.use((err, req, res, next)=>{
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: err
    });
  });

}

app.use((err, req, res, next)=>{
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: {}
    });
});

app.listen(PORT,()=>{
  console.log(`Listening ${PORT} ....`);
});
