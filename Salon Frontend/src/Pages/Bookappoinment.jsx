import React from 'react'

const Bookappoinment = () => {
  return (
    <div className=' text-center h-70 w-70  py-10 m-40 mx-140  border-2 rounded-2xl'>
       
        <form className='' >
            <label htmlFor="bookname">Name : </label>
            <input type="text"  className='border-2 rounded-xl text-center ' placeholder='Name' id='bookname' />
            <br /><br />
            <label htmlFor="booklastname">Last : </label>
            <input type="text" className='border-2 rounded-xl  text-center' placeholder='Last' id='booklastname' /><br /><br />
            
            <label htmlFor="bookcontact">Contact : </label>
            <input type="text" className='border-2 rounded-xl text-center' placeholder='Contact' id='bookcontact' />
            <br /><br />
            <label htmlFor="bookemail">Email : </label>
            <input type="email" className='border-2 rounded-xl text-center' placeholder='Email' id='bookmail' /><br /><br />
            <button className='h-full border px-20 cursor-pointer border-none rounded-2xl  text-white bg-blue-700'>Book Now</button>
            
       </form>
    </div>
  )
}

export default Bookappoinment
