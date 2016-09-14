import seneca from 'seneca';
import Promise from 'bluebird';
import config from '../config';
let si = seneca(config.senecaLog);

si.use('seneca-amqp-transport');

export const act = Promise.promisify(si.act, { context: si });

export const add = (options,callback)=>{
  si.add(options,function(args,done){
    if(callback.length>=2){
      callback.bind(si)(args,done);
    }else{
      let functionWithArgs = callback.bind(si)(args);
      let isThenable = ('function' === typeof functionWithArgs.then);
      if(isThenable){
        functionWithArgs.then((response)=>{
          done(null,response);
        }).catch((e)=>{
          done(e);
        });
      }else{
        done(null,functionWithArgs);
      }
    }
  })
};

if(config.transports && config.transports.listenings){
  config.transports.listenings.reduce((prev,curr)=>{
    return prev.listen(curr);
  },si);
}

if(config.transports && config.transports.clients){
  config.transports.clients.reduce((prev,curr)=>{
    return prev.client(curr);
  },si);
}

export default si;
