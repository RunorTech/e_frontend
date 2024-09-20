'use client'
import React, { FormEvent } from 'react'

const AuthForm = ({ type }: { type: string }) => {
    const handleAuthFormSubmit = (e: FormEvent) => {

        e.preventDefault()
    }

    return (
        <form onSubmit={handleAuthFormSubmit}>
            <button type='submit'>
                {type === "sign-in" ? "SignIn" :
                    `${type === "sign-up" ? "SignUp" : null}`}
            </button>
        </form>
    )
}

export default AuthForm
