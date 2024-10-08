'use client'
import React, { FormEvent, useEffect, useState } from 'react'
import { Input } from './ui/input'
import Link from 'next/link'
import axios from 'axios'
import { usePageContext } from '@/app/PageContext';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation'

export const FacebookSvg = ({ w, h }: Size) => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={w} height={h} viewBox="0 0 48 48">
                <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2aa4f4"></stop><stop offset="1" stopColor="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
            </svg>
        </>
    )
}

export const GoogleSvg = ({ w, h }: Size) => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={w} height={h} viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
        </>
    )
}

const AuthForm = ({ type }: { type: string }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });
    const { email, password, confirmPassword } = formData;
    const { APIURL } = usePageContext();
    const router = useRouter();
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleAuthFormSubmit = async (e: FormEvent) => {
        e.preventDefault()

        switch (type) {
            case "sign-in":
                try {
                    const response = await axios.post(`${APIURL}/sign-in`, { formData }, {
                        withCredentials: true,
                    });
                    console.log(response);
                    if (response.data.status === 'ok') {
                        toast(response.data.message)
                        router.push('/'); 
                    } else {
                        toast(response.data.message)
                    }
                } catch (error) {
                    console.log(error);
                }
                break;
            case "sign-up":
                try {
                    if (password === confirmPassword) {
                        const response = await axios.post(`${APIURL}/sign-up`, { formData }, {
                            withCredentials: true,
                        });
                        console.log(response);
                        if (response.data.status === 'ok') {
                            toast(response.data.message)
                            router.push('/sign-in'); 
                        } else {
                            toast(response.data.message)
                        }
                    } else {
                        toast("Password does'nt match");
                    }
                } catch (error) {
                    console.log(error);
                }
                break;
            case "forget-password":
                console.log("forget-password")
                break;
            default:
                break;
        }
    }

    return (

        <div className='container max-w-md flex flex-col gap-[30px] max-sm:gap-[20px]'>
            <form onSubmit={handleAuthFormSubmit}>
                <div className=''>
                    <div className='h-full flex flex-col gap-4 mb-9 '>

                        <Input value={email} label='Email' onChange={handleOnChange} required type="email" name="email" placeholder="Enter your email" />
                        <Input value={password} label='Password' onChange={handleOnChange} required type="password" name="password" placeholder="Enter your password" />
                        {type === "sign-up" ? <Input value={confirmPassword} label='Confirm Password' onChange={handleOnChange} required type="password" name="confirmPassword" placeholder="Confirm your password" />
                            : type === "forget-password" ? <Input value={confirmPassword} label='Confirm New Password' onChange={handleOnChange} required type="password" name="confirmPassword" placeholder="Confirm your new password" /> : null}
                        {/*  */}
                    </div>

                    {type === "sign-in" ?
                        <div className='text-lime-500 hover:underline underline-offset-4 mb-3 text-right'>
                            <Link href="/forget-password">Forget Password?</Link>
                        </div>
                        : null}

                    <button className='bg-lime-500 w-full text-white  px-4 py-2 rounded-md text-xl font-semibold ' type='submit'>
                        {type === "sign-in" ? "SignIn" :
                            `${type === "sign-up" ? "SignUp" : `${type === "forget-password" ? "Reset Password" : null}`}`}
                    </button>
                </div>
            </form>
            <div className=' h-40 flex flex-col justify-between'>

                <fieldset className='text-center border-t-2 border-slate-500 '>
                    <legend className='px-2 text-slate-500'>{type === "sign-in" ? "Or Login with" : `${type === "forget-password" ? "Or Login with" : "Or Sign Up with"}`}</legend>
                </fieldset>

                <div className='flex w-full justify-between  gap-4 '>
                    <button className='button-style-platforms '><span><GoogleSvg w={20} h={20} /></span><span className=''>Google</span></button>
                    <button className='button-style-platforms'><span><FacebookSvg w={20} h={20} /></span><span className=''>Facebook</span></button>
                </div>

                <div className=''>
                    {type === "sign-in" ? <p className='text-slate-500'>Don't have an account? <Link href="/sign-up"><span className='text-lime-500'>Register</span></Link></p> : <p className='text-slate-500'>Already have an account? <Link href="/sign-in"><span className='text-lime-500'>SignIn</span></Link></p>}
                </div>
            </div>
        </div>


    )
}

export default AuthForm
