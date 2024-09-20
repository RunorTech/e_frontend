import React from 'react'
import AuthForm from '@/components/AuthForm'

const SignIn = () => {
  return (
    <div>
     <div className='bg-[#000111] py-4 px-2 pt-20'>
      <h1 className='text-4xl font-semibold'>Sign in to you Account</h1>
      <p className='text-lg text-slate-400 pt-2'>Input your account details</p>
     </div>
      <div className='bg-slate-100 h-[calc(100vh-212px)]'>
      <AuthForm type="sign-in"/>
      </div>
    </div>
  )
}

export default SignIn
