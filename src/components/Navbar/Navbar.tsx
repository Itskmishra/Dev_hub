'use client'

import { signOut, useSession } from "next-auth/react"
import Link from "next/link"



const Navbar = () => {

    const session = useSession()

    const navLinks = [
        {
            id:1,
            title:"Home",
            url:"/"
        },
        {
            id:6,
            title:"Portfolio",
            url:"/portfolio"
        },
        {
            id:2,
            title:"Contact",
            url:"/contact"
        },
        {
            id:3,
            title:"About us",
            url:"/about"
        },
        {
            id:4,
            title:"Blog",
            url:"/blog"
        },
        {
            id:5,
            title:"Dashboard",
            url:"/dashboard"
        },
    ]

  return (
    <nav className="">
        <div className="flex flex-wrap items-center justify-between align-center mx-auto p-4">
            <h1 className="font-extrabold text-2xl hover:text-green-600">
                <Link href={'/'}>
                    The Devhub
                </Link>
            </h1>
            <div className="">
                <ul className="flex items-center align-center space-x-4">
                    {navLinks.map((navLink) => (
                        <li key={navLink.id} className="hover:text-green-500">
                            <Link href={navLink.url}>{navLink.title}</Link>
                        </li>
                    ))}
                    {session.status === 'authenticated' ? (
                        <button onClick={() => signOut()} className="font-bold bg-green-500 p-2 rounded-xl">
                            Logout
                        </button>
                    ):(
                        <button className="font-bold bg-green-500 p-2 rounded-xl">
                            <Link href={'/dashboard/login'}>
                                Login
                            </Link>
                        </button>
                    )}
                </ul>
            </div>
        </div>
    </nav>
  )
}
export default Navbar