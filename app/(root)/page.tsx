
'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import { usePageContext } from "../PageContext";
import Hero from "@/components/Hero";



export default function Home() {
  const [getUserInfo, setGetUserInfo] = useState<any>();
  const [registeredUser, setRegisteredUser] = useState<boolean>(false);
  const [isLoggedIn, setisLoggedIn] = useState<boolean>(false);
  const {APIURL} =  usePageContext();
  const axiosInstance = axios.create({
    baseURL: APIURL,
    withCredentials: true, // Always send cookies with requests
  });

  useEffect(() => {
    return () => {
      initializeServer();// Cleanup if needed
    };
  }, [])
  
  const initializeServer = async () => {
   try {
    const response = await axiosInstance.get('');
    setGetUserInfo(response.data);
   } catch (error) {
    console.log(error)
   }
  
  }

  useEffect(() => {
    checkreg();
  },[getUserInfo])

  const checkreg = () => {
    if(getUserInfo?.user === "Guest"){
      setRegisteredUser(false);
    }else{
      setRegisteredUser(true);
    
    }
  }

  console.log(getUserInfo)
  return (
    <>  
    <Hero/>
    </>
  );
}