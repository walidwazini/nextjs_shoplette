import Link from 'next/link'
import React from 'react'
import { getServerSession } from 'next-auth'

import SignoutBtn from './SignoutBtn'

const Navbar = async () => {
  const session = await getServerSession()

  // console.log('Session in Navbar')
  // console.log(session?.user)

  return (
    <div className='w-full h-20 bg-red-800 flex justify-center items-center gap-1 ' >
      <div className='basis-4/5 flex justify-center items-center gap-3 text-sm' >
        <div className='hover:underline text-lg ' >
          <Link href={'/'} >Home</Link>
        </div>
        {session?.user
          ? (<div className='hover:underline text-lg ' >
            <Link href={'/profile'} >Profile</Link>
          </div>)
          : (<>
            <div className='hover:underline text-lg ' >
              <Link href={'/signup'} >Signup</Link>
            </div>
            <div className='hover:underline text-lg ' >
              <Link href={'/sign-in'} >Login</Link>
            </div>
          </>)}
      </div>
      <div className='basis-1/5' >
        {session?.user && (
          <SignoutBtn />
        )}
      </div>
    </div>
  )
}

export default Navbar