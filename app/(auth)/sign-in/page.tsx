
import React from 'react'
import { signIn } from 'next-auth/react'
import LoginBox from '@/components/LoginBox'

const Login =  ({ searchParams }: any) => {

  console.log('here')
  console.log(searchParams)

  return (
    <div className='flex flex-col justify-center items-center gap-4 ' >
     <LoginBox />
    </div>
  )
}

export default Login