"use client"

import React from 'react'

import { useSession } from 'next-auth/react'

const Home = () => {

  const session = useSession()

  // console.log(session)

  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home