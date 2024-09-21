
'use client'
import { useState } from "react";

export default function Home() {
  const [registeredUser, setRegisteredUser] = useState<boolean>(true);
  const [isLoggedIn, setisLoggedIn] = useState<boolean>(false);

  return (
  <>  <h1 className="">my home page</h1>
  { isLoggedIn ? (<a href="/sign-in">SignOut</a>) : registeredUser ? <a href="/sign-in">signIn</a>  : <a href="/sign-up">Register</a> }
 
    </>
  );
}
