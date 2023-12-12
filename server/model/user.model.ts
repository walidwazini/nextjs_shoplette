import { Schema, models, model, Document } from 'mongoose';

export interface IUser extends Document {
  name?: string;
  username?: string;
  email?: string;
  password?: string;
  image?: string
  shope?: Schema.Types.ObjectId,
  provider: string
}

const addressSchema = new Schema({
  title: { type: String },
  phoneNumber: { type: String },
  state: { type: String, },
  postalCode: { type: Number },
  unitNo: { type: String },
  streetName1: { type: String },
  streetName2: { type: String },
  label: { type: String },
  isDefault: { type: Boolean, default: false },
}, { timestamps: true })


const UserScehma = new Schema({
  name: { type: String },
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: { type: String },
  image: { type: String },
  cart: [{
    product: {
      type: Schema.Types.ObjectId,
      ref: 'product',
    },
    unitPrice: Number,
    quantity: Number,
    totalPrice: Number,
  }],
  addresses: [addressSchema],
  shop: { type: Schema.Types.ObjectId, ref: 'shop' },
  provider: { type: String, default: 'credentials' }
}, { timestamps: true })

const User = models.user || model('User', UserScehma)

export default User 