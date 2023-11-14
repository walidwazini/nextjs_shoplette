import { Schema, models, model, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  username: string;
  email: string;
  password?: string;
  isSeller: boolean
}

const UserScehma = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  isSeller: { type: Boolean, default: false }
})

const User = models.User || model('User', UserScehma)

export default User 