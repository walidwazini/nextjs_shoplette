"use client"
import React from 'react'

import { signOut } from 'next-auth/react'

const SignoutBtn = () => {
  return (
    <button
      onClick={() => signOut()}
      className='px-2 py-1 rounded-md bg-white text-black text-xs'
    >
      Sign Out
    </button>
  )
}

export default SignoutBtn