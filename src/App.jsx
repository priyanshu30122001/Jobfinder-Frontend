import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './components/register/login';
import Signup from './components/register/signup';
import HomePage from './components/HomePage';
import JobDetails from './components/jobDetails';
import EditJob from './components/EditJob';
import JobPost from './components/jobPost';
import NoPage from './components/NoPage';

function App() {
  return (
    < BrowserRouter>
       <Routes>
          <Route path='/'element={<HomePage/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/job-details/:id' element={<JobDetails/>}/>
          <Route path='/job-post' element={<JobPost/>} />
          <Route path='/edit-job' element={<EditJob/>} />
          <Route path='*' element={<NoPage/>} />

       </Routes>
    </BrowserRouter>
  )
}

export default App
