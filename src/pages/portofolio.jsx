import React, { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Drawer from "../components/Drawer";
import Diff from "../components/Diff";
import Porto from "../components/Porto";

export default function Portofolio() {
  return (
    <div className="mx-auto h-auto w-screen flex flex-col justify-center align-center">
      {/* button kecil */}
      <div className="drawer-button fixed right-14 top-10 z-20">
        <Drawer />
      </div>

      {/* Welcome to my porto */}
      <div className=" h-[50vh] md:h-screen w-screen flex flex-col justify-center align-center">
        <Diff />
      </div>

      {/* sesi showoff my porto */}
      <div className="content md:h-screen h-auto mt-10 mb-[25rem] ml-5 mr-5 ">
        <div className="gallery-wrapper mx-auto">
          <Porto />
        </div>
      </div>

      {/* Hire me */}
      <div className="w-screen mt-10 p-10 flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#fff">
              <textPath xlinkHref="#circlePath" className="text-white">
                BackEnd Developer ExpressJS NestJS TypeScript
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </div>
  );
}
