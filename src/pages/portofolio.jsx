import React, { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Drawer from "../components/Drawer";
import Diff from "../components/Diff";

export default function Portofolio() {
  return (
    <div className="mx-auto h-auto w-screen flex flex-col justify-center align-center">
      {/* button kecil */}
      <div className="absolute right-2 top-10 z-20 ">
        <Drawer />
      </div>
      
      {/* Welcome to my porto */}
      <div className=" h-[50vh] md:h-screen w-screen flex flex-col justify-center align-center">
        <Diff />
      </div> 

      {/* sesi showoff my porto */}
      <div className="content md:h-screen h-auto mt-10 mb-[25rem] ml-5 mr-5 ">
        <div className="gallery-wrapper mx-auto">
        <ul className="gallery mx-10">
      {/* gambar1 */}
      <li>
        <figure>
          <a href="#">
            <img
              src="images/gallery-1.jpg"
              alt="Great Barrier Reef, Australia"
            />
          </a>
          <figcaption>
            <main>
              <p className="small">9-day trip</p>
              <h3>
                Great Barrier Reef, <em>Australia</em>
              </h3>
              <p>
                Dive into the vibrant underwater world of the Great Barrier
                Reef, a UNESCO World Heritage Site teeming with marine life.
              </p>
            </main>
            <footer>
              <div>
                <p className="small">From</p>
                <p className="price">€2,500</p>
              </div>
              <img src="icons/icon-arrow-right-color.svg" alt="Icon" />
            </footer>
          </figcaption>
        </figure>
      </li>
      {/* gambar2 */}
      <li>
        <figure>
          <a href="#">
            <img src="images/gallery-2.jpg" alt="Gallery image" />
          </a>
          <figcaption>
            <main>
              <p className="small">7-day trip</p>
              <h3>
                Grand Canyon, <em>United States</em>
              </h3>
              <p>
                Stand in awe at the colossal beauty of the Grand Canyon, carved
                by the forces of nature over millions of years.
              </p>
            </main>
            <footer>
              <div>
                <p className="small">From</p>
                <p className="price">€1,200</p>
              </div>
              <img src="icons/icon-arrow-right-color.svg" alt="Icon" />
            </footer>
          </figcaption>
        </figure>
      </li>
      {/* gambar3 */}
      <li>
        <figure>
          <a href="#">
            <img src="images/gallery-3.jpg" alt="Gallery image" />
          </a>
          <figcaption>
            <main>
              <p className="small">10-day trip</p>
              <h3>
                Machu Picchu, <em>Peru</em>
              </h3>
              <p>
                Uncover the mystique of the ancient Inca ruins perched high in
                the Andes Mountains at Machu Picchu.
              </p>
            </main>
            <footer>
              <div>
                <p className="small">From</p>
                <p className="price">€2,200</p>
              </div>
              <img src="icons/icon-arrow-right-color.svg" alt="Icon" />
            </footer>
          </figcaption>
        </figure>
      </li>
      {/* gambar4 */}
      <li>
        <figure>
          <a href="#">
            <img src="../../public/images/gallery-4.jpg" alt="Gallery image" />
          </a>
          <figcaption>
            <main>
              <p className="small">11-day trip</p>
              <h3>
                Bali, <em>Indonesia</em>
              </h3>
              <p>
                Find tranquility on the idyllic island of Bali, with its lush
                landscapes, serene temples, and warm hospitality.
              </p>
            </main>
            <footer>
              <div>
                <p className="small">From</p>
                <p className="price">€3,200</p>
              </div>
              <img src="icons/icon-arrow-right-color.svg" alt="Icon" />
            </footer>
          </figcaption>
        </figure>
      </li>
      {/* gambar5 */}
      <li>
        <figure>
          <a href="#">
            <img src="images/gallery-5.jpg" alt="Gallery image" />
          </a>
          <figcaption>
            <main>
              <p className="small">5-day trip</p>
              <h3>
                Rio de Janeiro, <em>Brazil</em>
              </h3>
              <p>
                Experience the rhythm and energy of Rio de Janeiro, home to
                vibrant Carnival celebrations, iconic landmarks, and stunning
                beaches.
              </p>
            </main>
            <footer>
              <div>
                <p className="small">From</p>
                <p className="price">€1,600</p>
              </div>
              <img src="icons/icon-arrow-right-color.svg" alt="Icon" />
            </footer>
          </figcaption>
        </figure>
      </li>
      {/* gambar6 */}
      <li>
        <figure>
          <a href="#">
            <img src="images/gallery-6.jpg" alt="Gallery image" />
          </a>
          <figcaption>
            <main>
              <p className="small">13-day trip</p>
              <h3>
                Niagara Falls, <em>Canada</em>
              </h3>
              <p>
                Immerse yourself in the breathtaking cascades and embark on
                unforgettable adventures in this natural wonder.
              </p>
            </main>
            <footer>
              <div>
                <p className="small">From</p>
                <p className="price">€3,000</p>
              </div>
              <img src="icons/icon-arrow-right-color.svg" alt="Icon" />
            </footer>
          </figcaption>
        </figure>
      </li>
    </ul>
        </div>
      </div>

      {/* button kecil */}
      {/* <div className="absolute right-8 ">
        <Drawer />
      </div>
       */}
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
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-base">
                Front-End Developer && Back-End Developer
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
