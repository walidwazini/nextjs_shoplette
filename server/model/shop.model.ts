import { Schema, models, model, Document } from 'mongoose';

export interface IShop extends Document {
  name: string,
  owner: Schema.Types.ObjectId,
  products: Schema.Types.ObjectId[],
}

const ShopSchema = new Schema({
  name: { type: String, unique: true },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  products: [{
    type: Schema.Types.ObjectId,
    ref: 'product',
    required: true,
  }],
  image: { type: String },
}, { timestamps: true })

const Shop = models.Shop || model('Shop', ShopSchema)

export default Shop
