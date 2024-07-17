import {useState} from 'react'
import shape1 from "../../assets/Rectangle2.png";
import shape2 from "../../assets/Rectangle3.png";
import shape3 from "../../assets/Rectangle4.png";
import { useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";


function header() {
  const [token] = useState(localStorage.getItem("token"));
  const [user] = useState(localStorage.getItem("User"));
  const navigate = useNavigate();
  const handleLogout=()=>{
        localStorage.clear();
        navigate("/login");
      }
  return (
    <div className=' bg-[#ED5353] px-[5vw] py-[3vh] h-[16vh] rounded-br-[55px] rounded-bl-[55px] flex justify-between relative items-center text-[white] '>
        <img src={shape1} alt="shape1" className=' absolute bottom-[0] left-[0]'/>
        <img src={shape2} alt="shape2" className='absolute top-[-1vh] left-[38vw]' />
        <img src={shape3} alt="shape3" className='absolute top-[-3vh] left-[70vw]   '/>
        <h3 className='z-[1] text-[30px] font-[700]'>Jobfinder</h3>
        <div className='z-[1] flex gap-4 '>
             {token ? <> <div className=' flex justify-center gap-[1vw]'>
                          <button onClick={handleLogout} className='text-[23px]'>Logout</button> 
                          <p className='text-[23px]'> Hello! {user}</p> 
                          <CgProfile className='text-[2.3em]'/>
                          </div>
                      </>  
                      : 
                      <>
                        <div className='flex gap-[1.5vw]'>
                          <button className='border-2 border-white px-[1.2vw] py-[0.8vh] font-[500] text-[23px] rounded-md hover:bg-white hover:text-[#ED5353]' onClick={()=>navigate('/Login')} >Login</button>
                          <button className='border-2 border-white px-[1.2vw] py-[0.8vh] font-[500] text-[23px] rounded-md hover:bg-white hover:text-[#ED5353]' onClick={()=>navigate('/Signup')} >Register</button>
                        </div> 
                      </>
             }
        </div> 
    </div>
  )
}

export default header;