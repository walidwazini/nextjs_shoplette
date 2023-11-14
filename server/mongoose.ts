import mongoose from "mongoose";

let isConnected: boolean = false

export const connectDatabase = async () => {
  mongoose.set('strictQuery',true)

  if (!process.env.MONGODB_URL) return console.log(`Missing MongoDB url.`)

  if (isConnected) {
    return console.log(`MongoDB succesfully connected`)
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL,{ dbName: 'shoplette' })

    isConnected = true
  } catch (error) {
    console.log(error)
  }
}