import Link from 'next/link'
import React from 'react'
import { getServerSession } from 'next-auth'
import { FaBell, FaShoppingCart } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";

import SignoutBtn from './SignoutBtn'

const Navbar = async () => {
  const session = await getServerSession()

  // console.log('Session in Navbar')
  // console.log(session?.user)

  return (
    <div className='w-full h-36 bg-red-800 flex flex-col justify-center items-center gap-1 ' >
      <div className='basis-1/4 bg-blue-600 w-full flex justify-between items-center' >
        <div>Other Links</div>
        {/* TODO will be turn into dropdown link */}
        <div  >
          <div className='flex' >
            <FaBell />
            <p className='text-xs' >Notification</p>
          </div>
        </div>
      </div>
      <div className='basis-3/4 w-full h-full flex justify-center items-center gap-3 text-sm' >
        <div className="basis-1/6  h-full flex items-center justify-center ">
          <Link href={'/home'} className='text-4xl italic font-bold' >
            Shoplette
          </Link>
        </div>
        <div className="basis-1/2  h-full flex flex-col">
          <input
            className='w-full mt-4 p-4 bg-slate-700 ring-0 outline-0 '
            placeholder='Search anything here..'
          />
          <div className='flex mt-2 justify-start items-center gap-3 px-2 text-md' >
            <span>tag</span>
            <span>tag</span>
          </div>
        </div>
        <div className="basis-1/6 flex items-center justify-center ">
          <FaShoppingCart className="h-12 w-12 " />
          {/* <MdShoppingCart /> */}
        </div>
      </div>
    </div>
  )
}
export default Navbar

// {
//   session?.user
//   ? (<div className='hover:underline text-lg ' >
//     <Link href={'/profile'} >Profile</Link>
//   </div>)
//   : (<>
//     <div className='hover:underline text-lg ' >
//       <Link href={'/signup'} >Signup</Link>
//     </div>
//     <div className='hover:underline text-lg ' >
//       <Link href={'/sign-in'} >Login</Link>
//     </div>
//     {session?.user && (
//       <SignoutBtn />
//     )}
//   </>)
// }