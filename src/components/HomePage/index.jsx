import React from 'react';
import { useEffect,useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { MdPeopleAlt } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { getAllJobPost } from '../../apis/job';
import { DEFAULT_SKILLS } from '../../utils/constants';
import Header from '../header/header';
import flag from '../../assets/flag.png'


function HomePage() {
  
  const navigate = useNavigate();
  const [jobs,setJobs] = useState([]);
  const [skills,setSkills] = useState([]);
  const [title,setTitle] = useState("");
  const [token] = useState(localStorage.getItem("token"));

  const fetchAllJobs = async()=>{
    const filterSkills = skills.join(",");
    const response = await getAllJobPost({skills:filterSkills,title});
    setJobs(response.data);    
  }

  useEffect(()=>{
    fetchAllJobs();
  },[]);

  

  const handleSkill =(event)=>{
    const newArr = skills.filter((skill)=> skill === event);
    if(!newArr.length){
      setSkills([...skills,event.target.value]);
    }
  };

  const removeSkill =(selectedSkill)=>{
    const newArr = skills.filter((skill)=> skill !== selectedSkill);
    setSkills([...newArr]);
  }
  return (
    <div className=''>
      <Header/>
      <div className='px-[10vw] mt-[5vh]'>
            <div className=' px-[4vw] py-[3vh] flex flex-col items-center gap-[5vh] shadow-[0px_0px_22px_4px_#FF202040;]'>
                <div className='flex'>
                  <div className='relative flex items-center'>
                  <input
                      type='text'
                      className='w-[60vw] h-[6vh] border-[1.8px] border-[#E3E3E3] rounded pl-[5vw] text-[#9C9C9C] text-[23px]' 
                      value={title}
                      onChange={(event)=>setTitle(event.target.value)}
                      name='search'
                      placeholder='Type any job Title'  
                  />
                  <CiSearch className='absolute left-[1vw] text-[30px] text-[#9C9C9C] font-[700]'/>
                  </div>
                </div>
                <div className='flex  flex-rows justify-between w-[60vw]'>
                    <div className='flex gap-[3px] items-center '>
                      <select 
                        name="remote" 
                        onChange={handleSkill}
                        className=' w-[8vw] text-[#CECECE] text-[17px] font-[500] border-[2px]  border-[#CECECE] rounded-md h-[5vh] text-center'
                        // value={e.target.value}
                      >
                        <option disabled selected value=" ">Skills</option>
                        {DEFAULT_SKILLS.map((skill)=>(
                          <option key={skill} value={skill}>
                            {skill}
                          </option>
                        ))}
                      </select>
                      <div className='grid grid-cols-3 gap-x-[2vw] gap-y-[10px]'>
                       {skills.map((skill)=>{
                        return(
                          <span className='w-[7vw] text-center bg-[#FFEEEE] px-[2px] py-[5px] text-[16px] font-[500] relative' key={skill}>{skill}
                            <span onClick={()=>removeSkill(skill)}
                              className=' bg-[#FF6B6B] absolute right-[-1vw] top-[0] bottom-[0]  text-[white] pt-[2px] w-[2vw] text-[20px] font-[500] cursor-pointer '
                            >X</span> 
                          </span>
                        );
                       })}
                      </div>
                    </div>
                    <div className='grid grid-cols-2 gap-y-[2vh]'>
                      <button onClick={fetchAllJobs} className=' bg-[#ED5353] text-[white] w-content px-[1.5vw] py-[0.5vh] rounded text-[19.61px]'>Apply Filter </button>
                      <button
                        onClick={()=>{
                          setSkills([]);
                          setTitle("");
                        }}
                        className='text-[#ED5353] w-content text-[20px] font-[500]'
                      >Clear
                      </button>
                       <button
                      onClick={()=> navigate("/job-post")}
                      className=' bg-[#ED5353] text-[white] w-content px-[1.5vw] py-[0.5vh] rounded text-[19.61px]'
                      >
                        + Add Job
                      </button> 
                    </div>
                </div> 
            </div>
            <div className=' flex flex-col gap-[4vh] my-[10vh] '>
            {jobs.map((data)=>{
              return (
                 <div className=''>
                    <div key={data._id} className='border-[1px] px-[2vw] py-[1.5vh] shadow-[0px_0px_22px_2px_#FF202040;] '>
                      <div className=' flex justify-between '>
                          <div className='flex gap-[1vw] items-center' >
                              <img src={data.logo} alt="error" className='w-[55.32px] h-[55.32px]' />
                              <div className='flex flex-col gap-[0.5vh]'>
                                <h1><b>{data.position}</b> </h1>
                                <div className=' flex gap-[1.5vw] items-center'>
                                      <p className='flex gap-[2px]'><MdPeopleAlt style={{fontSize:"20px",color:"grey"}} /> 11-50 </p>
                                      <p>₹{data.salary}</p>
                                      <p className='flex gap-[2vw] items-center'><img src={flag} alt="error" />{data.location}</p>
                                </div>
                                <div className='flex items-center gap-[2vw] text-[#ED5353]'>
                                    {data.remote? "Remote":"Office"}
                                    <p> {data.jobType}</p>
                                </div>
                              </div>
                          </div>
                          <div className='flex flex-col justify-between'>
                            <div className='flex gap-[1vw]'>
                              {data?.skills?.map((skill)=>{
                                      return(
                                          <p className='text-[black] text-[700] bg-[#FFEEEE] w-content px-[1.5vw] py-[0.3vh]' key={skill}>{skill}</p>
                                         ); 
                               })} 
                            </div>
                            <div className='flex justify-end'>
                              <button
                               onClick={() =>navigate(`/job-details/${data._id}`)} 
                                className='bg-[#ED5353] text-[white] py-[0.5vh] px-[2vw] rounded'>
                                View Details
                              </button>
                            </div>
                          </div>
                      </div>
                    </div>   
                 </div>
              )})
            } 
            </div>

      </div>
    </div>
  )
}

export default HomePage    