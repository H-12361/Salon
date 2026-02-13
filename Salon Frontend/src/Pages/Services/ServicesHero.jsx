import React from 'react'
import HairService from './HairService'
import SkinCare from './SkinCare'
import Nailcare from './Nailcare'
import SpaMassage from './SpaMassage'

const ServicesHero = () => {
  return (
    <div >
    <h1 className=' text-xl text-center font-sans'> Our Services </h1>  
   <div className='flex flex-wrap justify-center md:justify-evenly gap-6 p-10'>
      <HairService/> 
      <SkinCare/>
      <Nailcare/>
      <SpaMassage/>
</div>
   

    </div>
  )
}

export default ServicesHero
