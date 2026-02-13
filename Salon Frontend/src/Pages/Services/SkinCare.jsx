import { Link } from 'react-router-dom'
import React from 'react'



const SkinCare = () => {
  
  return (
    <div  className='h-40 m-10 w-40  text-center'>
     
      <Link to='/service/skincare'>
      <img  className='rounded-full h-40 w-40' src="https://media.istockphoto.com/id/1735407682/photo/handsome-man-enjoying-beauty-treatment-while-applying-face-cream-and-standing-on-brown.jpg?s=1024x1024&w=is&k=20&c=cbNC_UIcpplNhqp-GDZZp4DYzErc4yympLneA6g2JoY=" alt="skin care img" />
      <p>Skin Care</p>
      </Link>
       
    </div>
  )
}

export default SkinCare
