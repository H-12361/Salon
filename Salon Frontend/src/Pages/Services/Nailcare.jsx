import { Link } from 'react-router-dom'
import React from 'react'

const Nailcare = () => {
  
  return (
    

   
    <div className='h-40 m-10 w-40  text-center' >
      <Link to ='/service/nail'> 
      <img className='rounded-full h-40 w-40' src="https://media.istockphoto.com/id/92015266/photo/closeup-of-manicure.jpg?s=1024x1024&w=is&k=20&c=HuYaZK8bYZKD50M0DwVeSOKc3MBnC0NEUftmI5Z4QlM=" alt=" Nail care img" />
      <p>Nail Cair</p>
      </Link>
    </div>
  )
}

export default Nailcare
