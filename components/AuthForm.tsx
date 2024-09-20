'use client'
import React, { FormEvent } from 'react'
import { Input } from './ui/input'

const AuthForm = ({ type }: { type: string }) => {
    const handleAuthFormSubmit = (e: FormEvent) => {

        e.preventDefault()
    }

    return (
        <form onSubmit={handleAuthFormSubmit}>
            <div className='container max-w-md '>
                {/* <fieldset className='border border-input'>
                <legend className=''>email</legend>
                
                </fieldset> */}
                <Input type="email" name="Email" placeholder="Enter your email" />
              
                

                <button className='bg-lime-500  px-4 py-2 mt-4 rounded-md text-xl font-semibold ' type='submit'>
                    {type === "sign-in" ? "SignIn" :
                        `${type === "sign-up" ? "SignUp" : null}`}
                </button>
            </div>

        </form>
    )
}

export default AuthForm
