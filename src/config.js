import fs from 'fs';
import path from 'path';

function tryRequire(path,defaultValue={}){
  try{
    return  require(path);
  }catch(e){
    return defaultValue;
  }
}

const commonConfig = tryRequire('../configs/common')
const devConfig = tryRequire('../configs/development');
const prodConfig = tryRequire('../configs/production')

let config = {};
if(process.env.NODE_ENV === "production"){
  config = {...commonConfig,...prodConfig};
}else{
  config = {...commonConfig,...devConfig};
}

export default config;
