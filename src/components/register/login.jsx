import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {loginUser} from "../../apis/auth"

function login() {
const navigate = useNavigate();
const [formData,setFormData] = useState({
  email:"",
  password:""
});
const handleChange = (e)=>{
   setFormData({...formData,[e.target.name]:e.target.value});
}  
const handleSubmit = async()=>{
  if( !formData.email || !formData.password ){
    alert("Fields can't be empty");
  }
 const response = await loginUser(formData.email,formData.password);
 if (response?.token) {
  localStorage.setItem("token", response?.token);
  localStorage.setItem("User", response?.user);
  localStorage.setItem("userId",response?.userId)
  navigate("/");
  }
  
}
  return (
    <>
      <div className="flex flex-row h-screen ">
        <div className="basis-[50%] py-32 pl-20 flex flex-col justify-center">
            <h1 className='text-[2.5em] font-[700] font-DmSans'>Already have an account?</h1>
            <p className='text-lg font-[500] font-DmSans mb-8 text-[#525252] '>Your personal job finder is here</p>
            <div className="flex flex-col gap-4 pt-2" >
            <input 
                type="email" 
                name='email' 
                id='email' 
                onChange={handleChange} 
                placeholder='Email'
                // style={{borderColor:` ${errors.name.length > 0 ? "red" :"green"}`}} 
                className='placeholder-[#525252] border-2 border-[#C2C2C2] w-[34em] h-16 rounded-md  text-lg font-DmSans pl-6'
            />
            <input 
                type="password" 
                name='password' 
                id='password' 
                onChange={handleChange} 
                placeholder='Password'
                // style={{borderColor:` ${errors.name.length > 0 ? "red" :"green"}`}} 
                className='placeholder-[#525252] border-2 border-[#C2C2C2] w-[34em] h-16 rounded-md text-lg font-DmSans pl-6'
            />

             <button type='submit' onClick={handleSubmit} className='w-[10em] h-12 bg-[#ED5353] text-white text-xl font-DmSans font-bold rounded-md mt-5 ' >Sign in</button>
            </div>
            <p className='mt-2'>Don’t have an account? <span className='underline underline-offset-2 font-bold cursor-pointer'  onClick={() => navigate('/signup')}>Sign up</span></p>
        </div>
        <div className="basis-[50%] bg-hero bg-no-repeat bg-center bg-cover h-screen text-center " >
             {/* empty for the background image  */}
             <h1 className='z-[100] text-white font-DmSans text-[40px] font [500] mt-10' >Your Personal Job Finder</h1>
         </div>
      </div>    
    </>
  )
}

export default login; 