import {loginUser} from "../../helpers/axiosHelper"
import { setUser } from "./loginSlice";

export const loginAction = (obj)=> async (dispatch)=>{

    const results = await loginUser(obj);

    console.log(results);
    const {status,message,result} = results;

    if (status === "success") {
    //  alert(message)
        dispatch(setUser(result));
    }
    else {
        alert(message)
    }
};