import { getUserDetails } from '@/server/actions/user.action'
import React from 'react'

interface ProfilePageProps {
  params: { id: string }
}

const ProfilePage = async ({ params }: ProfilePageProps) => {

  const result = await getUserDetails(params.id)

  console.log(result)
  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  )
}

export default ProfilePage