import axios from 'axios';
import { useState } from 'react';
function Show(){
  const [res,setres] = useState(null);
   if(res == null){
   axios.get('http://localhost:8081/showall',{
   }).then((resp)=>{
    console.log(resp.data);
    setres(resp.data);

   })
}
return(
    <div>
        {JSON.stringify(res)}
    </div>

);
}
export default Show;