"use client"
import React from 'react'
import { RiLogoutCircleLine } from "react-icons/ri";

import { signOut, useSession } from 'next-auth/react'

const SignoutBtn = () => {
  const session = useSession()

  console.log(session)

  return (
    <button
      onClick={() => signOut()}
      className='px-1 py-0.5 flex items-center gap-0.5 rounded-md bg-white text-black text-xs'
    >
      <RiLogoutCircleLine />
      <p>Sign Out</p>
    </button>
  )
}

export default SignoutBtn