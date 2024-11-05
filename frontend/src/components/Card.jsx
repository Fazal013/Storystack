import React from 'react'


function Card({item}) {
  return (
    <>
    <div className='mb-5 hover:scale-105 transition-all duration-500 cursor-pointer'>
    <div className="card bg-base-100 w-96 shadow-xl ">
  <figure >
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {item.Title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{item.description}</p>
    <div className="card-actions justify-between">
      <div className=" p-4 badge badge-outline hover:bg-emerald-900 hover:text-white duration-300 cursor-pointer">Rating</div>
      <div className="p-4 badge badge-outline hover:bg-emerald-900 hover:text-white duration-300 cursor-pointer">Reviews</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Card
