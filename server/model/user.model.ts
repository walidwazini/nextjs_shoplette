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
  phoneNumber: { type: String, require: true, default: '' },
  state: { type: String, require: true, default: '' },
  postalCode: { type: Number, require: true, default: 0 },
  unitNo: { type: String, require: true, default: '' },
  streetName1: { type: String, require: true, default: '' },
  streetName2: { type: String, require: true, default: '' },
  label: { type: String, require: true, default: '' },
  isDefault: { type: Boolean, default: false },
}, { timestamps: true })


const UserSchema = new Schema({
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

const User = models.User || model('User', UserSchema)

export default User 