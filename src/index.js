import {act,add} from 'utils/seneca';

add({role:"ROLE",action:"ACTION"},({action})=>{
  return {action};
});

act({role:"ROLE",action:"ACTION"}).then((data)=>{
  console.log(data);
});
