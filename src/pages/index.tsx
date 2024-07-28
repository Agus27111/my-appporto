import { Inter } from "next/font/google";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaMedium } from "react-icons/fa6";
import Link from "next/link";
import Footer from "../components/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const navig = ["biography", "portofolio", "contact"];
  return (
    <div
      className="hero min-h-screen flex flex-col justify-center align-center"
      style={{
        backgroundImage: "url(/heroit.webp)",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-overlay bg-opacity-60 text-center"></div>
      <div
        className="hero-content text-neutral-content w-[75%] flex-grow flex flex-col justify-center m-auto mt-3"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          color: "rgba(0, 0, 0, 0.8)",
        }}
      >
        <div className="w-[80%] h-[70%] flex flex-col md:flex-row md:gap-4 md:justify-center md:items-center flex-grow">
          <div className="bio mb-4 md:w-1/2">
            <h1 className="mb-5 text-5xl font-bold">Agus Setiawan</h1>
            <p className="mb-5">I'm a Web Developer from Indonesia.</p>
            <p className="mb-5">
              <em>Specialized in JavaScript, ReactJS, and NodeJS</em>
            </p>
            <div className="sosialmedia flex gap-4">
              <Link
                href="https://www.linkedin.com/in/agus-setiawan-50657a266"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="hover:scale-125 transition-transform duration-300" />
              </Link>
              <Link
                href="https://www.instagram.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiInstagramFill className="hover:scale-125 transition-transform duration-300" />
              </Link>
              <Link
                href="https://medium.com/@agussetiawanbelajar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMedium className="hover:scale-125 transition-transform duration-300" />
              </Link>
              <Link
                href="https://github.com/Agus27111"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:scale-125 transition-transform duration-300" />
              </Link>
            </div>
            <Link href="/contact" passHref>
              <button className="btn mt-3 hover:text-zinc-200">
                Contact Me
              </button>
            </Link>
          </div>
          <div className="navigation md:w-1/2">
            {navig.map((e) => (
              <>
                <div className="border-zinc-500 border-2 w-100% h-[2px] mt-4 rounded-[5px]" />
                <Link href={`/${e}`}>
                  <p className="mt-2 cursor-pointer hover:text-zinc-200 active:scale-[0.9] ">
                    {e}
                  </p>
                </Link>
              </>
            ))}
            <div className="border-zinc-500 border-2 w-100% mt-4 rounded-[5px]" />
          </div>
        </div>
      </div>
      <Footer className="w-full" />
    </div>
  );
}
