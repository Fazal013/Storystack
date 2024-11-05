import React, { useEffect,useState } from 'react'
// import list  from '../../public/list.json'
import axios from  'axios'

import Card from  './Card'
import {Link} from  'react-router-dom'




function Whattoread() {
  const [review,setReview]=useState([]);
  useEffect(()=>{
      const getReview=async()=>{
        try{
         const res= await axios.get("http://localhost:4001/review");
         console.log(res.data)
         setReview(res.data)
        }catch(error){
            console.log(error)
        }
      }
      getReview();
  },[])
 
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
     <div className='mt-28 items-center justify-cente text-center'>
      <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>HERE! :)</span></h1>
      <p className='mt-10'>
      Discover your next great read! You’ll find handpicked recommendations across genres, from timeless classics to trending new releases. Whether you’re a fan of mystery, romance, sci-fi, or nonfiction, there’s something here for everyone. Explore reviews, find inspiration, and dive into your next book adventure!
      </p>
      <Link to="/">
      <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-5'>GO Back</button>
      </Link>
     </div>
     <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
      {
        review.map((item)=>(
          <Card key={item.id} item={item} />
        ))
      }
     </div>
    </div>
    </>
  )
}

export default Whattoread
