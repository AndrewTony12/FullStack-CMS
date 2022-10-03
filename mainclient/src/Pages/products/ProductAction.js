import { getProducts} from "../../helpers/axiosHelper";
import { setProducts } from "./ProductSlice";

export const productsAction = () => async (dispatch) => {
  const results = await getProducts();

  console.log(results);
  const { status, message, products } = results;

  if (status === "success") {
    //  alert(message)
    dispatch(setProducts(products));
  } else {
    alert(message);
  }
};
