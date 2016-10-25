import si from 'utils/seneca';
export const transportConfig = function(config){
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
}

export default function setup(config){
  transportConfig(config);
}
