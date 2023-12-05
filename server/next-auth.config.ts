import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'

import { connectDatabase } from "./mongoose";
import User from "@/database/user.model";

const login = async (credentials: any) => {
  try {
    connectDatabase()

    const user = await User.findOne({ username: credentials.username })

    if (!user) throw new Error("Wrong credentials!");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong credentials!");

    return user
  } catch (error) {
    console.log(error)
  }
}

export const { signIn, signOut, auth, } = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        // username: { label: "Username", type: "text", placeholder: "jsmith" },
        // password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {

        const user = await login(credentials)
        // If no error and we have user data, return it
        if (user) {
          return user
        }
        // Return null if user data could not be retrieved
        return null
      }
    }),
  ]
})