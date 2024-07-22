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
import BottomNav from "../components/BottomNav";

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
      className="hero h-screen"
      style={{
        backgroundImage: "url(/heroit.webp)",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-overlay bg-opacity-60 text-center"></div>
      <div
        className="hero-content text-neutral-content w-[80%] h-[80%]"
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
          <div className="bio mb-4 md:w-full">
            

            <section style={{ marginBottom: "50px" }}>
              <h2>About Me</h2>
              <p>
                Hi, I'm Agus Setiawan. I'm a Fullstack Developer proficient in
                HTML, CSS (Bootstrap and TailwindCSS), JavaScript, NodeJS,
                Express, PostgreSQL, Prisma, Sequelize, Framer-Motion, Daisy UI,
                ReactJS, and NextJS.
              </p>
              <p>
                I have experience in building various applications including
                e-commerce platforms, landing pages, and more.
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
      <BottomNav className="hidden sm:block" />
    </div>
  );
}
