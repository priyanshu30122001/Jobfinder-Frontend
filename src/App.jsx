import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './components/register/login';
import Signup from './components/register/signup';
import HomePage from './components/HomePage';
import JobDetails from './components/jobDetails';
function App() {
  return (
    < BrowserRouter>
       <Routes>
          <Route path='/'element={<HomePage/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/job-details/:id' element={<JobDetails/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App
