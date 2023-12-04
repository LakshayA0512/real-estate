//eslint-disable-next-line no-unused-vars
import React from 'react'
import { useSelector } from 'react-redux'
const Profile = () => {
  const {currentUser}  = useSelector((store) => store.user)
  return (
    
    <div className='p-3 max-w-lg mx-auto'>            
      <h1 className='text-3xl font-semibold text-center my-7 '>Profile</h1>        
      <form className='flex flex-col gap-4'>
        <img 
          src={currentUser.avatar} alt='Profile' 
          className='rounded-full h-24 w-24 object-cover cursor-pointer self-center'
        />
        <input
          type='text'
          id='username'
          placeholder='Username'
          className='border p-3 rounded-lg '
        />
        <input
          type='email'
          id='email'
          placeholder='Email'
          className='border p-3 rounded-lg '
        />
        <input
          type='text'
          id='password'
          placeholder='password'
          className='border p-3 rounded-lg '
        />
        <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'>Update</button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer '> Delete Account </span>
        <span className='text-red-700 cursor-pointer '> Sign Out </span>
      </div>
    </div>
  )
}

export default Profile