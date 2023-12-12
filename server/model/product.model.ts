import { Schema, models, model, Document } from 'mongoose';

export interface IProduct extends Document {
  name: string,
  images: string[],
  description: string,
  shop: Schema.Types.ObjectId,
  variant: Object,
  price: Number,
  countInStock: Number
}

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    images: [{
      type: String,
    }],
    description: {
      type: String,
      required: true,
    },
    shop: {
      type: Schema.Types.ObjectId,
      ref: 'Shop',
      require: true
    },
    variant: {
      type: Object,
    },
    // reviews: [reviewSchema],
    // rating: {
    //   type: Number,
    //   required: true,
    //   default: 0,
    // },
    // numReviews: {
    //   type: Number,
    //   required: true,
    //   default: 0,
    // },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)

const Product = models.Product || model("Product", ProductSchema)

export default Product