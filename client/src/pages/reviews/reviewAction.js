import { getReviews } from "../../helpers/axiosHelper";
import { setReviews } from "./reviewSlice";

export const getReviewsAction = () => async (dispatch) => {
  //call the api

  const { status, reviews } = await getReviews();

  status === "success" && dispatch(setReviews(reviews));
};
