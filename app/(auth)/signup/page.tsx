import { userSignUp } from '@/server/actions/user.action'
import React from 'react'

const SignUp = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 ' >
      <form
        action={userSignUp}
        className='mt-10 gap-4 bg-gray-800 rounded-lg w-96 h-80 p-4 flex flex-col ' >
        <input
          type='email'
          name='email'
          placeholder='Your email'
          className='w-[70%] p-2 text-sm text-black'
        />
        <input
          type='text'
          name='username'
          placeholder='Your username'
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
          Submit
        </button>
      </form>
    </div>
  )
}

export default SignUp