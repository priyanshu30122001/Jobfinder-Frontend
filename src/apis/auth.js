import axios from "axios";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const loginUser =async(email,password)=>{
    try{
        const reqUrl =`${backendUrl}/api/auth/login`;
        const response = await axios.post(reqUrl,{email:email,password:password});
        return response.data;
         
    }
  catch(err){
     console.log(err);
  }
}
export const signupUser =async({name,email,mobile,password,})=>{
    try{ 
        const reqUrl =`${backendUrl}/api/auth/register`;
        // console.log("url sent");
        const response = await axios.post(reqUrl,{name,email,mobile,password});
        return response.data;
    }
  catch(err){
     console.log(err);
  }
}
