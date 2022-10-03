import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Pages/login/Login.js';
import { RegisterForm } from './Components/register/RegisterForm';
import { Dashboard } from './Pages/dashboard/Dashboard';
import { EmailVerification } from './Pages/verification/EmailVerification';
import ResetPassword from './Components/resetPassword/ResetPassword';
import Products from './Pages/products/Products';
// import UpdatePassword from './Components/updatePassword/UpdatePassword';






function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin-verification" element={<EmailVerification />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path='/updatePassword' element={<UpdatePassword/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
