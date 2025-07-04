'use client'
import Link from "next/link";
import Footer from "../Footer";
import { Button } from "../ui/button";
import Experience from "../Experience";
import Portfolio from "../Portfolio";

const BodyContent = () => {
  return (
    <div className="container mx-auto px-8 snap-y snap-mandatory scroll-smooth">
      {/* Hero Section */}
      <section
        id="Hero"
        className="grid h-screen snap-start pb-20 md:pb-40 md:grid-cols-2 items-start md:items-center gap-6 md:px-16"
      >
        <div className="space-y-3">
          <p className="text-[#3DD68C]">
            Hi, my name is{" "}
            <span className="text-[#3DD68C] text-2xl font-bold">
              Yusril Hafis
            </span>
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#D6E1FF]">
            Software Engineer
          </h1>
          <p className="text-[#D6E1FF]">
            Specializing in building clean, modern, and user-focused websites
            for exceptional digital experience.
          </p>
          <div className="flex flex-wrap items-center gap-2 md:flex-row  justify-start">
            <Button className="bg-blue-900 text-green-500 cursor-pointer">
              <Link href={"/contact-form"}>Contact me</Link>
            </Button>
              <Button className="bg-blue-900 text-green-500 cursor-pointer">
              <Link href={"/portfolio"}>My Portfolio</Link>
            </Button>
        
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src="PassFoto.png"
            alt="Professional Photo"
            className="rounded-full w-65 h-75 md:w-65 md:h-75 object-cover shadow-lg"
          />
        </div>
      </section>

      <main className="space-y-8">
        {/* About Me Section */}
        <section
          id="AboutMe"
          className="min-h-screen snap-start pt-24 scroll-mt-24 md:px-16"
        >
          <h2 className="text-4xl font-semibold text-green-500 mb-10">
            About Me
            <span className="text-4xl font-semibold text-[#D6E1FF] mb-2">
              .
            </span>
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
        <section
          id="Skills"
          className="min-h-screen snap-start pt-16 scroll-mt-16 md:px-16"
        >
          <h2 className="text-4xl font-semibold text-green-500 mb-10">
            Skills
            <span className="text-4xl font-semibold text-[#D6E1FF] mb-2">
              .
            </span>
          </h2>
          <ul className="timeline timeline-vertical md:timeline-horizontal">
            {/* Web Design (di bawah garis) */}
            <li>
              <div className="timeline-end timeline-box bg-[#0F172A] mt-5">
                <p className="text-green-500 font-semibold text-center">
                  Web Design
                </p>
                <ul className="text-[#D6E1FF] text-xl mt-2 list-disc list-inside space-y-1">
                  <li>UI/UX Design</li>
                  <li>Responsive Design</li>
                  <li>Wireframing</li>
                  <li>User Research</li>
                </ul>
              </div>
              <hr className="bg-green-500" />
            </li>

            {/* Frontend (di atas garis) */}
            <li>
              <hr className="bg-green-500" />
              <div className="timeline-start timeline-box bg-[#0F172A] mb-5">
                <p className="text-green-500 font-semibold text-center">
                  Frontend
                </p>
                <ul className="text-[#D6E1FF] text-xl mt-2 list-disc list-inside space-y-1">
                  <li>JavaScript</li>
                  <li>ReactJS</li>
                  <li>NextJS</li>
                  <li>CSS3</li>
                </ul>
              </div>
              <hr className="bg-green-500" />
            </li>

            {/* Backend (di bawah garis) */}
            <li>
              <hr className="bg-green-500" />
              <div className="timeline-end timeline-box bg-[#0F172A] mt-5">
                <p className="text-green-500 font-semibold text-center">
                  Backend
                </p>
                <ul className="text-[#D6E1FF] text-xl mt-2 list-disc list-inside space-y-1">
                  <li>NodeJS</li>
                  <li>MongoDB</li>
                  <li>ExpressJS</li>
                  <li>Vercel</li>
                </ul>
              </div>
              <hr className="bg-green-500" />
            </li>

            {/* Soft Skills (di atas garis) */}
            <li>
              <hr className="bg-green-500" />
              <div className="timeline-start timeline-box bg-[#0F172A] mb-5">
                <p className="text-green-500 font-semibold text-center">
                  Soft Skills
                </p>
                <ul className="text-[#D6E1FF] text-xl mt-2 list-disc list-inside space-y-1">
                  <li>Effective Communication</li>
                  <li>Collaboration</li>
                  <li>Commitment</li>
                  <li>Leadership</li>
                </ul>
              </div>
            </li>
          </ul>
        </section>

        {/* Portfolio Section */}
        <section
          id="Portfolio"
          className="min-h-screen snap-start pt-24 scroll-mt-24 md:px-16 text-[#D6E1FF] rounded-4xl"
        >
          <h2 className="text-4xl font-semibold text-green-500 mb-10">
            Portfolio
            <span className="text-4xl font-semibold text-[#D6E1FF] mb-2">
              .
            </span>
          </h2>
          <Portfolio />

      
        </section>

        {/* Experience Section */}
        <section
          id="Experience"
          className="min-h-screen snap-start pt-16 scroll-mt-16 md:px-16"
        >
          <h2 className="text-4xl font-semibold text-green-500 mb-10">
            Experience
            <span className="text-4xl font-semibold text-[#D6E1FF] mb-2">
              .
            </span>
          </h2>

          <Experience />
        </section>

        {/* Testimonial Section */}
        <section
          id="Testimonial"
          className="min-h-screen snap-start pt-16 scroll-mt-16 md:px-16"
        >
          <h2 className="text-4xl font-semibold text-green-500 mb-10">
            Testimonials
            <span className="text-4xl font-semibold text-[#D6E1FF] mb-2">
              .
            </span>
          </h2>
          <p className="text-[#D6E1FF]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci,
            sapiente. Reprehenderit corrupti laboriosam voluptates maiores nisi
            sed, inventore animi atque sapiente a id repellat dolorem quidem
            rerum fugiat! Eum, nisi!
          </p>
        </section>
      </main>

      {/* Footer & Kontak */}
      <Footer />
    </div>
  );
};

export default BodyContent;
