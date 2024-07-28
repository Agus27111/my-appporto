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
  SiSequelize,
  SiPostgresql,
  SiMongodb,
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
        className="hero-content text-neutral-content w-[80%] h-[80%] flex flex-col justify-center items-center overflow-hidden"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <div className="w-[80%] h-[90%] flex flex-col md:flex-row md:gap-4 md:justify-center md:items-center">
          <div className="bio mb-4 md:w-full flex flex-col justify-center align-center">
            <section
              style={{ marginBottom: "50px" }}
              className="flex flex-col gap-4 overflow-hidden justify-center align-center"
            >
              <p>
                <span className="text-5xl">Hi</span> there! I'm AgusSe, a
                Fullstack Developer with a passion for creating dynamic and
                responsive web applications.
              </p>

              <p className='hidden md:block'>
                My toolkit includes HTML, CSS (Bootstrap and TailwindCSS), and
                JavaScript, along with powerful backend technologies like
                NodeJS, Express, and PostgreSQL. I'm also skilled in Prisma,
                Sequelize, and MongoDB for database management, and I bring
                interactive user experiences to life with Framer-Motion and
                Daisy UI. On the frontend, I excel with ReactJS and NextJS.
              </p>
              <p className='hidden md:block'>
                Over the years, I've worked on a variety of projects ranging
                from e-commerce platforms to sleek landing pages. My goal is to
                blend creativity with technical expertise to build solutions
                that are not only functional but also visually appealing.
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* infinite tech stack */}
      <div className="tech-stack md:w-1/8 hidden md:block md:absolute right-0 mr-24">
        <div className="infinite-scroll h-[80%] overflow-hidden">
          <div className="icons flex flex-col animate-scroll">
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
          height: 100vh;
        }
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
        @keyframes scroll {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-50%);
          }
        }
      `}</style>
      <div className="absolute md:w-1/8 right-2">
        <Drawer />
      </div>
    </div>
  );
}
