import Image from 'next/image'
import Link from 'next/link'
import Hero from 'public/Hero.png'


const Home = () => {
  return (
    <div className="flex items-center gap-[100px]">
        <div className="m-5">
          <h1 className='bg-gradient-to-r from-green-400 mb-5 text-5xl font-extrabold rounded-md p-3'>
            Hello there! Welcome to The Dev Hub.
          </h1>
          <p className='text-xl mb-7'>
            This is a beautiful place to colaborate and connect with fellow developers.
          </p>
          <button className='p-5 bg-green-400 text-xl text-gray-900 rounded-lg hover:bg-green-500'>
            <Link href={'/portfolio'}>
            See our Works
            </Link>
          </button>
        </div>  
        <div className="hidden lg:block">
            <Image src={Hero} className=' h-auto w-[1000px]' alt='The Dev Hub'/>
        </div>
    </div>
  )
}


export default Home