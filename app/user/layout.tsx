import React from 'react'

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>User</h1>
      <div>
        {children}
      </div>
    </div>
  )
}

export default UserLayout