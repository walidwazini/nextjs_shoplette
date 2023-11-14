"use server"

import bcrypt from 'bcrypt'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import User from '@/database/account.model'

import { connectDatabase } from '../mongoose'

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