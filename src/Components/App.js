import Index from '../Components/Index'
import Profile from '../Components/Profile'
import Settings from '../Components/Settings'
import Projects from '../Components/Projects'
import Courses from '../Components/Courses'
import Friends from '../Components/Friends'
import Files from '../Components/Files'
import Plans from '../Components/Plans'
import React  from 'react'
import Register from '../Components/Rigester/Register'
import Login from '../Components/Login/Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<Index />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/settings' element={<Settings />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/courses' element={<Courses />}></Route>
        <Route path='/friends' element={<Friends />}></Route>
        <Route path='/files' element={<Files />}></Route>
        <Route path='/plans' element={<Plans />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
