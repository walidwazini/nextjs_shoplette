import React from 'react'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/utils/auth'
import Link from 'next/link'
import Sidebar from '@/components/user/Sidebar'

// TODO refactor import compnent 
// TODO finalize UI

const UserLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions)


  return (
    <div className='flex py-6 px-8 min-h-screen  ' >
      <div className='basis-1/5 bg-transparent flex flex-col border-blue-400 border ' >
        <Sidebar />
      </div>
      <div className='basis-4/5 border-green-400 border ' >
        {children}
      </div>
    </div>
  )
}


export default UserLayout