import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1";
const loginRegisterEP = rootUrl + "/register-login";
const loginEp = loginRegisterEP + "/login";
const catEP = rootUrl + "/categories";
const paymentMethodEP = rootUrl + "/payment-method";
const adminEp = rootUrl + "/admin";

const productEp = rootUrl + "/products";
const orderEp = rootUrl + "/orders";
const customerEp = rootUrl + "/customers";
const reviewEp = rootUrl + "/reviews";

const apiProcessor = async ({ method, url, data, privateAPI, token }) => {
  try {
    const headers = privateAPI
      ? {
          Authorization: token || sessionStorage.getItem("accessJWT"),
        }
      : null;

    const response = await axios({
      method,
      url,
      data,
      headers,
    });

    return response.data;
  } catch (error) {
    let message = error.message;

    // 200, 401, 403

    if (error.response && error.response.status === 401) {
      sessionStorage.removeItem("accessJWT");
      localStorage.removeItem("refreshJWT");

      return { status: "error", message: "Unauthenticated" };
    }

    if (error.response && error.response.data) {
      message = error.response.data.message;
    }

    if (message === "jwt expired") {
      const token = await requestNewAccessJWT();

      return apiProcessor({ method, url, data, privateAPI, token });
    }

    console.log(error);
    return {
      status: "error",
      message,
    };
  }
};

export const dtpostAdminUser = (data) => {
  const option = { method: "post", url: loginRegisterEP, data };
  return apiProcessor(option);
};

export const emailVerificationAdminUser = (data) => {
  const option = { method: "patch", url: loginRegisterEP, data };
  return apiProcessor(option);
};

export const loginAdminUser = (data) => {
  const option = {
    method: "post",
    url: loginEp,
    data,
  };
  return apiProcessor(option);
};

// ==== category api call
export const fetchCategory = (_id) => {
  const url = _id ? catEP + "/" + _id : catEP;
  const option = {
    method: "get",
    url,
    privateAPI: true,
  };
  return apiProcessor(option);
};
export const postCategory = (data) => {
  const option = {
    method: "post",
    url: catEP,
    data,
    privateAPI: true,
  };
  return apiProcessor(option);
};

export const deleteCategories = (data) => {
  const option = {
    method: "delete",
    url: catEP,
    data,
    privateAPI: true,
  };
  return apiProcessor(option);
};

export const updateCategory = (data) => {
  const option = {
    method: "put",
    url: catEP,
    data,
    privateAPI: true,
  };
  return apiProcessor(option);
};

// ===== payment methods
export const fetchPaymentMethods = () => {
  const option = {
    method: "get",
    url: paymentMethodEP,
    privateAPI: true,
  };
  return apiProcessor(option);
};

export const postPaymentMethod = (data) => {
  const option = {
    method: "post",
    url: paymentMethodEP,
    privateAPI: true,
    data,
  };
  return apiProcessor(option);
};

export const deletePaymentMethod = (_id) => {
  const option = {
    method: "delete",
    url: paymentMethodEP + "/" + _id,
    privateAPI: true,
  };
  return apiProcessor(option);
};

export const updatePaymentMethod = (data) => {
  const option = {
    method: "put",
    url: paymentMethodEP,
    privateAPI: true,
    data,
  };
  return apiProcessor(option);
};

// ======== admin user
export const updateAdminPassword = (data) => {
  const option = {
    method: "patch",
    url: adminEp,
    privateAPI: true,
    data,
  };
  return apiProcessor(option);
};

export const updateAdminProfile = (data) => {
  const option = {
    method: "put",
    url: adminEp,
    privateAPI: true,
    data,
  };
  return apiProcessor(option);
};

export const getAdminUser = () => {
  const option = {
    method: "get",
    url: adminEp,
    privateAPI: true,
  };

  return apiProcessor(option);
};

// ========= Password reset
export const requestOTP = (data) => {
  const option = {
    method: "post",
    url: loginRegisterEP + "/otp-request",
    data,
  };
  return apiProcessor(option);
};
export const resetPassword = (data) => {
  const option = {
    method: "patch",
    url: loginRegisterEP + "/password",
    data,
  };
  return apiProcessor(option);
};

// ================= products api calls
export const getProducts = () => {
  const option = {
    method: "get",
    url: productEp,
    privateAPI: true,
  };

  return apiProcessor(option);
};
export const getsingleProduct = (_id) => {
  const option = {
    method: "get",
    url: productEp + "/" + _id,
    privateAPI: true,
  };

  return apiProcessor(option);
};

export const postProducts = (data) => {
  const option = {
    method: "post",
    url: productEp,
    privateAPI: true,
    data,
  };

  return apiProcessor(option);
};

export const deleteProduct = (_id) => {
  const option = {
    method: "delete",
    url: productEp + "/" + _id,
    privateAPI: true,
  };

  return apiProcessor(option);
};

export const updateProduct = (data) => {
  const option = {
    method: "put",
    url: productEp,
    privateAPI: true,
    data,
  };

  return apiProcessor(option);
};

// ========= JWT Api
export const requestNewAccessJWT = async () => {
  const option = {
    method: "get",
    url: adminEp + "/accessjwt",
    privateAPI: true,
    token: localStorage.getItem("refreshJWT"),
  };

  const { accessJWT } = await apiProcessor(option);
  sessionStorage.setItem("accessJWT", accessJWT);
  return accessJWT;
};

// ==== order api
export const getOrders = async (_id) => {
  const option = {
    method: "get",
    url: _id ? orderEp + "/" + _id : orderEp,
    privateAPI: true,
  };

  return apiProcessor(option);
};

// ==== customer api
export const getCustomers = async (_id) => {
  const option = {
    method: "get",
    url: _id ? customerEp + "/" + _id : customerEp,
    privateAPI: true,
  };

  return apiProcessor(option);
};

// ==== reviews api
export const getReviews = async (_id) => {
  const option = {
    method: "get",
    url: _id ? reviewEp + "/" + _id : reviewEp,
    privateAPI: true,
  };

  return apiProcessor(option);
};
