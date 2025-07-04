import { FaCss3Alt, FaReact, FaServer } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiPostgresql } from "react-icons/si";

const Skills = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-6 flex-wrap">
      {/* Web Design */}
      <div className="bg-[#0F172A] p-6 rounded-lg w-full md:w-1/4">
        <p className="text-green-500 font-semibold text-center mb-2">
          Web Design
        </p>
        <ul className="text-[#D6E1FF] text-xl list-none space-y-1">
          <li>UI/UX Design</li>
          <li>Responsive Design</li>
          <li>Wireframing</li>
          <li>User Research</li>
        </ul>
      </div>

      {/* Frontend */}
      <div className="bg-[#0F172A] p-6 rounded-lg w-full md:w-1/4">
        <p className="text-green-500 font-semibold text-center mb-2">
          Frontend
        </p>
        <ul className="text-[#D6E1FF] text-xl list-none space-y-1">
          <li className="flex items-center gap-2"><IoLogoJavascript className="text-[#efd81a]" /> JavaScript</li>
          <li className="flex items-center gap-2"><FaReact className="text-[#60dbfb]"/> ReactJS</li>
          <li className="flex items-center gap-2"><RiNextjsFill /> NextJS</li>
          <li className="flex items-center gap-2"><FaCss3Alt className="text-[#147bbf]"/> CSS</li>
        </ul>
      </div>

      {/* Backend */}
      <div className="bg-[#0F172A] p-6 rounded-lg w-full md:w-1/4">
        <p className="text-green-500 font-semibold text-center mb-2">Backend</p>
        <ul className="text-[#D6E1FF] text-xl list-none space-y-1">
          <li className="flex items-center gap-2"><SiPostgresql className="text-[#30638b]" />PostgreSQL</li>
          <li className="flex items-center gap-2"><SiMongodb className="text-[#4ca53f]"/>MongoDB</li>
          <li className="flex items-center gap-2"><SiExpress className="text-[]" />ExpressJS</li>
          <li className="flex items-center gap-2"><FaServer className="text-[#628bdd]"/>RESTful API</li>
        </ul>
      </div>

      {/* Soft Skills */}
      <div className="bg-[#0F172A] p-6 rounded-lg w-full md:w-1/4">
        <p className="text-green-500 font-semibold text-center mb-2">
          Soft Skills
        </p>
        <ul className="text-[#D6E1FF] text-xl list-none space-y-1">
          <li>Effective Communication</li>
          <li>Collaboration</li>
          <li>Commitment</li>
          <li>Leadership</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
