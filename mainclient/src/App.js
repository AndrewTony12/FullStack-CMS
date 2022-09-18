import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Pages/login/Login.js';
import { RegisterForm } from './Components/register/RegisterForm';
import { Dashboard } from './Pages/dashboard/Dashboard';




function App() {
  return (
    <BrowserRouter>
    <Routes>
  
   <Route path="/" element={<Login/>}/>
   <Route path="/dashboard" element={<Dashboard/>}/>
   <Route path='/register' element={<RegisterForm/>}/>
  
    </Routes>
    </BrowserRouter>
  );
}

export default App;
