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
    <div className='flex py-6 px-8 min-h-screen  ' >
      <div className='basis-[30%] bg-transparent flex flex-col ' >
        <Sidebar name={user?.name} username={user?.username} email={user?.email} image={user?.image} />
      </div>
      <div className='basis-[70%] border-green-400 border ' >
        {children}
      </div>
    </div>
  )
}


export default UserLayout