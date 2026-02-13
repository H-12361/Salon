import React from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const ContactPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-cyan-800 py-16 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
        <p className="text-cyan-100 italic">We are here to make you look and feel beautiful.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-cyan-900 border-b-2 border-cyan-800 inline-block">Contact Info</h2>
            <div className="space-y-4">
              <p className="flex items-center gap-4 text-gray-700 text-lg"><Phone className="text-cyan-800" /> +91-9630970989</p>
              <p className="flex items-center gap-4 text-gray-700 text-lg"><Mail className="text-cyan-800" /> info@digitalflyhigh.in</p>
              <p className="flex items-center gap-4 text-gray-700 text-lg"><MapPin className="text-cyan-800" /> 123, Business Hub, Indore</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-900"><Clock /> Opening Hours</h2>
            <div className="space-y-2 text-gray-600">
              <div className="flex justify-between border-b pb-1"><span>Sun - Sat</span> <span>10:00 AM - 10  :30 PM</span></div>
              <div className="flex justify-between text-red-600 font-bold"><span>Tuesday</span> <span>Closed</span></div>
            </div>
          </div>
        </div>

   
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-cyan-800 outline-none" />
            <input type="email" placeholder="Email Address" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-cyan-800 outline-none" />
            <textarea placeholder="How can we help you?" rows="4" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-cyan-800 outline-none"></textarea>
            <button className="w-full bg-cyan-800 text-white font-bold py-3 rounded-lg hover:bg-black transition-all">Send Message</button>
          </form>
        </div>

      </div>

     
      <div className="w-full h-80 bg-gray-300 mt-10">
       
         <div className="w-full h-full flex items-center justify-center text-gray-500 italic">Google Map Placeholder</div>
      </div>
    </div>
  )
}

export default ContactPage