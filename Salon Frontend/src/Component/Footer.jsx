import React from 'react'
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-cyan-900 text-white">
    
      <div className='py-12 px-6 border-b border-cyan-800'>
        <h1 className='text-center italic font-extrabold text-3xl md:text-4xl font-serif mb-6'>
          Digital Fly High Solution
        </h1>
        <p className='text-center font-medium italic font-serif max-w-3xl mx-auto leading-relaxed text-cyan-100'>
          We believe sustainable growth is built on a foundation of trust. <br className="hidden md:block" />
          That's why our partnership is defined by absolute transparency and relentless innovation. <br className="hidden md:block" />
          Our focus is to transform your challenges into triumphs, ensuring your brand leads.
        </p>
      </div>

      
      <div className='flex flex-col md:flex-row flex-wrap justify-between gap-10 py-12 px-8 max-w-7xl mx-auto'>
        
   
        <div className='flex-1 min-w-[250px] text-center md:text-left'>
          <h2 className='text-xl font-bold mb-4 flex items-center justify-center md:justify-start gap-2 text-cyan-300'>
            <MapPin size={20} /> Address
          </h2>
          <p className='text-cyan-100 not-italic leading-relaxed'>
            123, Business Hub, <br />
            Indore, Madhya Pradesh, <br />
            India - 452001
          </p>
        </div>

  
        <div className='flex-1 min-w-[250px] text-center md:text-left'>
          <h2 className='text-xl font-bold mb-4 flex items-center justify-center md:justify-start gap-2 text-cyan-300'>
            <Phone size={20} /> Contact
          </h2>
          <div className='space-y-2 text-cyan-100'>
            <p className='flex items-center justify-center md:justify-start gap-2'>+91-9630970989</p>
            <p className='flex items-center justify-center md:justify-start gap-2'>+91-9977716698</p>
            <p className='flex items-center justify-center md:justify-start gap-2'>
              <Mail size={16} /> info@digitalflyhigh.in
            </p>
          </div>
        </div>

   
        <div className='flex-1 min-w-[250px] text-center md:text-left'>
          <h2 className='text-xl font-bold mb-4 text-cyan-300'>Follow Us</h2>
          <div className='flex justify-center md:justify-start gap-5 mt-2'>
            <a href="#" className="p-2 bg-cyan-800 rounded-full hover:bg-blue-600 transition-all"><Facebook size={20} /></a>
            <a href="#" className="p-2 bg-cyan-800 rounded-full hover:bg-pink-600 transition-all"><Instagram size={20} /></a>
            <a href="#" className="p-2 bg-cyan-800 rounded-full hover:bg-blue-400 transition-all"><Twitter size={20} /></a>
            <a href="#" className="p-2 bg-cyan-800 rounded-full hover:bg-blue-800 transition-all"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>

      
      <div className='bg-black/30 text-cyan-400 text-center py-5 text-sm border-t border-cyan-800'>
        © {new Date().getFullYear()} <span className="font-bold">Digital Fly High Solution</span>. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer