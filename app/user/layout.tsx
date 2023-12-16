import React from 'react'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/utils/auth'
import Link from 'next/link'
import Sidebar from '@/components/user/Sidebar'

// TODO refactor import compnent 
// TODO finalize UI

const UserLayout = async ({ children }: { children: React.ReactNode }) => {
  const { user } = await getServerSession(authOptions)

  console.log(user)

  return (
    <div className='flex py-6 lg:px-8 px-4 min-h-screen  ' >
      <div className='basis-[20%] lg:basis-1/5 bg-transparent flex flex-col ' >
        <Sidebar name={user?.name} username={user?.username} email={user?.email} image={user?.image} />
      </div>
      <div className='basis-[70%] lg:basis-4/5 ' >
        {children}
      </div>
    </div>
  )
}


export default UserLayout