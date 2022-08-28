import { configureStore } from "@reduxjs/toolkit";
import loginRecucer from "./pages/login-registration/loginRegisterSlice";
import systemReducer from "./pages/system-state/systemSlice";
import categoryReducer from "./pages/categories/catSlice";
import paymentMethodReducer from "./pages/payment-method/paymentMethodSlice";
import productReducer from "./pages/products/productSlice";
import orderReducer from "./pages/orders/orderSlice";
import customerReducer from "./pages/users/customerSlice";
import reviewReducer from "./pages/reviews/reviewSlice";

const store = configureStore({
  reducer: {
    adminUser: loginRecucer,
    system: systemReducer,
    categories: categoryReducer,
    paymentMethod: paymentMethodReducer,
    products: productReducer,
    orders: orderReducer,
    customers: customerReducer,
    reviews: reviewReducer,
  },
});

export default store;
