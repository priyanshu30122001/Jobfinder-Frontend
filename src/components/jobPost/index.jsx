import { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import {signupUser} from "../../apis/auth";
import {DEFAULT_JOBTYPE, DEFAULT_SKILLS} from "../../utils/constants";


function JobPost() {
  const navigate = useNavigate();
  const [arrSkills,setSkills] = useState([]);
  const [formData,setFormData] = useState({
      name:"",
      logo:"",
      position:"",
      location:"",
      salary:"",
      jobType:"",
      remote:"",
      description:"",
      about:"",
      skills:[],
      information:"",
  
  });
  const handleChange = (e)=>{
     setFormData({...formData,[e.target.name]:e.target.value});
  }
  const handleSkill = () => {
    setFormData(prevState => ({
      ...prevState,
      skills:[arrSkills]
    }));
  };

  useEffect(() => {
    // This useEffect runs when arrSkills changes
    handleSkill()
   }, [arrSkills]);

  const addSkill =(event)=>{
    const newArr = arrSkills.filter((skill)=> skill === event);
    if(!newArr.length){
      setSkills([...arrSkills,event.target.value]);
    }

  };
  const handleSubmit =async()=>{
      // if( !formData.email||!formData.password||!formData.name||!formData.mobile||formData.checkbox === false ){
        // alert("Fields can't be empty")
      // }
      // const response = await signupUser({...formData});
      // alert(response.message);
      console.log(arrSkills);
      console.log(formData);
    }
  return (
    
    <div className="flex flex-row h-screen ">
        <div className="basis-[56%] flex flex-col justify-center">
           <div className='flex justify-start pl-[5.5vw] mb-[2vh]'><h1 className='text-left text-[2em] font-[700] font-DmSans'>Add job description</h1></div>
           <div className="flex justify-center  ">
              <div className="flex flex-col gap-[1.5vh] pl-1" >
                  <div className='flex gap-[4vw] items-center'>
                    <h1 className='basis-[30%] font-400 text-[1.4rem]'>Company Name </h1>
                    <input 
                      name='name' 
                      type="text" 
                      id='name' 
                      onChange={handleChange} 
                      placeholder='Enter your company name here'
                      // style={{borderColor:` ${errors.name.length > 0 ? "red" :"green"}`}} 
                      className='placeholder-[#CECECE] border-2 border-[#C2C2C2] w-[30vw] h-[4.5vh] rounded-md  text-sm font-DmSans pl-6'
                    />
                  </div>
                  <div className='flex gap-[4vw] items-center'>
                    <h1 className='basis-[30%] font-400 text-[1.4rem]'>Add logo URL </h1>
                    <input 
                      name='logo' 
                      type="text" 
                      id='logo' 
                      onChange={handleChange} 
                      placeholder='Enter the link'
                      // style={{borderColor:` ${errors.name.length > 0 ? "red" :"green"}`}} 
                      className='placeholder-[#CECECE] border-2 border-[#C2C2C2] w-[30vw] h-[4.5vh] rounded-md  text-sm font-DmSans pl-6'
                    />
                  </div>
                  <div className='flex gap-[4vw] items-center'>
                    <h1 className='basis-[30%] font-400 text-[1.4rem]'>Job position </h1>
                    <input 
                      name='position' 
                      type="text" 
                      id='position' 
                      onChange={handleChange} 
                      placeholder='Enter job position'
                      // style={{borderColor:` ${errors.name.length > 0 ? "red" :"green"}`}} 
                      className='placeholder-[#CECECE] border-2 border-[#C2C2C2] w-[30vw] h-[4.5vh] rounded-md  text-sm font-DmSans pl-6'
                    />
                  </div>
                  <div className='flex gap-[4vw] items-center'>
                    <h1 className='basis-[30%] font-400 text-[1.4rem]'>Monthly salary </h1>
                    <input 
                      name='salary' 
                      type="text" 
                      id='salary' 
                      onChange={handleChange} 
                      placeholder='Enter Amount in rupees'
                      // style={{borderColor:` ${errors.name.length > 0 ? "red" :"green"}`}} 
                      className='placeholder-[#CECECE] border-2 border-[#C2C2C2] w-[30vw] h-[4.5vh] rounded-md  text-sm font-DmSans pl-6'
                    />
                  </div>
                  <div className='flex  items-center'>
                  <h1 className='basis-[37%] font-400 text-[23px]'>JOBTYPE</h1>
                  <select 
                          name="jobType"
                          onChange={handleChange}
                          className=' w-[8vw] h-[4.5vh] text-[#CECECE] text-sm font-[500] border-[2px]  border-[#CECECE] rounded-md h-[5vh] text-center'  
                    >
                    <option disabled selected value=" ">Select</option>
                    {DEFAULT_JOBTYPE.map((type)=>(
                      <option value={type} key={type}>{type}</option>
                      ))
                    }
                    </select>
                  </div>
                  <div className='flex items-center'>
                    <h1 className='basis-[37%] font-400 text-[23px]'>Remote/office</h1>
                    <select 
                            name="remote"
                            onChange={handleChange}
                            className=' w-[8vw] h-[4.5vh] text-[#CECECE] text-sm font-[500] border-[2px]  border-[#CECECE] rounded-md text-center'  
                      >
                      <option disabled selected value="">Select</option>
                      <option  value="True">True</option>
                      <option  value="False">False</option>
                      </select>
                  </div>        
                  <div className='flex gap-[4vw] items-center '>
                    <h1 className='basis-[30%] font-400 text-[1.4rem]'>location </h1>
                    <input 
                      name='location' 
                      type="text" 
                      id='location' 
                      onChange={handleChange} 
                      placeholder='Enter Location'
                      // style={{borderColor:` ${errors.name.length > 0 ? "red" :"green"}`}} 
                      className='placeholder-[#CECECE] border-2 border-[#C2C2C2] w-[30vw] h-[4.5vh] rounded-md  text-sm font-DmSans pl-6'
                    />
                  </div>
                  <div className='flex gap-[4vw] items-center'>
                    <h1 className='basis-[30%] font-400 text-[1.4rem]'>Job Description </h1>
                    <input 
                      name='description' 
                      type="text" 
                      id='description' 
                      onChange={handleChange} 
                      placeholder='Type the job description'
                      // style={{borderColor:` ${errors.name.length > 0 ? "red" :"green"}`}} 
                      className='placeholder-[#CECECE] border-2 border-[#C2C2C2] w-[30vw] h-[80px] rounded-md  text-sm font-DmSans pl-6'
                    />
                  </div>
                  <div className='flex gap-[4vw] items-center'>
                    <h1 className='basis-[30%] font-400 text-[1.4rem]'>About Company </h1>
                    <input 
                      name='about' 
                      type="text" 
                      id='about' 
                      onChange={handleChange} 
                      placeholder='Type about your company'
                      // style={{borderColor:` ${errors.name.length > 0 ? "red" :"green"}`}} 
                      className='placeholder-[#CECECE] border-2 border-[#C2C2C2] w-[30vw] h-[78px] rounded-md  text-sm font-DmSans pl-6'
                    />
                  </div>
                  <div className='flex gap-[4vw] items-center'>
                  <h1 className='basis-[30%] font-400 text-[1.4rem]'>Skills Required</h1>
                  <select 
                          name="skills"
                          onChange={addSkill}
                          className=' w-[30vw] h-[4.5vh] text-[#CECECE] text-sm font-[500] border-[2px]  border-[#CECECE] rounded-md h-[5vh] text-left pl-[1.5vw]'  
                    >
                    <option disabled selected value=" ">Enter the must have skills</option>
                    {DEFAULT_SKILLS.map((type)=>(
                      <option value={type} key={type}>{type}</option>
                      ))
                    }
                    </select>
                  </div>
                  <div className='flex gap-[4vw] items-center'>
                    <h1 className='basis-[30%] font-400 text-[1.4rem]'>Information </h1>
                    <input 
                      name='information' 
                      type="text" 
                      id='information' 
                      onChange={handleChange} 
                      placeholder='Enter the additional information'
                      // style={{borderColor:` ${errors.name.length > 0 ? "red" :"green"}`}} 
                      className='placeholder-[#CECECE] border-2 border-[#C2C2C2] w-[30vw] h-[4.5vh] rounded-md  text-sm font-DmSans pl-6'
                    />
                    <div>
                      {arrSkills.map((skill)=>(
                         <span key={skill} className=' border-2 text-xs'>{skill}</span>
                      ))
                      }
                    </div>
                  </div>
                  <div className=' flex justify-end gap-[2vw] mt-[2vh]'>
                  <button onClick={()=>navigate("/")} className='w-[8vw] h-9 bg-[#ED5353] text-white text-md font-DmSans font-bold rounded-md  '>Cancel</button>
                  <button type='submit' onClick={handleSubmit} className='w-[8vw] h-9 bg-[#ED5353] text-white text-md font-DmSans font-bold rounded-md  '>+ Add Job</button>
                  </div>
                  
              </div>
          
            </div>
        </div>
        <div className="basis-[44%] bg-jobpost bg-no-repeat bg-center bg-cover h-screen text-center " >
             {/* empty for the background image  */}
             <h1 className='z-[100] text-white font-DmSans text-[40px] font [500] mt-10' >Recruiter add job details here</h1>
        </div>
   </div>       
  )
}

export default JobPost



