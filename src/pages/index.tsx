import { Inter } from "next/font/google";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaMedium } from "react-icons/fa6";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const navig = ["biography", "portofolio", "contact"];
  return (
    <div
      className="hero min-h-screen"
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
          WebkitBackdropFilter: "blur(5px)", // Menggunakan camelCase untuk -webkit-backdrop-filter
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <div className="w-[80%] h-[90%] flex flex-col  md:flex-row md:gap-4 md:justify-center md:items-center">
          <div className="bio mb-4 md:w-1/2">
            <h1 className="mb-5 text-5xl font-bold">Agus Setiawan</h1>
            <p className="mb-5">I'm Web Developer from Indonesia.</p>
            <div className="sosialmedia flex gap-4">
              <FaLinkedinIn />
              <RiInstagramFill />
              <FaMedium />
              <FaGithub />
            </div>
            <button className="btn glass mt-3">Contact Me</button>
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
    </div>
  );
}
