'use client'
import { usePageContext } from '@/app/PageContext';
import axios from 'axios';
import { useRouter } from 'next/navigation';

import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';




const SecretPage = () => {
    const router = useRouter();
    const { APIURL, } = usePageContext();
    const [getUserInfo, setGetUserInfo] = useState<any>();
    const [loadingSecret, setLoadingSecret] = useState<boolean>(true);
    const axiosInstance = axios.create({
        baseURL: APIURL,
        withCredentials: true, // Always send cookies with requests
    });
   
    useEffect(() => {
       
        return () => {
            initializeServer(); // Cleanup if needed
        };
    },[])

    const initializeServer = async () => {
        try {
            const response = await axiosInstance.get(`/secret-test`);
            if(response.data.access === "Denied"){
                toast("Please SignIn"); 
                router.push('/sign-in'); 
            } else if(response.data.access === "Granted"){
                setLoadingSecret(false);
                setGetUserInfo(response.data);
            }
        } catch (error) {
            console.log(error)
        }

    }
    console.log(getUserInfo)

    const handleLogout = async () => {
        try {
            const response = await axiosInstance.post(`/logout`);
            console.log(response);
            router.push('/sign-in'); // Redirect to login page after logout
        } catch (error) {
            console.error('Error logging out:', error);
        }
    }
    return (
        <>
        {loadingSecret? null :  <div>
            secret
            <div><button onClick={handleLogout}>logout</button></div>
        </div>}
        </>
    )
}

export default SecretPage;
