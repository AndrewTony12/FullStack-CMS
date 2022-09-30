import axios from "axios";

const rootUrl = "http://localhost:7000";
const loginEP = "http://localhost:7000/api/v1/login";
const registerEP = "http://localhost:7000/api/v1/register"
const otpEP = "http://localhost:7000/api/v1/register/reqOtp"


const apiProcessor = async (method, url, data ) => {
    try {
      const response = await axios({
        method,
        url,
        data,
        
      });
  console.log(method,url,data);
      return response.data;
    } catch (error) {
      console.log(error);
      return {
        status: "error",
        message,
      };
    }
  };
  

  export const loginUser = (data) => {
  
    return apiProcessor("post",loginEP,data);

  };

  export const emailVerification = (obj)=>{
    return apiProcessor("patch",registerEP,obj)
  } 

  export const otp = (obj) => {
  
    return apiProcessor("post",otpEP,obj);

  };
 
  export const updatePwd = (obj) => {
  
    return apiProcessor("patch",otpEP,obj);

  };