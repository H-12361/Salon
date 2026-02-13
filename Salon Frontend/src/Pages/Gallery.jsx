import React, { useState, useEffect } from 'react' 
import axios from 'axios'

const Gallery = () => {
    const [image, setImage] = useState([]);

    const getgalleryphoto = async () => {
        try {
            const response = await axios.get('https://pixabay.com/api/?key=54558782-a88e066eb376891b3aa49b364&q=barber+haircut+salon&image_type=photo&per_page=21')
            setImage(response.data.hits);
        } catch (error) {
            console.error("Error fetching images:", error);
        }
    }

   
    useEffect(() => {
        getgalleryphoto();
    }, []); 

    return (
        <div className='p-5'>
            <h2 className='text-2xl font-bold text-center mb-6'>Our Gallery</h2>

         

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {image.map((img) => {
                    return (
                        <div key={img.id} className='h-64 overflow-hidden rounded-2xl shadow-lg'>
                            <img 
                                className='h-full w-full object-cover hover:scale-105 transition-transform duration-300' 
                                src={img.webformatURL} 
                                alt="salon"
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Gallery