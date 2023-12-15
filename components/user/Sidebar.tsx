'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import React from 'react'

const Sidebar = () => {
  const pathname = usePathname()

  console.log(pathname)

  // TODO create allLinks arrays 

  return (
    <>
      <div className='h-20' >
        <p>Profile</p>
      </div>
      <div className='flex flex-col gap-4' >
        <div>
          <>🔐 My Account</>
          <div className='mt-2 pl-6 flex flex-col gap-2' >
            <Link
              href={'/user/account/profile'}
              className={`${pathname === '/user/account/profile' && 'text-blue-700 font-bold'}`}
            >
              Profile
            </Link>
            <div>Addresses</div>
            <div>Banks & Cards</div>
          </div>
        </div>
        <div>🛍 My Purchase</div>
        <div>🔔 Notification</div>
      </div>
    </>
  )
}

export default Sidebar