'use client'

import { signIn } from "next-auth/react"
import { FormEvent, useState } from "react"
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import Link from "next/link"


const Login = () => {
  // States to store form data.
  const [email, setEmail ] = useState('')
  const [password, setPassword ] = useState('')
  // login function.
  const handleSubmit = async(e:FormEvent) =>{
    e.preventDefault()
  } 

  return (
    <div className="flex flex-col align-center justify-center items-center">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-neutral-900 p-10 rounded-xl">
            <h1 className="text-4xl font-bold my-5">Sign In</h1>

            <input type="email"  onChange={(e) => setEmail(e.target.value)}  placeholder="email" className="h-12 bg-neutral-800 rounded-xl text-white text-xl px-5 shadow-md shadow-green-400/50"/>

            <input type="password" onChange={(e) => setPassword(e.target.value)}  placeholder="password" className="h-12 bg-neutral-800 rounded-xl text-white text-xl px-5 shadow-md shadow-green-400/50" />

            <button type="submit"  className="bg-green-400 text-black p-3 text-xl rounded-xl">Login</button>

            <p className="my-3">Don't have a account? <Link href={'/dashboard/register'} className="text-blue-600">register</Link></p>

            <div className="flex justify-evenly">
              <button onClick={() => signIn("google")} className="bg-white p-3 rounded-full"><FcGoogle size={35}/></button>
              <button onClick={() => signIn("google")} className="bg-white p-3 rounded-full"><FaGithub color="black" size={35}/></button>
            </div>
        </form>
    </div>
  )
}


export default Login
