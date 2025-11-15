import React from "react";

const testimonials = [
  {
    name: "Lauren Hailey",
    role: "Senior Creative Designer",
    quote: "Amazing story appears while we work together. Wonderful skills are owned by him"
  }
];

const Testimonials = () => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((testi, index) => (
        <div
          key={index}
          className="bg-[#1d232a] rounded-xl p-6 shadow-lg border-2 border-green-500/30 hover:border-green-500 transition duration-300"
        >
          <p className="text-lg text-[#D6E1FF] italic mb-4">“{testi.quote}”</p>
          <hr className="border-green-500 mb-3 w-12" />
          <p className="font-semibold text-green-500">{testi.name}</p>
          <p className="text-sm text-[#D6E1FF]/70">{testi.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
