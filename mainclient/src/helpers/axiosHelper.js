import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1/register";
const loginEP = "http://localhost:8000/api/v1/login";
const registerForm = rootUrl + "regist-form"


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