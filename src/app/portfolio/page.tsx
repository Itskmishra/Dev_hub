import Link from "next/link"
import illustrationImg from 'public/portfolioImages/illustration.png'
import appImg from 'public/portfolioImages/applications.png'
import websitesImg from 'public/portfolioImages/websites.png'
import Image from "next/image"

const Portfolio = () => {
  return (
    <div className="">
      <h1 className="text-2xl font-extrabold text-center">
        Choose a gallery
      </h1>
      <div className="flex lg:flex-row flex-col align-center items-center gap-4 mt-4 bg-cover text-black">
        <Link href={'/portfolio/Illustrations'} className="relative border-4 rounded-md w-[300px] h-[300px] hover:text-green-500">
          <Image src={illustrationImg} alt="image" className="w-full h-full"/>
          <span className="absolute bottom-2 right-2 text-xl font-bold">Illustrations</span>
        </Link>
        <Link href={'/portfolio/Websites'} className="relative border-4 rounded-md w-[300px] h-[300px] hover:text-green-500">
          <Image src={websitesImg} alt="image" className="w-full h-full"/>
          <span className="absolute bottom-2 right-2 text-xl font-bold ">Websites</span>
        </Link>
        <Link href={'/portfolio/Applications'} className="relative border-4 rounded-md w-[300px] h-[300px] hover:text-green-500">
          <Image src={appImg} alt="image" className="w-full h-full"/>
          <span className="absolute bottom-2 right-2 text-xl font-bold ">Applications</span>
        </Link>
      </div>
    </div>
  )
}
export default Portfolio