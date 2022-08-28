import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      reqired: true,
      default: "inactive",
    },
    name: {
      type: String,
      reqired: true,
      maxlength: 1000,
    },
    sku: {
      type: String,
      reqired: true,
      unique: true,
      index: 1,
      maxlength: 20,
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
      index: 1,
      reqired: true,
      trim: true,
    },
    description: {
      type: String,
      reqired: true,
      maxlength: 5000,
    },
    catId: {
      type: mongoose.Schema.Types.ObjectId,
      reqired: true,
      ref: "Category",
      default: null,
    },
    qty: {
      type: Number,
      reqired: true,
      default: 0,
    },
    images: [
      {
        type: String,
      },
    ],

    thumbnail: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      reqired: true,
      default: 0,
    },
    salesPrice: {
      type: Number,
      reqired: true,
      default: 0,
    },
    salesStartDate: {
      type: Date,
      default: null,
    },
    salesEndDate: {
      type: Date,
      default: null,
    },
    ratings: {
      type: Number,
      max: 5,
      default: 5,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", ProductSchema);
