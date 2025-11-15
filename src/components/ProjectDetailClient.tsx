"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  client?: string;
  role?: string;
  year?: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  images: string[];
};

export default function ProjectDetailClient({ project }: { project: Project }) {
  return (
    <div className="container mx-auto min-h-screen pt-20">
      <motion.section
        className="px-4 md:px-10 py-10 space-y-20"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        <div className=" mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-green-400">
            {project.title}
          </h1>
          <p className="mt-4 text-[#D6E1FF]">{project.description}</p>
        </div>

        <div className="relative w-full h-[300px] md:h-[500px] rounded-lg overflow-hidden">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            className="md:col-span-1 h-fit md:sticky top-20 border-2 border-green-500 rounded-lg p-4 text-[#D6E1FF] space-y-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Info label="Client" value={project.client} />
            <Info label="My Role" value={project.role} />
            <Info label="Year" value={project.year} />
          </motion.div>

          <motion.div
            className="md:col-span-2 space-y-10 text-[#D6E1FF]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Section title="Situation" content={project.situation} />
            <Section title="Task" content={project.task} />
            <Section title="Action" content={project.action} />
            <Section title="Result" content={project.result} />
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {project.images.map((src, i) => (
            <div
              key={i}
              className="relative w-full h-[200px] md:h-[300px] rounded-lg overflow-hidden"
            >
              <Image
                src={src}
                alt={`${project.title} image ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <Link
            href="/portfolio"
            className="px-6 py-3 bg-green-500 text-[#0F172A] font-semibold rounded-lg hover:bg-green-600 transition-colors"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}

function Section({ title, content }: { title: string; content: string }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-green-500 mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
}

function Info({ label, value }: { label: string; value?: string }) {
  return (
    <p>
      <span className="text-green-500 font-semibold">{label}:</span>{" "}
      {value || "-"}
    </p>
  );
}
