import React from "react";

const BodyContent = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 p-8 lg:grid-cols-3 gap-4 ">
      {/* Konten Tengah */}
      <main className="space-y-8">
        {/* Hero Section */}
        <section className="space-y-4">
          <p className="text-[#3DD68C]">Hi, my name is</p>
          <h1 className="text-7xl font-bold text-[#D6E1FF]">Yusril Hafis</h1>
          <p className="text-4xl font-bold text-[#D6E1FF]">Software Engineer</p>
          <p className="text-[#D6E1FF]">
            I am a Software Engineer specializing in building and designing
            exceptional digital experience.
          </p>
        </section>

        {/* About Me Section */}

        {/* Skills Section */}
        <section>
          <h2 className="text-xl font-semibold text-[#D6E1FF] mb-2">Skills</h2>
          <ul className="list-disc pl-5 text-[#D6E1FF]">
            <li>JavaScript (ES6+), TypeScript</li>
            <li>Next.js, React, Tailwind CSS</li>
            <li>Node.js, Express.js, MySQL</li>
            <li>Git & GitHub</li>
          </ul>
        </section>

        {/* Kontak */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Kontak</h2>
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
