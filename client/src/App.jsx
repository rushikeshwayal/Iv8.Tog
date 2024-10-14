import Login from './components/Authentication/Login';
import { AuthProvider } from './components/Authentication/firebase/firebase'; // Adjust path if necessary
import Register from './components/Authentication/Register';
import ResetPassword from './components/Authentication/ResetPassword';
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Topics from './components/Projects/Topics';
import AboutUs from './components/AboutPage';
import Profile from './components/Profile/Profile';
import ChatBot from './components/Chat-Bot/ChatBot';
function App() {
  
  return (
    <div className=''>
    <AuthProvider>
      <ChatBot/>
      <BrowserRouter>
      <Routes>
         <Route index element={<Login />} />
         <Route path='/register' element={<Register/>} />
         <Route path='/reset-password' element={<ResetPassword/>} />
         <Route path='/home' element={<Home/>} />
         <Route path='/projects' element={<Projects/>} />
         <Route path='/topics' element={<Topics/>} />
         <Route path='/about' element={<AboutUs/>} />
         <Route path='/profile' element={<Profile/>} />
         
      
        </Routes>
      </BrowserRouter>
</AuthProvider>
    </div>
  )
}

export default App
