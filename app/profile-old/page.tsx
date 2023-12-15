import React from 'react'
import { getServerSession } from 'next-auth'
import Link from 'next/link'

import { authOptions } from '@/utils/auth'
import { getUserDetails } from '@/server/actions/user.action'

interface ProfilePageProps {
  params: { id: string }
}

const ProfilePage = async ({ params }: ProfilePageProps) => {

  const session = await getServerSession(authOptions)

  const user = await getUserDetails(session.user._id)

  console.log(user)

  return (
    <div className='flex justify-around items-center ' >
      <div className='flex flex-col justify-center items-center gap-2' >
        <h1>{params.id}</h1>
        <img src={user?.image} className='rounded-full h-20 w-20 ' />
        <div>
          {user?.name}
        </div>
      </div>
      <Link href={`/profile/address`} className='p-2 bg-amber-600 rounded-sm' >Add Address</Link>
    </div>
  )
}

export default ProfilePage