import React from 'react'

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>Account</h1>
      <div>
        {children}
      </div>
    </div>
  )
}

export default AccountLayout