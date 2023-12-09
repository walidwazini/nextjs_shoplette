import Link from 'next/link'
import React from 'react'
import { getServerSession } from 'next-auth'
import { FaBell, FaShoppingCart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { RiLoginCircleFill } from "react-icons/ri";

import SignoutBtn from './SignoutBtn'

const Navbar = async () => {
  const session = await getServerSession()

  console.log('Session in Navbar')
  console.log(session)

  return (
    <div className='w-full h-36 bg-red-800 flex flex-col justify-center items-center gap-1 ' >
      <div className='basis-1/4 px-8 w-full flex justify-between items-center' >
        <div>Other Links</div>
        {/* TODO will be turn into dropdown link */}
        <div className='w-64 gap-2 flex justify-between items-center text-sm ' >
          {!session?.user && (
            <Link
              className='hover:underline flex items-center gap-1 '
              href={'/sign-in'} >
              <RiLoginCircleFill size={15} />
              <p>Login</p>
            </Link>
          )}
          {session?.user && (
            <>
              <div className='flex items-center gap-0.5 hover:cursor-pointer ' >
                <FaBell size={15} />
                <p className='' >Notifications</p>
              </div>
              <div className='flex justify-between items-center gap-0.5 hover:cursor-pointer' >
                <IoPerson size={15} />
                <p>Profile</p>
              </div>
              <SignoutBtn />
            </>
          )}
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