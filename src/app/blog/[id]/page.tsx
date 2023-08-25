import Image from 'next/image'
import IllImg1 from 'public/portfolioImages/illustrations/IllustrationImage1.jpg'


// Server side fetching.
const getData = async(id:number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{cache:'no-store'})
  if(!res.ok) {throw new Error("Failed to fetch data.")}
  return res.json()
}

interface BlogInterface {
  title:string,
  body:string,
  id:string,
  userId:string
}

const post = async({params}:any) => {
  const data = await getData(params.id)

  return (
    <div>
      <div className='m-5'>
        <div className="md:flex gap-5">
          <Image src={IllImg1} className='max-w-full w-[500px]' alt='blog Image'/>
          <div>
            <h1 className='text-3xl font-bold'>{data.title}</h1>
            <p className='mt-1 mb-4'>
              user ID: {data.userId}
            </p>
          </div>
        </div>
        <div>   
          <div className='border-[1.5px] border-neutral-900 mt-2'>
          </div>
          <p className='mt-4 text-lg'>{data.body}</p>
        </div>
      </div>
    </div>
  )
}
export default post