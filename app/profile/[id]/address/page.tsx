"use client"

import { addAddress } from '@/server/actions/user.action'
import React from 'react'

const page = () => {

  const addHandler = async () => {
    const res = await addAddress()

    console.log('here')
    console.log(res)
  }
  return (
    <div>
      <form onSubmit={addHandler} >
        <button type='submit' className='bg-green-500 p-2' >Submit</button>
      </form>
    </div>
  )
}

export default page