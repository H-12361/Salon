import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-cyan-800 text-white relative'>
      <div className='max-w-7xl mx-auto flex justify-between items-center px-5 py-4'>
        
  
        <h1 className='font-extrabold text-xl'>
         <img className=' rounded-full bg-cover h-15 w-15 opacity-0.7' src="https://media.istockphoto.com/id/1331061457/vector/luxury-initial-b-scissors.jpg?s=1024x1024&w=is&k=20&c=YS5pa0PC6ts2_vfIvYqNvyyrqYpvnGml33wGuW5WlIk=" alt="" />
        </h1>

        
        <div className='hidden md:flex gap-8 font-medium'>
          <Link title='Home' to="/" className="hover:text-cyan-300">Home</Link>
          <Link title='Gallery' to="/Gallery" className="hover:text-cyan-300">Gallery</Link>
          {/* <Link title='Service' to="/ServicesHero" className="hover:text-cyan-300">Service</Link> */}
          <Link title='Book' to="/Bookappoinment" className="hover:text-cyan-300">Book Appointment</Link>
          <Link title='About' to="/AboutUS" className="hover:text-cyan-300">About</Link>
          <Link title='Contact' to="/Contact" className="hover:text-cyan-300">Contact</Link>
        </div>

        
        <div className='md:hidden flex items-center'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div className='md:hidden bg-cyan-900 flex flex-col items-center gap-5 py-6 absolute top-full left-0 w-full z-50 border-t border-cyan-700 shadow-lg'>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/Gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link to="/ServicesHero" onClick={() => setIsOpen(false)}>Service</Link>
          <Link to="/Bookappoinment" onClick={() => setIsOpen(false)}>Book Appointment</Link>
          <Link to="/AboutUS" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/Contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar