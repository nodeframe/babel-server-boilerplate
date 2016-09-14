import {act,add} from 'utils/seneca';
import {ROLE} from 'constants/role';
import {ACTION} from 'constants/cmd';

add({role:ROLE,action:ACTION},function({action}){
  return {action};
});

act({role:ROLE,action:ACTION}).then((data)=>{
  console.log(data);
});
