import Image from "next/image"
import ContactImg from 'public/contact.png'

const Contact = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-extrabold text-green-400 mb-5 mt-5">
        Let's keep in touch.
      </h1>
    <div className="lg:flex align-center items-center justify-center">
      <div className="hidden lg:block">
        <Image src={ContactImg} alt="Contact Image" className="shadow-xl shadow-green-500/50 rounded-2xl"/>
      </div>
      <div className="m-7">
          <form action="" className="flex flex-col gap-4">
            <input type="text" className="h-12 bg-neutral-800 rounded-xl text-white text-xl px-5 shadow-md shadow-green-400/50" placeholder="Username"/>
            <input type="text" className="h-12 bg-neutral-800 rounded-xl text-white text-xl px-5 shadow-md shadow-green-400/50" placeholder="Email" />
            <textarea className="bg-neutral-800 rounded-xl text-white text-xl p-5 shadow-md shadow-green-400/50" name="" id="" cols={30} rows={5} placeholder="Tell use something about you.">
            </textarea>
            <button className="bg-green-400 text-black p-3 text-xl rounded-xl">Submit</button>
          </form>
        </div>
    </div>
    </div>
  )
}
export default Contact