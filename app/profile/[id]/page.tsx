import { getUserDetails } from '@/server/actions/user.action'
import Link from 'next/link'
import React from 'react'

interface ProfilePageProps {
  params: { id: string }
}

const ProfilePage = async ({ params }: ProfilePageProps) => {

  const user = await getUserDetails(params.id)

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
      <Link href={`/profile/${params.id}/address`} className='p-2 bg-amber-600 rounded-sm' >Add Address</Link>
    </div>
  )
}

export default ProfilePage