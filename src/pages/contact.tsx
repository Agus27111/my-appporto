import { Inter } from "next/font/google";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaMedium } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";
import BottomNav from "../components/BottomNav";
const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  const navig = ["biography", "portfolio", "contact"];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:agussetiawanbelajar@gmail.com?subject=Contact from ${name}&body=${message} (${email})`;
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/hero.webp)",
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
          <div className="contact-form mb-4 md:w-1/2">
            <h1 className="mb-5 text-5xl font-bold">Contact Me</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="input input-bordered w-full" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="input input-bordered w-full" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <textarea 
                placeholder="Your Message" 
                className="textarea textarea-bordered w-full h-1/2" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required 
              ></textarea>
              <button type="submit" className="btn glass mt-3">Send Message</button>
            </form>
          </div>
          
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
