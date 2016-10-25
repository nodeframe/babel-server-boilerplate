import seneca from 'seneca';
import Promise from 'bluebird';

let si = seneca({log:'silent'});

si.use('seneca-amqp-transport');

const serializeError = (e)=>{
  return {name:e.name,stack:e.stack,message:e.message,errors: e.errors};
}

const deserializeError = (oe)=>{
  let e = new Error(oe.message);
  e.name = oe.name;
  e.errors = oe.errors;
  e.stack = oe.stack;
  return e;
}

export const act = (args) =>{
  return new Promise((resolve,reject)=>{
    si.act(args,function(err,resp){
      if(err){ reject(err); return; }
      else if(!resp.ok) reject(deserializeError(resp.error));
      else resolve(resp.result);
    });
  });
}

export const add = (options,callback)=>{
  si.add(options,function(args,done){
    try{
      if(callback.length>=2){
        callback.bind(si)(args,done);
      }else{
          let resultWithArgs = callback.bind(si)(args);
          let isThenable = ('function' === typeof resultWithArgs.then);
          if(isThenable){
            resultWithArgs.then((response)=>{
              done(null,{ok:true,result:response});
            }).catch((e)=>{
              done(null,{ok:false,error:serializeError(e)});
            });
          }else{
            done(null,{ok:true,result:resultWithArgs});
          }
      }
    }catch(e){
      done(null,{ok:false,error:serializeError(e)});
      return;
    }
  })
};

export default si;
