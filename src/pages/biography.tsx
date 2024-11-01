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
      <div className="hero-overlay bg-opacity-60 text-center overflow-auto"></div>
      <div
        className="hero-content text-neutral-content w-[82%] h-[80%] flex flex-col justify-center items-start overflow-auto"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <div className="md:w-[80%] w-[90%] h-[90%] flex flex-col md:flex-row md:gap-4 justify-center items-center text-justify md:text-left">
          <div className="avatar md:hidden">
            <div className="ring-base-alert ring-offset-base-alert w-24 rounded-full ring ring-offset-2">
              <img src="/images/agus1.jpg" />
            </div>
          </div>
          <div className="bio mb-4 md:w-full flex flex-col justify-center items-center h-full">
            <section className="flex flex-col gap-2 justify-center items-center h-full overflow-auto md:h-auto">
              <p className="text-gray-300 font-bold">
                <span className="text-5xl mr-2">Hi</span> I am a dedicated
                professional with a diverse background, having transitioned from
                various roles, including educator, farmer, and street vendor, to
                a fulfilling career in web development. My journey has been
                driven by a strong desire to solve problems and create
                innovative solutions.
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
                to enhance my skills and grow as a developer.
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* infinite tech stack */}
      <div className="hidden md:block tech-stack md:w-1/8 absolute md:right-0 md:mr-44 bottom-0 overflow-hidden">
        <div className="infinite-scroll h-full max-h-[100vh] w-full overflow-hidden">
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
          height: 100%;
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        @keyframes scroll {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(-100%);
          }
        }

        /* Media query untuk mengubah animasi pada perangkat mobile */
        @media (max-width: 768px) {
          .icons {
            flex-direction: row;
          }
          .animate-scroll {
            animation: scroll-x 15s linear infinite;
          }
          @keyframes scroll-x {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(-100%);
            }
          }
        }
      `}</style>

      <div className="absolute md:w-1/8 right-14">
        <Drawer />
      </div>
    </div>
  );
}
