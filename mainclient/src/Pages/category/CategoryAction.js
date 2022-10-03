import { setCategory } from "./CategorySlice";



export const categoryAction = (obj) => async (dispatch) => {
  const results = await category(obj);

  console.log(results);
  const { status, message, result } = results;

  if (status === "success") {
    //  alert(message)
    dispatch(setCategory(result));
  } else {
    alert(message);
  }
};
