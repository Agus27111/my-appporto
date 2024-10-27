import { Inter } from "next/font/google";
import {
  FaLinkedinIn,
  FaGithub,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import {
  RiInstagramFill,
  RiTailwindCssFill,
  RiNextjsFill,
} from "react-icons/ri";
import { FaMedium } from "react-icons/fa6";
import {
  SiFramer,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiSequelize,
  SiPrisma,
  SiPostgresql,
  SiMysql,
  SiLaravel,
  SiTypescript,
} from "react-icons/si";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
import Drawer from "../components/Drawer";

export default function Biography() {
  const techStackIcons = [
    FaReact,
    FaNodeJs,
    FaBootstrap,
    RiTailwindCssFill,
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    RiNextjsFill,
    SiFramer,
    SiSequelize,
    SiExpress,
    SiPostgresql,
    SiMongodb,
    SiMongoose,
    SiPrisma,
    SiMysql,
    SiLaravel,
    SiTypescript,
  ];

  return (
    <div
      className="hero h-screen overflow-hidden"
      style={{
        backgroundImage: "url(/heroit.webp)",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-overlay bg-opacity-60 text-center"></div>
      <div
        className="hero-content text-neutral-content w-[82%] h-[80%] flex flex-col justify-center items-start overflow-hidden"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <div className="md:w-[80%] w-[90%] md:h-[90%] h-auto flex flex-col md:flex-row md:gap-4 justify-center items-center overflow-auto text-justify md:text-left">
          {" "}
          {/* Ubah di sini */}
          <div className="bio mb-4 md:w-full flex flex-col justify-center items-center h-full md:h-auto overflow-y-auto">
            <section className="flex flex-col gap-3 overflow-auto justify-center items-center  md:h-auto">
              <p className="flex justify-center items-center  md:h-auto  text-gray-300 font-bold ">
                <span className="text-5xl mr-2">Hi</span> I am a dedicated
                professional with a diverse background, having transitioned from
                various roles, including educator, farmer, and street vendor, to
                a fulfilling career in web development. My journey has been
                driven by a strong desire to solve problems and create
                innovative solutions.
              </p>

              <p className="hidden md:block text-gray-300 font-bold">
                Throughout my experiences, I have cultivated essential skills
                such as resilience, adaptability, and effective communication,
                which have been instrumental in my transition to the tech
                industry. My passion for programming ignited as I began
                exploring the world of backend development. I have developed a
                solid foundation in technologies like ExpressJS, focusing on
                security and efficiency with tools such as JWT, JOI, Bcrypt,
                Redis, Nodemailer, and Multer.
              </p>
              <p className="hidden md:block text-gray-300 font-bold">
                In addition to my backend expertise, I am eager to expand my
                knowledge in TypeScript and NestJS to deepen my understanding of
                the JavaScript ecosystem. My commitment to continuous learning
                propels me to seek out new challenges and opportunities within
                the tech landscape.
              </p>
              <p className="hidden md:block text-gray-300 font-bold">
                I am excited about the potential to contribute to innovative
                projects that make a difference and am always looking for ways
                to enhance my skills and grow as a developer. My diverse
                background provides me with a unique perspective on
                problem-solving, and I am enthusiastic about bringing this
                perspective to a collaborative team environment.
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* infinite tech stack */}
      <div className="tech-stack md:w-1/8 absolute md:right-0 md:mr-44 -mt-96 overflow-hidden">
        <div className="infinite-scroll h-[80%] overflow-hidden w-full">
          <div className="icons flex md:flex-col md:gap-4 animate-scroll">
            {techStackIcons.map((Icon, index) => (
              <div key={index} className="icon mb-4">
                <Icon className="h-16 w-16" />
              </div>
            ))}
            {/* Duplicate icons for infinite scroll effect */}
            {techStackIcons.map((Icon, index) => (
              <div key={index + techStackIcons.length} className="icon mb-4">
                <Icon className="h-16 w-16" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .infinite-scroll {
          position: relative;
          height: auto;
          overflow: hidden;
        }
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }

        /* Media query untuk tampilan mobile */
        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll-x 30s linear infinite;
          }
        }

        @keyframes scroll {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-50%);
          }
        }

        @keyframes scroll-x {
          from {
            transform: translateX(100%); /* Mulai dari kanan */
          }
          to {
            transform: translateX(-100%); /* Berhenti di kiri */
          }
        }
      `}</style>

      <div className="absolute md:w-1/8 right-2">
        <Drawer />
      </div>
    </div>
  );
}
