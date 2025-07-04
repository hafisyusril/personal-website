"use client";
import Aboutme from "../Aboutme";
import Experience from "../Experience";
import Footer from "../Footer";
import Hero from "../Hero";
import Portfolio from "../Portfolio";
import Skills from "../Skills";
import Testimonials from "../Testimonials";

const BodyContent = () => {
  return (
    <div className="container mx-auto px-8 snap-y snap-mandatory scroll-smooth">
      {/* Hero Section */}
      <section
        id="Hero"
        className="snap-start min-h-screen px-6 md:px-16 pt-2 md:pt-32"
      >
        <Hero />
      </section>

      <main className="space-y-8">
        {/* About Me Section */}
        <section
          id="AboutMe"
          className="min-h-screen snap-start pt-16 scroll-mt-16 md:px-16"
        >
          <Aboutme />
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

          <Skills />
        </section>

        {/* Portfolio Section */}
        <section
          id="Portfolio"
          className="min-h-screen snap-start pt-16 scroll-mt-16 md:px-16 text-[#D6E1FF] rounded-4xl"
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
          className="min-h-screen snap-start py-16 scroll-mt-16 md:px-16"
        >
          <h2 className="text-4xl font-semibold text-green-500 mb-10">
            Testimonials
            <span className="text-4xl font-semibold text-[#D6E1FF] mb-2">
              .
            </span>
          </h2>

          <Testimonials />
        </section>
        {/* Tes Testimonials */}
      </main>

      {/* Footer & Kontak */}
      <Footer />
    </div>
  );
};

export default BodyContent;
