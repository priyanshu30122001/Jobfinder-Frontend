import React from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {signupUser} from "../../apis/auth"

function signup(){

    const navigate = useNavigate();
    const [formData,setFormData] = useState({
      name:"",
      email:"",
      mobile:"",
      password:"",
      checkbox:false
    });
    const handleChange = (e)=>{
       setFormData({...formData,[e.target.name]:e.target.value});
    }
    
    const handleCheckbox =(e)=>{
        setFormData({...formData,[e.target.name]:e.target.checked});
    }

    const handleSubmit =async()=>{
        if( !formData.email||!formData.password||!formData.name||!formData.mobile||formData.checkbox === false ){
          alert("Fields can't be empty")
        }
        const response = await signupUser({...formData});
        alert(response.message);
        navigate('/Login')
      }
      return (

    <div className="flex flex-row h-screen ">
        <div className="basis-[54%] py-32 pl-20 flex flex-col justify-center">
            <h1 className='text-[2em] font-[700] font-DmSans'>Create an account</h1>
            <p className='text-lg font-[500] font-DmSans mb-8 text-[#525252] '>Your personal job finder is here</p>
            <div className="flex flex-col  gap-4 pl-1" >
                <input 
                    name='name' 
                    type="text" 
                    id='name' 
                    onChange={handleChange} 
                    placeholder='Name'
                    // style={{borderColor:` ${errors.name.length > 0 ? "red" :"green"}`}} 
                    className='placeholder-[#525252] border-2 border-[#C2C2C2] w-[40em] h-14 rounded-md  text-md font-DmSans pl-6'
                />
                <input 
                    type="email" 
                    name='email' 
                    id='email' 
                    onChange={handleChange} 
                    placeholder='Email'
                    // style={{borderColor:` ${errors.name.length > 0 ? "red" :"green"}`}} 
                    className='placeholder-[#525252] border-2 border-[#C2C2C2] w-[40em] h-14 rounded-md  text-md font-DmSans pl-6'
                />
                <input 
                    type="tel" 
                    name='mobile' 
                    id='mobile' 
                    onChange={handleChange} 
                    placeholder='Mobile'
                    // style={{borderColor:` ${errors.name.length > 0 ? "red" :"green"}`}} 
                    className='placeholder-[#525252] border-2 border-[#C2C2C2] w-[40em] h-14 rounded-md  text-md font-DmSans pl-6'
                />
                <input 
                    type="password" 
                    name='password' 
                    id='password' 
                    onChange={handleChange} 
                    placeholder='Password'
                    // style={{borderColor:` ${errors.name.length > 0 ? "red" :"green"}`}} 
                    className='placeholder-[#525252] border-2 border-[#C2C2C2] w-[40em] h-14 rounded-md  text-md font-DmSans pl-6'
                />
                <div className='flex'>
                    <input 
                    type="checkbox"
                    id='checkbox'
                    name='checkbox'
                    onChange={handleCheckbox}
                    className='accent-[#8a8787] cursor-pointer bg-black' 
                    />
                    <label htmlFor="checkbox" className='text-[#7C7C7C] font-DmSans font-normal text-xs ml-2 '>By creating an account, I agree to our terms of use and privacy policy</label>
                </div>
                <button type='submit' onClick={handleSubmit} className='w-[10em] h-12 bg-[#ED5353] text-white text-xl font-DmSans font-bold rounded-md mt-4 '>Create Account</button>
            </div>
            <p className='mt-2'>Already have an account? <span className='underline underline-offset-2 font-bold cursor-pointer'  onClick={() => navigate('/login')}>Sign in </span></p>
        </div>
        <div className="basis-[46%] bg-hero bg-no-repeat bg-center bg-cover h-screen text-center " >
             {/* empty for the background image  */}
             <h1 className='z-[100] text-white font-DmSans text-[40px] font [500] mt-10' >Your Personal Job Finder</h1>
         </div>
    </div>       

      )
    }
    
export default signup ;