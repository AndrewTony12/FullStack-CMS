import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Pages/Login';
import { RegisterForm } from './Components/register/RegisterForm';




function App() {
  return (
    <BrowserRouter>
    <Routes>
  
   <Route path="/" element={<Login/>}/>
   <Route path='/register' element={<RegisterForm/>}/>
  
    </Routes>
    </BrowserRouter>
  );
}

export default App;
