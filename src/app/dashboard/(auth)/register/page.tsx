'use client'

import { signIn } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'

const Register = () => {

    const router = useRouter()

    // States to store from data.
    const [username, setUsername ] = useState('')
    const [email, setEmail ] = useState('')
    const [password, setPassword ] = useState('')

    // Handle function to call on form submit.
    const handleSubmit = async(e:FormEvent) => {
        e.preventDefault()
        try{
            const response = await fetch("/api/auth/register",{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,email,password
                })
            })
            if(response.status === 201) router.push('/dashboard/login?success=Account has been created successfully')
        }catch(err){
            console.log(err)
        }
    }

  return (
    <div className="flex flex-col align-center justify-center items-center max-w-xl mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-neutral-900 p-10 rounded-xl">
            <h1 className="text-4xl font-bold my-5">Sign up</h1>

            <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="username" className="h-12 bg-neutral-800 rounded-xl text-white text-xl px-5 shadow-md shadow-green-400/50"/>

            <input type="email"  onChange={(e) => setEmail(e.target.value)}  placeholder="email" className="h-12 bg-neutral-800 rounded-xl text-white text-xl px-5 shadow-md shadow-green-400/50"/>

            <input type="password" onChange={(e) => setPassword(e.target.value)}  placeholder="password" className="h-12 bg-neutral-800 rounded-xl text-white text-xl px-5 shadow-md shadow-green-400/50" />

            <button type="submit"  className="bg-green-400 text-black p-3 text-xl rounded-xl">Register</button>

            <p className="my-3">Already have an account? <Link href={'/dashboard/login'} className="text-blue-600">login</Link></p>

            <div className="flex justify-evenly">
              <button onClick={() => signIn("google")} className="bg-white p-3 rounded-full"><FcGoogle size={35}/></button>
              <button onClick={() => signIn("google")} className="bg-white p-3 rounded-full"><FaGithub color="black" size={35}/></button>
            </div>
        </form>
    </div>
  )
}


export default Register