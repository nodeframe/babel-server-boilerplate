import express from 'express';
import loggerMiddleware from 'morgan';
import routes from './routes';
import logger from 'config/logger';
import errorhandler from 'errorhandler';

const PORT = process.env.PORT || '3000';

let app = express();

app.use(loggerMiddleware('dev'));
app.use(routes);


if (process.env.NODE_ENV === 'development') {
  app.use(errorhandler());
}

app.listen(PORT,()=>{
  console.log(`Listening ${PORT} ....`);
});
