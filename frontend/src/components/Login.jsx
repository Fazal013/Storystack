import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

function Login() {
  

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);


  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Login</h3>
    <div className='mt-4 space-y-2'>
        <span>Email:</span>

            
        <br></br>
        <input type='email' placeholder='Enter  your email' className='mt-2 w-80 px-3 py-1 border rounded-md outline-none' {...register("email", { required: true })}/>
        <br></br>
        {errors.email && <span className='text-sm text-red-500 '>This field is required</span>}
    </div>
    <div className='mt-4 space-y-2'>
        <span>Password:</span>

             
        <br></br>
        <input type='text' placeholder='Enter  your Password' className='mt-2 w-80 px-3 border rounded-md outline-none' {...register("Password", { required: true })}/>
        <br></br>
        {errors.Password && <span className='text-sm text-red-500 '>This field is required</span>}
    </div>
    <div>
       <button className=' mt-5 bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-800'> Login</button>
       <p className='flex mt-4'>Not Registered? &nbsp; <Link to="signup" className='underline text-blue-500 cursor-pointer'>sign-up</Link>
       
       </p>
    </div>
    <div className="modal-action ">
      <form onSubmit={handleSubmit(onSubmit)} method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn ">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  )
}

export default Login
