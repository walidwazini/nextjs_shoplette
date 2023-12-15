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
    <div className='flex p-2 min-h-screen' >
      <div className='basis-1/5 bg-transparent flex flex-col' >
        <Sidebar />
      </div>
      <div className='basis-4/5' >
        {children}
      </div>
    </div>
  )
}


export default UserLayout