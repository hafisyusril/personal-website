"use client";

import { motion } from "framer-motion";
import { BiLogoVisualStudio } from "react-icons/bi";
import {
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";


const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "React.js", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Prisma ORM", icon: <SiPrisma /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Visual Studio Code", icon: <BiLogoVisualStudio /> },
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Postman", icon: <SiPostman /> },
    ],
  },
];

export default function Skills() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {skillCategories.map((category, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          className="bg-[#1B2B5B] border border-green-500 rounded-2xl p-6 shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-green-400 mb-4">
            {category.title}
            <span className="text-[#D6E1FF]">.</span>
          </h3>

          <ul className="space-y-3">
            {category.skills.map((skill, i) => {
              return (
                <motion.li
                  key={i}
                  whileHover={{ scale: 1.05, x: 4 }}
                  className="flex items-center gap-3 text-[#D6E1FF]/90 text-lg"
                >
                  <span className="text-green-400 text-2xl">
                    {skill.icon}
                  </span>
                  {skill.name}
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
}
