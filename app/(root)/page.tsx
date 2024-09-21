
'use client'
import axios from "axios";
import { useEffect, useState } from "react";



export default function Home() {
  const [getUserInfo, setGetUserInfo] = useState<any>();
  const [registeredUser, setRegisteredUser] = useState<boolean>(false);
  const [isLoggedIn, setisLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    initializeServer();
  }, [])
  
  const initializeServer = async () => {
   try {
    const response = await axios.get('http://localhost:8000');
    setGetUserInfo(response.data);
   } catch (error) {
    console.log(error)
   }
  
  }

  useEffect(() => {
    checkreg();
  },[getUserInfo])

  const checkreg = () => {
    if(getUserInfo == "guest"){
      setRegisteredUser(false);
    }else{
      setRegisteredUser(true);
    }
  }

  return (
    <>  <h1 className="">Welcome to home page {getUserInfo}</h1>
      {isLoggedIn ? (<a href="/sign-in">SignOut</a>) : registeredUser ? <a href="/sign-in">signIn</a> : <a href="/sign-up">Register</a>}

    </>
  );
}
