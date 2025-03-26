"use client"
import React, { useState } from 'react'
import { api } from '@/trpc/react'
import toast from "react-hot-toast"


function page() {
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")


   


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
    };
  return (
    <div className='flex justify-center items-center flex-col w-full gap-5 p-5'>
        <h1 className='text-2xl text-sky-500'>Send email  😀😃😄😁😆 2</h1>
        <form 
        onSubmit={handleSubmit}
        className='flex justify-center items-center flex-col gap-10 shadow-xl rounded-xl  w-3/4 p-5 md:w-1/2 ' >
            {/* <input 
                type="email"  
                className='text-center p-2 shadow-2xl rounded-2xl w-full ' 
                placeholder='Enter the email address ' 
                onChange={(e)=>setTo(e.target.value)} /> */}
            <input 
                type="text"  
                className='text-center p-2 shadow-2xl rounded-2xl w-full ' 
                placeholder='Enter the subject email  ' 
                onChange={(e)=>setSubject(e.target.value)} />
            <textarea  
                className='text-center p-2 shadow-2xl rounded-2xl w-full  ' 
                placeholder='Enter the message content ' 
                onChange={(e)=>setMessage(e.target.value)}></textarea>
                <button  className='text-center p-2 shadow-2xl rounded-2xl w-full bg-black text-white hover:bg-gray-500  cursor-pointer transition-all '  type="submit">Send email</button>
        </form>
    </div>
  ) 
}

export default page