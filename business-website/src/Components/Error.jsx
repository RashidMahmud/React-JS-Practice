import React from 'react'
import { useNavigate } from 'react-router-dom'



function Error() {
  let Navigate = useNavigate()
  const handleClick = () => {
  Navigate("/")
  }
  return (
    <div>
        <h1 className='mt-30 text-center'>This Page Is Not Exist, Please Return Home</h1>
        <div className='w-full'>
            <button className='btn bg-indigo-500 p-2 rounded-md mt-35 text-white mx-auto block cursor-pointer' onClick={handleClick}>Back Home</button>
        </div>
    </div>
  )
}

export default Error;