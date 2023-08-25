'use client'

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Loading from "./loading"
import Image from "next/image"

const AUTH = () => {

    const router = useRouter()
    const session = useSession()

    if(session.status === "loading") return <Loading/>
    if(session.status === "unauthenticated") router.push("/dashboard/login")

    if(session.status === "authenticated") {
      return(
        <div className="flex justify-center bg-neutral-800 py-10 rounded w-full max-w-xl mx-auto">
          <div className="flex  gap-8">
            <p>
              <Image src={session?.data?.user?.image as string} alt="UserImage" width={60} height={60} className="rounded-full" />
            </p>
            <div>
              <p>
                Username: {session?.data?.user?.name}
              </p>
              <p>
                Email: {session?.data?.user?.email}
              </p>
            </div>
          </div>
        </div>
      )
    }
}
export default AUTH