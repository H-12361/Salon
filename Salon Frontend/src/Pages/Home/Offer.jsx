import React, { useEffect, useState } from "react";

const offers = [
  {
    id: 1,
    badge: "Limited Offer",
    title: "💇 Hair Spa + Hair Cut",
    oldPrice: "₹1,499",
    newPrice: "₹999",
    validity: "Valid till 20 Feb",
    cta: "Book Now",
    img: "https://media.istockphoto.com/id/1735407682/photo/handsome-man-enjoying-beauty-treatment-while-applying-face-cream-and-standing-on-brown.jpg?s=1024x1024&w=is&k=20&c=cbNC_UIcpplNhqp-GDZZp4DYzErc4yympLneA6g2JoY=", // replace with your image path
  },
  {
    id: 2,
    badge: "Trending",
    title: "👰 Bridal Glow Facial",
    oldPrice: "",
    newPrice: "Flat 30% OFF",
    validity: "This Week Only",
    cta: "Book Appointment",
    img: 'https://media.istockphoto.com/id/1483569937/photo/client-in-barbershop.jpg?s=1024x1024&w=is&k=20&c=nTKPyym5Mq7mYgceUxCdiJRVO7iioDONid47RfNmZ3Q='// replace with your image path
  },
];

const OfferSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 3500); // slide every 3.5 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-gray-900 rounded-lg my-6">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 50}%)`, width: "200%" }}
      >
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="flex w-1/2 p-8 items-center justify-between flex-col md:flex-row"
          >
            {/* Text Content */}
            <div className="w-full md:w-1/2 text-white flex flex-col justify-center items-start md:items-start">
              <span className="bg-red-600 px-3 py-1 text-xs rounded-full mb-2">
                {offer.badge}
              </span>
              <h2 className="text-2xl font-bold mb-2">{offer.title}</h2>
              <p className="text-lg mb-1">
                {offer.oldPrice && <del className="text-gray-400 mr-2">{offer.oldPrice}</del>}
                <span className="text-yellow-400 font-semibold">{offer.newPrice}</span>
              </p>
              <p className="mb-3 text-gray-300">{offer.validity}</p>
              <button className="bg-yellow-400 text-black font-bold px-6 py-2 rounded hover:scale-105 transition-transform">
                {offer.cta}
              </button>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2 mt-6 md:mt-0">
              <img
                src={offer.img}
                alt={offer.title}
                className="rounded-lg w-full object-cover shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferSlider;
