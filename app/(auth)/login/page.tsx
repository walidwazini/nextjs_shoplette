import React from 'react'

import { connectDatabase } from '@/server/mongoose'

const Login = async () => {
  const result = await connectDatabase()

  console.log(result)
  return (
    <div>
      login
    </div>
  )
}

export default Login