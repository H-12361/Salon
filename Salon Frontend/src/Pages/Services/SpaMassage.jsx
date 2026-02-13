import { Link } from 'react-router-dom'
import React from 'react'

const SpaMassage = () => {
  return (
    <div className='h-40 m-10 w-40  text-center' >
   <Link to='/service/spramassage'>
     <img className='rounded-full h-40 w-40'  src="https://media.istockphoto.com/id/1357320717/photo/young-man-having-a-massage-by-a-professional-masseuse.jpg?s=1024x1024&w=is&k=20&c=RdWTM3Jt9-lN8mn5huVz3p6JQf4yvAHq8xULaFcGoZ4=" alt="Spa massag" />
     <p>Spa Massage</p>
     </Link>
    </div>
  )
}

export default SpaMassage
