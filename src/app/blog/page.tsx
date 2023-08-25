import IllImg1 from 'public/portfolioImages/illustrations/IllustrationImage2.jpeg'
import Image from "next/image"
import Link from 'next/link'


// Fetching data at server.
const getData = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts',{cache:'no-store'})
  if(!res.ok) {throw new Error("Failed to fetch data.")}
  return res.json()
}
// Interface of fetched data.
interface BlogInterface {
  title:string,
  body:string,
  id:number,
  userId:string
}


const Blog = async() => {
  const data = await getData()

  return (
    <div className="m-5">
      <h1 className="text-5xl font-bold">
        Blogs
      </h1>
      {/* Mapping */}
        {data.map((blog:BlogInterface) => (
          <Link key={blog.id} className='hover:opacity-60' href={`/blog/${blog.id}`}>
            <div className="lg:flex justify-evenly align-center gap-5 mt-6 mb-10 shadow-lg hover:shadow-green-400 rounded-lg">
              {/* Blog Image */}
              <Image  src={IllImg1} alt="Illustration" className="md:w-[500px] w-full md:rounded-lg"/>
              {/* Blog content */}
              <div className="space-y-5">
                {/* Title */}
                <h1 className="text-2xl font-md">
                  {blog.title}
                </h1>
                {/* Content */}
                <p>{blog.body}</p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}
export default Blog