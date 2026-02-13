import { Link } from 'react-router-dom'
import React from 'react'

const HairService = () => {
  
  return (
    <>  
      <div className='h-40 m-10 w-40  text-center'>
       <Link to ='/service/hair'>
      <img className='rounded-full h-40 w-40' src="https://media.istockphoto.com/id/640274128/photo/barber-using-scissors-and-comb.jpg?s=1024x1024&w=is&k=20&c=aDdH8tAL_dU1b2XuXovn_A06t_jvJBZAsdnYt5Qu5jc=" alt="" />
      <p > Hair Service </p>
      </Link>
    </div>
    
    </>
  )
}

export default HairService
