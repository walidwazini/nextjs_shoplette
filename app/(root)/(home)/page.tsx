import React from 'react'

import { connectDatabase } from '@/server/mongoose'

const Home = async () => {
  const result = await connectDatabase()

  console.log(result)
  
  return (
    <div>Home</div>
  )
}

export default Home