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
                <Input />

                <button type='submit'>
                    {type === "sign-in" ? "SignIn" :
                        `${type === "sign-up" ? "SignUp" : null}`}
                </button>
            </div>

        </form>
    )
}

export default AuthForm
