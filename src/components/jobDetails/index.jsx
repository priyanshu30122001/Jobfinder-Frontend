import React ,{useState,useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {getJobDetailsById} from '../../apis/job';
import Header from '../header/header';
import salary from "../../assets/salary.png";
import duration from "../../assets/duration.png";
import {  Link } from "react-router-dom";

function jobDetails({}) {
   const navigate = {useNavigate};
    let {id} = useParams();
    const[jobDetails,setJobDetails] = useState({
      name:"NO data "
    });
    const[isEditable,setIsEditable] = useState(false);
 
    useEffect(()=>{
           fetchJobDetailsById();
    },[]);

    const fetchJobDetailsById = async()=>{
         if(!id) return;
         const response = await getJobDetailsById({id});
         setJobDetails(response.data);
         const OwnerId =response.data.userId ;
         console.log("owner"+OwnerId);
         const userId = localStorage.getItem("userId");
         console.log("user"+ userId);
         if(OwnerId === userId){
            setIsEditable(true)
          }
          else{
            console.log("wrong");
          }
      
    };
  return (
    <div>
        <div className='bg-[#FFEEEE]'>
            <Header/>   
             <div className='px-[10vw] mt-[5vh] py-[10vh] flex flex-col gap-[5vh]  '>
               <div className='border-[1px] text-[29px] font-[500] text-center py-[1vh] bg-white fixed top-[15vh] right-[10vw] left-[10vw] '>
                  <p>
                     {`${jobDetails.position} ${jobDetails.jobType} job/intership at ${jobDetails.name.toUpperCase()}`}
                  </p>  
               </div>
               <div className='border-[2px] shadow-[0px_2px_35px_1px_#0000001A] bg-white px-[3vw] py-[3vh] flex flex-col gap-[3vh]'>              
                  <div>
                     <div className='text-[1em] text-[#999999] flex items-center gap-[1vw]'>
                        <p className=' '>{jobDetails?.jobType}</p>
                        <img className='w-[42px] h-[41px] object-cotain' src={jobDetails.logo} alt="error" />
                        <p>{jobDetails.name.toUpperCase()}</p>
                     </div>
                  </div>
                  <div className='flex justify-between items-center '>
                     <div className=''>
                        <div className='text-[2.8em] leading-[65px]'>{jobDetails.position}</div>
                        <p className='text-[#ED5353]'>{jobDetails?.location}</p>
                     </div>
                     <div>
                        { isEditable ? <> 
                              <Link
                                 className='bg-[#ED5353] text-[white] py-[2vh] px-[2vw] rounded'
                                 to="/edit-job"
                              >
                              Edit Job</Link>
                              </> : " "   
                        }
                     </div>
                  </div>
               
                  <div className='flex gap-[2vw] mt-[3.5vh] mb-[1.5vh]'>
                     <div className='w-content  pr-[6px]'>
                        <p className='flex gap-[0.5vw] items-center'> <img className='h-[15px]' src={salary} alt="" />Stipend/Salary</p>
                        <p>Rs {jobDetails.salary}</p>
                     </div>
                     <div className='w-content pr-[6px]'>
                        <p className='flex gap-[0.5vw] items-center'> <img className='h-[15px]' src={duration} alt="" />Duration</p>
                        <p>{jobDetails.jobType}</p>
                     </div>
                  </div>

                  <div className='mt-[2vh]'>
                     <h2 className='text-[24px] font-[700] mb-[4vh]'>About Company</h2>
                     <p className='font-[DM Sans] text-[1.1em] leading-[36px] font-[400] text-[left] text-[#595959]'>{jobDetails.about}</p>
                  </div>

                  <div className='mt-[2vh]'>
                     <h2 className='text-[24px] font-[700] mb-[4vh]'>About the  job/internship</h2>
                     <p className='font-[DM Sans] text-[1em] leading-[35px] font-[400] text-[left] text-[#595959]'>{jobDetails.description}</p>
                  </div>

                  <div className='mt-[2vh]'>
                     <h2 className='text-[24px] font-[700] mb-[4vh]'>Skill(s) Required</h2>
                     <div className='flex gap-[1.5vw] items-center '>
                     {jobDetails?.skills?.map((skill)=>{
                        return(
                        <p className=' bg-[#FFEEEE] rounded-2xl py-[0.5vh] px-[1vw]'>{skill}</p>
                        );
                     })}
                     </div>
                  </div>

                  <div className='mt-[2vh]'>
                     <h2 className='text-[24px] font-[700] mb-[4vh]'>Additional Information</h2>
                     <p className='font-[DM Sans] text-[1em] leading-[35px] font-[400] text-[left] text-[#595959]'>{jobDetails.information}</p>
                  </div>
               </div>
             </div>
        </div>

    </div>
  )
}

export default jobDetails;