import React, { useState } from "react";

const testimonials = [
  {
    name: "Rahul Sharma",
    text: "Amazing service and very professional staff!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Verma",
    text: "Best salon experience. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Amit Singh",
    text: "Great ambiance and skilled stylists.",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  const t = testimonials[index];

  return (
    <div className="text-center p-6">
      <h1 className="text-2xl font-semibold mb-4">Testimonials</h1>

      <div className=" p-6 rounded-lg">
        <img
          src={t.image}
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h4 className="font-bold">{t.name}</h4>
        <p className="text-gray-600">{t.text}</p>

        <div className="mt-4 flex justify-center gap-4">
          <button onClick={prev} className="px-4 py-1 border">
            ⬅
          </button>
          <button onClick={next} className="px-4 py-1 border">
            ➡
          </button>
        </div>
      </div>
    </div>
  );
}
