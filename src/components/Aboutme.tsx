import React from 'react'
import Image from 'next/image'

const Aboutme = () => {
  return (
    <>
      <h2 className="text-4xl font-semibold text-green-500 mb-10">
            About Me
            <span className="text-4xl font-semibold text-[#D6E1FF] mb-2">
              .
            </span>
          </h2>

          {/* Row 1 */}
          <div className="flex flex-col md:flex-row items-center md:items-start mb-10 border-b border-[#3DD68C] pb-10">
            {/* Foto Kiri */}
            <div className="w-full md:w-1/4 mb-6 md:mb-0 md:pr-6 md:border-r md:border-[#3DD68C] flex justify-center">
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/semi-professional.webp"
                  alt="Professional Photo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Paragraf Kanan */}
            <div className="w-full md:w-3/4 md:pl-6">
              <p className='text-[#D6E1FF]'>
                With a foundation in Software Engineering and a strong interest
                in web development, I create user-centered web experiences that
                are both functional and engaging. My previous experience in
                sales has sharpened my communication skills and given me a
                unique perspective on building solutions that connect with real
                people.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row items-center md:items-start pt-10 border-t border-[#3DD68C]">
            {/* Paragraf Kiri */}
            <div className="w-full md:w-3/4 md:pr-6">
              <p className='text-[#D6E1FF]'>
                I thrive in collaborative environments where I can contribute
                ideas and learn from others. My goal is to become a full-stack
                developer who not only builds scalable applications but also
                understands how users truly interact with digital products.
              </p>
            </div>

            {/* Foto Kanan */}
            <div className="w-full md:w-1/4 mt-6 md:mt-0 md:pl-6 md:border-l md:border-[#3DD68C] flex justify-center">
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/foto-coding-1.avif"
                  alt="Professional Photo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div> 
    </>
  )
}

export default Aboutme
