import React from 'react'
import { Link } from 'react-router-dom'

export function Card({name,img,title,price,slug}) {
  return (
    <div className="w-[250px] rounded-md border m-4">
      <img
        src={img}
        alt="T shirt"
        className="h-[250px] w-full rounded-md object-cover"
      />
      <div className="p-4">
      <div className=''>
      <h1 className="text-lg font-semibold">{name}</h1>
      <strong>₹{price}</strong>
      </div>
        <p className="mt-2 text-sm text-gray-600">
         {title}
        </p>
        <Link to={`product/${slug}`}>
        <button
          type="button"
          className=" mt-3 rounded-md bg-black px-2.5 py-2 text-[12px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Buy
        </button>
        </Link>
      </div>
    </div>
  )
}
export default Card
