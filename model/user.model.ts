import { Schema, models, model, Document } from 'mongoose';

export interface IUser extends Document {
  name?: string;
  username?: string;
  email?: string;
  password?: string;
  image?: string
  isSeller: boolean
  provider: string
}

const UserScehma = new Schema({
  name: { type: String },
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: { type: String },
  image: { type: String },
  isSeller: { type: Boolean, default: false },
  provider: { type: String, default: 'credentials' }
}, { timestamps: true })

const User = models.user || model('user', UserScehma)

export default User 