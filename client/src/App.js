import "./App.css";
import Login from "./pages/login-registration/Login";
import Registration from "./pages/login-registration/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import EmailVerification from "./pages/login-registration/EmailVerification";
import Dashboard from "./pages/dashboard/Dashboard";
import Categories from "./pages/categories/Categories";
import Products from "./pages/products/Products";
import PaymentMethods from "./pages/payment-method/PaymentMethods";
import Users from "./pages/users/Users";
import Orders from "./pages/orders/Orders";
import AdminProfile from "./pages/admin-profile/AdminProfile";
import Settings from "./pages/settings/Settings";
import ResetPassword from "./pages/reset-password/ResetPassword";
import { PrivateRouter } from "./components/private-route/PrivateRouter";
import NewProduct from "./pages/products/NewProduct";
import EditProduct from "./pages/products/EditProduct";
import Reviews from "./pages/reviews/Review";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/admin-verification" element={<EmailVerification />} />
          <Route path="/password-reset" element={<ResetPassword />} />

          {/* private routes TODO */}
          <Route
            path="/dashboard"
            element={
              <PrivateRouter>
                <Dashboard />
              </PrivateRouter>
            }
          />
          <Route
            path="/categories"
            element={
              <PrivateRouter>
                <Categories />
              </PrivateRouter>
            }
          />
          <Route
            path="/product/new"
            element={
              <PrivateRouter>
                <NewProduct />
              </PrivateRouter>
            }
          />

          <Route
            path="/products"
            element={
              <PrivateRouter>
                <Products />
              </PrivateRouter>
            }
          />

          <Route
            path="/product/edit/:_id"
            element={
              <PrivateRouter>
                <EditProduct />
              </PrivateRouter>
            }
          />

          <Route
            path="/payment-method"
            element={
              <PrivateRouter>
                <PaymentMethods />
              </PrivateRouter>
            }
          />
          <Route
            path="/users"
            element={
              <PrivateRouter>
                <Users />
              </PrivateRouter>
            }
          />
          <Route
            path="/ordes"
            element={
              <PrivateRouter>
                <Orders />
              </PrivateRouter>
            }
          />
          <Route
            path="/reviews"
            element={
              <PrivateRouter>
                <Reviews />
              </PrivateRouter>
            }
          />
          <Route
            path="/admin-profile"
            element={
              <PrivateRouter>
                <AdminProfile />
              </PrivateRouter>
            }
          />

          <Route
            path="/settings"
            element={
              <PrivateRouter>
                <Settings />
              </PrivateRouter>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default App;
