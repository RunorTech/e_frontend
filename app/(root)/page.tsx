
'use client'
import axios from "axios";
import { useEffect, useState } from "react";



export default function Home() {

  useEffect(() => {
    initializeServer();
  }, [])
  
  const initializeServer = async () => {
    const response = axios.get('http://localhost:8000');
    console.log(response);
  }
  const [registeredUser, setRegisteredUser] = useState<boolean>(true);
  const [isLoggedIn, setisLoggedIn] = useState<boolean>(false);

  return (
    <>  <h1 className="">my home page</h1>
      {isLoggedIn ? (<a href="/sign-in">SignOut</a>) : registeredUser ? <a href="/sign-in">signIn</a> : <a href="/sign-up">Register</a>}

    </>
  );
}
