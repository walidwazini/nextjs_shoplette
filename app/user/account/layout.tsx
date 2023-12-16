import React from 'react'

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full h-full bg-[#2e2e3b] ' >
      {children}
    </div>
  )
}

export default AccountLayout