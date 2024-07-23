import axios from 'axios';
const backendUrl = import.meta.env.VITE_BACKEND_URL;

// GET ALL FOR THE HOME PAGE
// const reqUrl = `${backendUrl}/job/all-jobs?title=${filter?.title}&skills=${filter?.skills}`;
const getAllJobPost = async()=>{
     try{
      const token = localStorage.getItem('token');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
      const reqUrl =`${backendUrl}/api/jobs/all`;
      const results = await axios.get(reqUrl,config);
      console.log(results);
      return results;
     } 
     catch(error){
        console.log(error);
    }
} 

// GET JOBS BY THEIR ID 
const getJobDetailsById = async(id)=>{
  try{
    const token = localStorage.getItem('token');
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const details = await axios.get(`${backendUrl}/api/jobs/get/${id.id}`,config);
    return details;
  }
  catch(err){
    console.log(err);
  }
}

// GET JOB BY SEARCH 
const fetchJobsByQuery = async (query) => {
  const {
    title,
    // skills
  } = query
  try {
      const token = localStorage.getItem('token');
      const config = {
      headers: {
          Authorization: `Bearer ${token}`
        }
       };
      const response = await axios.get(`${backendUrl}/api/jobs/search/${query.title}`,config);
      console.log(response);
      return response;
  } catch (error) {
      return error;
  }
}
const fetchJobsBySkills = async (query) => {
  const {
    skills,
    // skills
  } = query
  try {
      const token = localStorage.getItem('token');
      const config = {
      headers: {
          Authorization: `Bearer ${token}`
        }
       };
       console.log(`${backendUrl}/api/jobs/search/${query.skills}`);
      const response = await axios.get(`${backendUrl}/api/jobs/filter/${query.skills}`,config);
      console.log(response);
      return response;
  } catch (error) {
      return error;
  }
}

const updateJobPostById = async(id)=>{
    return null
}
const createJobPost = async(id)=>{
  return null
}


export {getAllJobPost,getJobDetailsById,updateJobPostById,createJobPost,fetchJobsByQuery,fetchJobsBySkills};