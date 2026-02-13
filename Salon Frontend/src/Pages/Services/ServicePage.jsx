import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { CheckCircle, ArrowLeft, Calendar } from 'lucide-react' 

const ServicePage = () => {
  const { type } = useParams(); 

  // Is object ki keys ab aapke <Link to='/service/...'> ke exact match hain
  const serviceDetails = {
    hair: { 
      title: "Hair Styling & Care", 
      price: "₹499", 
      desc: "Transform your look with our professional hair services. From classic cuts to modern styling, our experts ensure you leave with a smile.",
      image: "https://media.istockphoto.com/id/470309566/photo/man-combing-his-hair.jpg?s=1024x1024&w=is&k=20&c=aRFGcdPHToHmIEcp-71vNeCbuIgTrg09FEnSS6gk7Cg=",
      features: ["Advanced Haircut", "Hair Coloring", "Deep Conditioning", "Scalp Massage", "Beard Trimming", "Hair Spa"]
    },
    skincare: { 
      title: "Premium Skin Treatment", 
      price: "₹799", 
      desc: "Revitalize your skin with our specialized facials and treatments. We use high-quality products to give your skin a natural, healthy glow.",
      image: "https://media.istockphoto.com/id/1389841258/photo/closeup-portrait-of-handsome-beautiful-asian-boy-with-mirror-makeup-routine-with-copy-space.jpg?s=2048x2048&w=is&k=20&c=o9CQG_-StrqzpXAxyl15lgMFuPX1DX-KiNrSVaG1LKY=",
      features: ["Hydra Facial", "De-tan Pack", "Anti-Aging Treatment", "Gold Facial", "Fruit Clean-up", "Deep Pore Cleansing"]
    },
    nail: { 
      title: "Nail Art & Spa", 
      price: "₹299", 
      desc: "Creative and durable nail designs for every occasion. Our artists focus on hygiene and precision to give you the perfect nails.",
      image: "https://media.istockphoto.com/id/2254059303/photo/manicure-master-working-with-male-client-in-beauty-salon-mens-nail-care.jpg?s=612x612&w=0&k=20&c=F4dRP3npJOYVqlYOgloEhNd8f9Sfe8nGxTvw8pX3hnw=",
      features: ["Gel Extensions", "Nail Art", "Classic Manicure", "Paraffin Wax", "Cuticle Care", "Nail Strengthening"]
    },
    spramassage: { 
      title: "Luxury Body Spa", 
      price: "₹999", 
      desc: "Escape the stress of daily life. Our luxury massage therapies are designed to soothe your muscles and rejuvenate your mind and soul.",
      image: "https://media.istockphoto.com/id/2196778724/photo/luxury-mens-skincare-treatment.jpg?s=2048x2048&w=is&k=20&c=okqTti0WmM4siKBMvLZLnKvFat-jzirNGcwn_O4MDAw=",
      features: ["Full Body Massage", "Aromatherapy", "Hot Stone Therapy", "Foot Reflexology", "Body Scrub", "Steam Bath Therapy"]
    },
  };

  // URL type ko lowercase karke match karte hain (safety ke liye)
  const currentType = type ? type.toLowerCase() : "";
  const data = serviceDetails[currentType];

  // Agar URL galat hai toh wapas services hero page pe bhej do
  if (!data) {
    return <Navigate to="/ServiceDetial" />;
  }

  return (
    <div className='min-h-screen py-12 bg-slate-50 px-6 md:px-20'>
      <div className='max-w-6xl mx-auto'>
        {/* Navigation Link */}
        <Link to="/ServiceDetial" className="inline-flex items-center gap-2 text-cyan-800 mb-8 font-bold hover:text-black transition-all">
          <ArrowLeft size={20} /> Explore All Services
        </Link>

        <div className='bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100'>
          
          {/* Image Section */}
          <div className='md:w-1/2 h-80 md:h-[550px] overflow-hidden'>
            <img 
              src={data.image} 
              alt={data.title} 
              className='w-full h-full object-cover hover:scale-110 transition-transform duration-1000'
            />
          </div>

          {/* Content Section */}
          <div className='md:w-1/2 p-10 md:p-14 flex flex-col justify-between'>
            <div>
              <div className='inline-block px-4 py-1 bg-cyan-100 text-cyan-800 rounded-full text-xs font-bold uppercase tracking-widest mb-4'>
                Best Seller
              </div>
              <h1 className='text-4xl md:text-5xl font-black text-slate-900 mb-6 font-serif italic'>
                {data.title}
              </h1>
              <p className='text-gray-500 text-lg mb-8 leading-relaxed font-medium'>
                {data.desc}
              </p>
              
              <div className='mb-10'>
                <h3 className='font-bold text-slate-800 text-xl mb-5 underline decoration-cyan-500 underline-offset-8'>Included in Package:</h3>
                <ul className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  {data.features.map((feature, index) => (
                    <li key={index} className='flex items-center gap-3 text-slate-700'>
                      <CheckCircle size={22} className='text-cyan-600 flex-shrink-0' /> 
                      <span className='font-semibold'>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row items-center justify-between border-t border-gray-200 pt-10 gap-8'>
              <div className='text-center sm:text-left'>
                <p className='text-gray-400 text-xs uppercase font-black tracking-tighter'>Package Starts At</p>
                <div className='text-5xl font-black text-red-600 tracking-tight'>{data.price}</div>
              </div>
              
              <Link to="/Bookappoinment" className='w-full sm:w-auto'>
                <button className='w-full flex items-center justify-center gap-2 bg-cyan-800 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-black transition-all shadow-xl active:scale-95'>
                  <Calendar size={20} /> BOOK NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicePage;