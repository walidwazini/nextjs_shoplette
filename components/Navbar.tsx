import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-20 bg-red-800 flex justify-center items-center gap-4 ' >
      <div className='hover:underline text-lg ' >
        <Link href={'/'} >Home</Link>
      </div>
      <div className='hover:underline text-lg ' >
        <Link href={'/login'} >Login</Link>
      </div>
    </div>
  )
}

export default Navbar