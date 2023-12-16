'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { myAccountLinks } from '@/constants'
import { ProfileSidebarProps } from '@/types'

const Sidebar = (props: ProfileSidebarProps) => {
  const { name, email, username, image, addresses, createdAt } = props
  const pathname = usePathname()
  
  // console.log(username)

  return (
    <>
      <div className='h-48 w-full flex justify-center items-center p-2 gap-2 ' >
        <div className='basis-1/3' >
          <img src={image} alt='profile-pic' className='w-20 rounded-full ' />
        </div>
        <div className='basis-2/3 text-white ml-2' >
          <div className='font-semibold' >{username === '' ? name : username}</div>
          <div className='hover:cursor-pointer mt-2' >🖊 Edit Profile</div>
        </div>
      </div>
      <div className='flex flex-col gap-4 px-3 ' >
        <div>
          <>🔐 My Account</>
          <div className='mt-2 pl-6 flex flex-col gap-2' >
            {myAccountLinks.map((link, i) => (
              <Link
                key={i} href={link.route}
                className={`${pathname === link.route && 'text-red-500'} text-md `}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>🛍 My Purchase</div>
        <div>🔔 Notification</div>
      </div>
    </>
  )
}

export default Sidebar