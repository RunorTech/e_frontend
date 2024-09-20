import React from 'react'
import AuthForm from '@/components/AuthForm'

const SignIn = () => {
  return (
    <section className='w-screen h-screen sm:flex sm:items-center '>
      <div className=" container mx-auto  ">
        <div className='flex justify-center  max-sm:flex-col max-sm:items-center '>

          <div className='bg-[#000223] min-h-full rounded-md  max-w-md   w-full py-4 px-4 max-sm:pt-20'>
            <h1 className='text-4xl font-semibold text-white'>Sign in to you Account</h1>
            <p className='text-md text-slate-400 pt-2'>Enter your account details</p>
          </div>

          <div className=' h-full w-full py-4 max-w-md px-4 shadow-md shadow-slate-400'>
            <div className=''>
              <AuthForm type="sign-in" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default SignIn
