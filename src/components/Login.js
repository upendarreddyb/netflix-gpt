import React, { useState } from 'react'
import Header from './Header';
const Login = () => {

  const [isSigInForm, setisSiginForm] = useState("Sign In");

  const hadleSignInFrom = () => {
    setisSiginForm(!isSigInForm)
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img alt="" src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_small.jpg" />
      </div>
      <form className="absolute rounded-lg bg-black text-white p-12 w-3/12 my-36 mx-auto right-0 left-0 bg-opacity-60">

        <h1 className="font-bold text-3xl py-4">{isSigInForm?"Sign In":"Sign Up"}</h1>
        {
          !isSigInForm && <input type="text" placeholder='Full Name' className="p-4 my-4 w-full  bg-gray-500" />
        }
       <input type="text" placeholder='Email Address' className="p-4 my-4 w-full  bg-gray-500" />
        <input type="password" placeholder='password' className="p-4 my-4 w-full  bg-gray-500" />
        <button className="p-4 my-6 bg-red-700 rounded-lg w-full">{isSigInForm?"Sign In":"Sign Up"}</button>


        <p className='py-4 cursor-pointer' onClick={() => hadleSignInFrom()}> {isSigInForm?"New to Netflix? Sign Up Now":"Already Registered Sign In Now"} </p>
      </form>
    </div>
  )
}

export default Login;
