'use client'

import { SessionProvider } from "next-auth/react"

interface AuthInterface {
    children: React.ReactNode
}

const AuthProvider = ({children}:AuthInterface) => {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}
export default AuthProvider