import React from 'react'

function AuthLayouts({ children }) {
  return (
    <>
      <header className='flex justify-center items-center py-3 h-20 shadow-md bg-white'>
        <div className='flex-row flex justify-center items-center'>
          <img
            src='/assets/logo/video.png'
            alt='logo'
            width={60}
          />
          <h2 className='ml-5'>PV Chat</h2>
        </div>

      </header>

      {children}
    </>
  )
}

export default AuthLayouts
