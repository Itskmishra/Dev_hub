import { ReactNode } from "react"

interface ILayout {
    children:ReactNode
}

const Layout = ({children}:ILayout) => {
  return (
    <div className="">
        <h1 className="text-8xl font-black text-green-400 text-center">Our Works</h1>
        {children}
    </div>
  )
}
export default Layout