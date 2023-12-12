"use server"

import bcrypt from 'bcrypt'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import User from '../model/user.model'

import { connectDatabase } from '../mongoose'

// TODO : this is just a trial for signup process might delete later

export const userSignUp = async (formData: any) => {
  const { email, password } = Object.fromEntries(formData)
  console.log(formData)
  try {
    connectDatabase()

    const salt = await bcrypt.genSalt(5)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new User({
      email,
      password: hashedPassword,
      name: 'Demo',
      username: 'demoUser2023'
    })

    await newUser.save()

  } catch (error) {
    console.log(error);
    throw new Error("Failed to create user!");
  }

  revalidatePath('/')
  redirect('/')
}

export const getUserDetails = async (id: string) => {
  try {
    connectDatabase()

    const onlineUser = await User.findById(id).select('-password')

    if (!onlineUser) throw new Error('User not found.')

    return onlineUser
  } catch (error) {
    throw error
  }
}

export const addAddress = async () => {
  const demoId = '65781962b153a6c88c7bc31f'
  try {
    connectDatabase()
    
    const onlineUser = await User.findById(demoId).select('-password')

    const newAddress = {
      title: 'home',
      state: 'Selangor',
      label:'Home',
    }

    onlineUser.addresses.push(newAddress)

    await onlineUser.save()

    console.log(onlineUser.addresses)
    
    return onlineUser.addresses

  } catch (error) {
    throw error
  }
}

// export const userAuthenticate = async (prevState, formData) => {
//   const { username, password } = Object.fromEntries(formData)

//   try {
//     await 
//   } catch (error) {
    
//   }
// }