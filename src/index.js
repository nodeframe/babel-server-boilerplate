import {act,add} from 'utils/seneca';

add({role:"ROLE",cmd:"ACTION"},({role,cmd})=>{
  return {role,action};
});
