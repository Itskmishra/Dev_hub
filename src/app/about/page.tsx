import Image from "next/image"
import Link from "next/link"
import AboutImage from 'public/Aboutme.png'

const About = () => {
  return (
    <div className="m-5">
      <Image src={AboutImage} className="object-cover rounded-xl w-full h-[400px]" alt="About Image"/>
      <div>
      </div>
      <div className="lg:flex gap-5">
        <div className="mt-5">
            <h1 className="font-bold text-xl">
              Who are we ?
            </h1>
            <p className="font-light text-lg">
              A group of enthusafalsk peropsdfajlskdf alwke flqawehfaslkhjf wqalkejhf aweklsfjhpow qakfghewaf
              dfakhlsfhl;asdkfhalskdfhqwoe fl;awesfkljasdhf asdklhf lakwefhqwioesadklfhjokqwjehf
              dfkjasfhplqawejfas
              fasdkfjlh awelfhjasdf asodfyh aopwefha;slkdfhweof weof hweofhqaowpef
            </p>
            <button className="p-2 bg-green-400  text-gray-900 rounded-lg hover:bg-green-500 mt-10">
              <Link href={'/contact'}>
                Contact us
              </Link>
            </button>
        </div>
        <div className="mt-5">
            <h1 className="font-bold text-xl">
              What we do ?
            </h1>
            <p className="font-light text-lg">
              A group of enthusafalsk peropsdfajlskdf alwke flqawehfaslkhjf wqalkejhf aweklsfjhpow qakfghewaf
              dfakhlsfhl;asdkfhalskdfhqwoe fl;awesfkljasdhf asdklhf lakwefhqwioesadklfhjokqwjehf
              dfkjasfhplqawejfas
              fasdkfjlh awelfhjasdf asodfyh aopwefha;slkdfhweof weof hweofhqaowpef
            </p>
            <button className="p-2 bg-green-400  text-gray-900 rounded-lg hover:bg-green-500 mt-10">
            <Link href={'/portfolio'}>
              Check out our work.
            </Link>
            </button>
        </div>
      </div>
      
    </div>
  )
}
export default About