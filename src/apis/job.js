import axios from 'axios';
const backendUrl = import.meta.env.VITE_BACKEND_URL;
const getAllJobPost = async()=>{
     try{
     const results = await axios.get(`${backendUrl}/api/jobs/all`);
      return results;
     } 
   catch(error){
        console.log(error);
  }
}  
const getJobDetailsById = async(id)=>{
  try{
    
    const details = await axios.get(`${backendUrl}/api/jobs/get/${id.id}`);
    return details;
  }
  // 
  catch(err){
    console.log(err);
  }
}
const updateJobPostById = async(id)=>{
    return null
}
const createJobPost = async(id)=>{
  return null
}

export {getAllJobPost,getJobDetailsById,updateJobPostById,createJobPost};