import express from "express";
const router = express.Router();

const fakeReviews = [
  {
    _id: "sdfsdf",
    status: "active",
    review: " this is test review",
    productId: "934579",
    productName: "lasjfl",
    rating: 5,
    reviewedBy: "Prem",
    reviewedBy_id: "435ertert",
  },
  {
    _id: "ddd",
    status: "inactive",
    review: " this is test review",
    productId: "934579",
    productName: "lasjfl",
    rating: 4,
    reviewedBy: "Prem",
    reviewedBy_id: "435ertert",
  },
  {
    _id: "34sds",
    status: "active",
    review: " this is test review",
    productId: "934579",
    productName: "lasjfl",
    rating: 5,
    reviewedBy: "Prem",
    reviewedBy_id: "435ertert",
  },
];

router.get("/:_id?", (req, res, next) => {
  try {
    const { _id } = req.params;

    const reviews = _id
      ? fakeReviews.filter((item) => item?._id == _id)
      : fakeReviews;

    res.json({
      status: "success",
      message: "the order lists",
      reviews,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
