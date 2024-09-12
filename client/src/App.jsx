import Login from './components/Authentication/Login';
import { AuthProvider } from './components/Authentication/firebase/firebase'; // Adjust path if necessary
import Register from './components/Authentication/Register';
import ResetPassword from './components/Authentication/ResetPassword';
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Topics from './components/Projects/Topics';
import AboutUs from './components/AboutPage';
function App() {
  
  return (
    <div className=''>
    <AuthProvider>
      <BrowserRouter>
      <Routes>
         <Route index element={<Login />} />
         <Route path='/register' element={<Register/>} />
         <Route path='/reset-password' element={<ResetPassword/>} />
         <Route path='/home' element={<Home/>} />
         <Route path='/projects' element={<Projects/>} />
         <Route path='/topics' element={<Topics/>} />
         <Route path='/about' element={<AboutUs/>} />
         
      
        </Routes>
      </BrowserRouter>
</AuthProvider>
    </div>
  )
}

export default App
