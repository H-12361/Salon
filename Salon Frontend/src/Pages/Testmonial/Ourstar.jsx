// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Ourstar = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   const testimonials = [
//     {
//       name: "Rahul Sharma",
//       text: "Amazing service and very professional staff!",
//       image: "https://randomuser.me/api/portraits/men/32.jpg",
//     },
//     {
//       name: "Priya Verma",
//       text: "Best salon experience. Highly recommended!",
//       image: "https://randomuser.me/api/portraits/women/44.jpg",
//     },
//     {
//       name: "Amit Singh",
//       text: "Great ambiance and skilled stylists.",
//       image: "https://randomuser.me/api/portraits/men/56.jpg",
//     },
//   ];

//   return (
//     <div>
//       <h1 className="text-center font-semibold">Testimonial</h1>

//       <div className="border-2 m-4 px-20 py-5">
//         <Slider {...settings}>
//           {testimonials.map((d, idx) => (
//             <div key={idx}>
//               <div className="px-20">
//                 <img
//                   className="rounded-full w-24 h-24 object-cover mx-auto"
//                   src={d.image}
//                   alt={d.name}
//                 />
//               </div>

//               <div className="flex flex-col justify-center items-center mt-3">
//                 <h4 className="font-bold">{d.name}</h4>
//                 <p className="font-normal text-center">{d.text}</p>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Ourstar;
