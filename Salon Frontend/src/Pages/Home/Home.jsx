import React from 'react'
import ServicesHero from '../Services/ServicesHero'
import Offer from './Offer'
import Testimonials from '../Testmonial/Testimonial'

const Home = () => {
  return (
    <div>
     
      <div className='relative h-[400px] w-[80%] md:w-[70%] mx-auto my-10 overflow-hidden rounded-2xl border-2 border-gray-200 shadow-xl flex items-center justify-center'>
        
     
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
        
          <source src="/istockphoto-2253703954-640_adpp_is.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

       
        <div className="absolute inset-0 bg-black/50 z-10"></div>

      
        <div className='relative z-20 text-center px-4 max-w-2xl'>
          <h1 className='text-white text-3xl md:text-5xl font-bold font-serif mb-4 leading-tight'>
            Transform Your Look with Expert Salon Care
          </h1>
          <p className='text-lg md:text-xl text-gray-200 font-serif mb-8'>
            Professional hair, beauty & grooming services tailored just for you.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/Bookappoinment" 
               className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg">
              Book Appointment
            </a>
            <a href="/ServiceDetial" 
               className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-semibold transition-all duration-300">
              Our Services
            </a>
          </div>
        </div>
      </div>

      <ServicesHero />
      <Offer/>
      <Testimonials/>   
    </div>
  )
}

export default Home