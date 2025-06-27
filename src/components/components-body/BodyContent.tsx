import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const BodyContent = () => {
  return (
    <div className="container mx-auto p-8 space-y-16">
      {/* Hero Section */}
      <section id="Hero" className="grid md:grid-cols-2 items-center gap-6">
        <div className="space-y-3">
          <p className="text-[#3DD68C]">Hi, my name is <span className="text-[#D6E1FF] text-2xl">Yusril Hafis</span></p>
          <h1 className="text-4xl md:text-7xl font-bold text-[#D6E1FF]">
            
          </h1>
          <h1 className="text-3xl md:text-4xl font-bold text-[#D6E1FF]">
            Software Engineer
          </h1>
          <p className="text-[#D6E1FF]">
            Specializing in building clean, modern, and user-focused websites
            for exceptional digital experience.
          </p>
          <div className="flex flex-wrap items-center gap-2 md:flex-row my-4 justify-start">
            <Button className="bg-blue-900 text-green-500 cursor-pointer">
              <Link href={"#Contacts"}>Contact me</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src="PassFoto.png"
            alt="Professional Photo"
            className="rounded-full  w-65 md:w-65 h-80 object-cover shadow-lg"
          />
        </div>
      </section>

      <main className="space-y-8">
        {/* About Me Section */}
        <section id="AboutMe">
          <h2 className="text-xl font-semibold text-[#D6E1FF] mb-2">
            About Me
          </h2>
          <p className="text-[#D6E1FF]">
            With a foundation in Software Engineering and a strong interest in
            web development, I create user-centered web experiences that are
            both functional and engaging. My previous experience in sales has
            sharpened my communication skills and given me a unique perspective
            on building solutions that connect with real people.
          </p>
        </section>

        {/* Skills Section */}
        <section id="Skills">
          <h2 className="text-xl font-semibold text-[#D6E1FF] mb-2">Skills</h2>
          <ul className="list-disc pl-5 text-[#D6E1FF]">
            <li>JavaScript (ES6+), TypeScript</li>
            <li>Next.js, React, Tailwind CSS</li>
            <li>Node.js, Express.js, MySQL</li>
            <li>Git & GitHub</li>
          </ul>
        </section>

        {/* Portfolio Section */}
        <section id="Portfolio">
          <h2 className="text-xl font-semibold text-[#D6E1FF] mb-2">
            Portfolio
          </h2>
          <p className="text-[#D6E1FF] text-xl">
            Interactive and Responsive Website for Blu by BCA
          </p>
          <p className="text-[#D6E1FF]">
            Blu by BCA is a Digital Banking Company under BCA Group that build
            intense marketing via digital. They needed a scalable, user-friendly
            platform to support both desktop and mobile users with features like
            user reviews, secure checkout, and real-time inventory updates.
          </p>
        </section>

        {/* Experience Section */}
        <section id="Experience">
          <h2 className="text-xl font-semibold text-[#D6E1FF] mb-2">
            Experience
          </h2>
          <p className="text-[#D6E1FF]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iure
            consequatur vel assumenda facilis atque maxime delectus voluptatem
            ratione saepe aliquid, sit provident accusamus. Libero itaque non
            aliquam totam nobis.
          </p>
        </section>

        {/* Testimonial Section */}
        <section id="Testimonial">
          <h2 className="text-xl font-semibold text-[#D6E1FF] mb-2">
            Testimonials
          </h2>
          <p className="text-[#D6E1FF]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci,
            sapiente. Reprehenderit corrupti laboriosam voluptates maiores nisi
            sed, inventore animi atque sapiente a id repellat dolorem quidem
            rerum fugiat! Eum, nisi!
          </p>
        </section>

        {/* Kontak */}
        <section id="Contacts">
          <h2 className="text-xl font-semibold text-[#D6E1FF] mb-2">Kontak</h2>
          <p className="text-gray-700">
            WhatsApp:{" "}
            <a
              href="https://wa.me/6285156900361"
              target="_blank"
              className="text-blue-600 underline"
            >
              Hubungi saya
            </a>
            <br />
            Email:{" "}
            <a
              href="mailto:yusrilhafis@gmail.com"
              className="text-blue-600 underline"
            >
              yusrilhafis@gmail.com
            </a>
          </p>
        </section>
      </main>
    </div>
  );
};

export default BodyContent;
