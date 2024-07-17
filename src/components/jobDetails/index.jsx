import React ,{useState,useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {getJobDetailsById} from '../../apis/job';
import Header from '../header/header';
function jobDetails({}) {
    let {id} = useParams();
    const navigate = {useNavigate};
    const[jobDetails,setJobDetails] = useState({
      name:"NO data "
    });
    const[isEditable,setIsEditable] = useState(false);
 
    useEffect(()=>{
        isAllowedToEdit();
        console.log(id);
        fetchJobDetailsById();
    },[]);

    const fetchJobDetailsById = async()=>{
         if(!id) return;
         const response = await getJobDetailsById({id});
         setJobDetails(response.data);
    };

    const isAllowedToEdit=()=>{
        const token = localStorage.getItem("token");
        if(token){
            setIsEditable(true);
        }
    }
  return (
    <div>
        <div className=''>
            <Header/>   
             <div className='px-[10vw] mt-[5vh]'>
               <div className='border-[1px] text-[29px] font-[500] text-center py-[1vh] '>
                  <p>
                     {`${jobDetails.position} ${jobDetails.jobType} job/intership at ${jobDetails.name.toUpperCase()}`}
                  </p>
               </div>
               
               <div>
                  <div>
                     <p>{jobDetails?.jobType}</p>
                  </div>
                  <div>
                     <p>{jobDetails?.name}</p>
                     <p>{jobDetails?.location}</p>
                  </div>
               </div>
               
               <div>
                  <button
                     onClick={()=>{
                        navigate("/job-post",{
                           state:{
                              id: jobDetails._id,
                              jobDetails: jobDetails,
                              edit: true,
                           },
                        });
                     }}
                     className=''
                  >
                     Edit Job 
                  </button>
               </div>
               
               <div className=''>
                  <div>
                     <p>Stipend/Salary</p>
                     <p>{jobDetails.salary}</p>
                  </div>
                  <div>
                     <p>Duration</p>
                     <p>{jobDetails.jobType}</p>
                  </div>
               </div>

               <div>
                  <h2>About Company</h2>
                  <p>{jobDetails.about}</p>
               </div>

               <div>
                  <h2>About the  job/internship</h2>
                  <p>{jobDetails.description}</p>
               </div>

               <div>
                  <h2>Skill(s) Required</h2>
                  {jobDetails?.skills?.map((skill)=>{
                     return(
                     <p>{skill}</p>
                     );
                  })}
               </div>

               <div>
                  <h2>Additional Information</h2>
                  <p>{jobDetails.information}</p>
               </div>

             </div>
        </div>

    </div>
  )
}

export default jobDetails;