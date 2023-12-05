"use client"

import React from 'react'
import { signIn } from 'next-auth/react'


const LoginBox = () => {
  return (
    <>
       <form
        // action={userSignUp}
        className='mt-10 gap-4 bg-[#4040a0] rounded-lg w-96 h-80 p-4 flex flex-col ' >
        <input
          type='email'
          name='email'
          placeholder='Your email'
          className='w-[70%] p-2 text-sm text-black'
        />
        <input
          type='password'
          name='password'
          placeholder='Your password'
          className='w-[70%] p-2 text-sm text-black'
        />
        <button
          type='submit'
          className='bg-green-500 mt-4 p-2 rounded-lg'
        >
          Log In
        </button>
      </form>
      <div>
        <button
          onClick={() => signIn('google', { callbackUrl: '/' })}
          className='bg-white rounded-md text-blue-600 text-sm py-2 px-3'
        >
          Continue with Google 🔵
        </button>
      </div>
    </>
  )
}

export default LoginBox