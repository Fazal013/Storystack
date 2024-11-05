import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'


function Signup() {
  return (
    <>
    <div className='flex h-screen items-center justify-center '>
    <div  className="w-[400px] border-[2px] shadow-md p-5 rounded-md">
  <div className="">
    <h3 className="font-bold text-lg">Login</h3>
    <div className='mt-4 space-y-2'>
        <span>Name:</span>

            
        <br></br> 
        <input type='text' placeholder='Enter  your full name' className='mt-2 w-80 px-3 py-1 border rounded-md outline-none' />

    </div>
    <div className='mt-4 space-y-2'>
        <span>Email:</span>

            
        <br></br>
        <input type='email' placeholder='Enter  your email' className='mt-2 w-80 px-3 py-1 border rounded-md outline-none' />

    </div>
    <div className='mt-4 space-y-2'>
        <span>Password:</span>

            
        <br></br>
        <input type='text' placeholder='Enter  your Password' className='mt-2 w-80 px-3 border rounded-md outline-none' />

    </div>
    <div>
       <button className=' mt-5 bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-800'> Signup</button>
       <p className='flex mt-4'>Already a member? &nbsp; <button  className='underline text-blue-500 cursor-pointer' onClick={()=>
        document.getElementById("my_modal_5").showModal()
       }>login</button>
       <Login/>
       </p>
    </div>
    <div className="modal-action ">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <Link to="/" className="btn ">Close</Link>
      </form>
    </div>
    
  </div>
</div>
    </div>
    </>
  )
}

export default Signup
