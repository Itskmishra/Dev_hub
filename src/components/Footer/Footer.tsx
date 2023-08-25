import Image from "next/image"

const Footer = () => {
  return (
    <div className="flex justify-between align-center items-center h-[20px] font-bold text-sm mb-1">
          <p>
            <span className="text-white">©️</span> 2023 TheDevHub.
          </p>
          <p className="flex space-x-1">
            <Image src={'/socialImages/instagram.png'} className="cursor-pointer" width={25} height={20} alt="Instagram"/>
            <Image src={'/socialImages/twitter.png'} className="cursor-pointer" width={25} height={20} alt="Twitter"/>
            <Image src={'/socialImages/facebook.png'} className="cursor-pointer" width={25} height={20} alt="facebook"/>
          </p>
    </div>
  )
}

export default Footer