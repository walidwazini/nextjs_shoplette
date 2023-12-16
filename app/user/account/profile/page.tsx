import React from 'react'

import { authOptions } from '@/utils/auth'
import { getServerSession } from 'next-auth'

const ProfileTab = async () => {
  const { user: { username, name, email, image, } } = await getServerSession(authOptions)

  return (
    <div className='flex flex-col p-6' >
      <div>
        <p className='font-semibold text-lg ' >My Profile</p>
        <p className='font-light text-sm mt-2 ' >Manage and protect your account.</p>
      </div>
      <hr className="my-8 h-0.5 border-t-0 bg-slate-200 opacity-100 dark:opacity-50" />
      <>
        <form className='flex ' >
          <div className='basis-3/5  p-2 flex flex-col items-center gap-4' >
            <div className='mt-4 w-[500px]  flex items-center gap-4 ' >
              <div className='basis-1/4 flex justify-end' >Username</div>
              <div>username1829</div>
            </div>
            <div className='w-[500px]  flex items-center gap-4 ' >
              <div className='basis-1/4 flex justify-end' >Name</div>
              <input
                // placeholder={name}
                value={name}
                className='bg-transparent text-white text-sm p-1.5 border border-slate-300'
              />
            </div>
            <div className='w-[500px] flex items-center gap-4 ' >
              <div className='basis-1/4 flex justify-end' >Email</div>
              <div>
                <span>{email}</span>
                <span className='ml-3' >
                  <button className='underline text-blue-500 hover:text-blue-700 text-sm bg-transparent' >
                    Change
                  </button>
                </span>
              </div>
            </div>
            <button className=' hover:bg-red-500 bg-red-600 px-6  py-2 rounded-lg' >Save</button>
          </div>
          <div className='basis-2/5  flex flex-col items-center  gap-4 ' >
            <img className='rounded-full h-28 w-28 my-6 ' src={image} />
            <button
              className=' bg-transparent border border-slate-300 text-slate-300 py-2 px-6 '
            >
              Select Image
            </button>
          </div>
        </form>
      </>
    </div>
  )
}

export default ProfileTab