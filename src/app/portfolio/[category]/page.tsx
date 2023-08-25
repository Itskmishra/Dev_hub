import Image from "next/image"
import IllImg1 from 'public/portfolioImages/illustrations/IllustrationImage2.jpeg'


// const getData = async(items:string) => {
//   const data = 
//   return data.json()
// }


const Category = ({params}:any) => {
  const list = [
    1,2,3,4
  ]
  return (
    <div className="">
      <h1 className="text-center text-2xl font-bold hover:text-green-400">
        {params.category}
      </h1>
      {list.map((item, index) => ( 
          <div className={`lg:flex ${index%2 === 0 ? "flex-row-reverse": "flex-row"} lg:justify-between gap-2 mt-6 mb-10`}>
            <div className="space-y-5 mb-5 text-center">
              <h1 className="text-2xl font-md">Test</h1>
              <p>Description</p>
              <button className="p-4 bg-green-400 text-gray-900 rounded-lg hover:bg-green-500">See more</button>
            </div>
            <div className="">
              <Image src={IllImg1} alt="Illustration" className="max-w-[500px] w-full rounded-lg"/>
            </div>
          </div>
      ))}
    </div>
  )
}
export default Category