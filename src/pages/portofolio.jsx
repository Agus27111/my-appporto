import React, { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Drawer from "../components/Drawer";
import Diff from "../components/Diff";

export default function Portofolio() {
  const carouselItemRefs = useRef([]);

  const handleAccordionClick = (index) => {
    const carouselItem = carouselItemRefs.current[index];
    if (carouselItem) {
      carouselItem.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="container md:h-[300vh] h-auto w-screen">
      <div className="absolute right-0 top-10 z-20 ">
        <Drawer />
      </div>
      <div className="startPorto h-[50vh] md:h-screen w-screen md:p-10 p-2 md:mb-10 mb-2">
        <Diff />
      </div>

      {/* sesi showoff my porto */}
      <div className="content md:h-screen h-auto w-screen flex flex-col md:flex-row justify-between align-center md:mt-20 md:p-10 p-2">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <>
            {/* Card Left */}
            <div className="md:w-full w-[100%] flex flex-col justify-center items-center mx-auto text-center">
              {/* Accordion */}
              <div
                className="collapse collapse-plus bg-base-200 mb-2"
                onClick={() => handleAccordionClick(0)}
              >
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                  Click to open this one and close others
                </div>
                <div className="collapse-content">
                  <div className="card bg-base-100 w-[90%] md:w-96 shadow-xl">
                    <figure>
                      <img
                        src={`https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp`}
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body ">
                      <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                      </h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="collapse collapse-plus bg-base-200 mb-2"
                onClick={() => handleAccordionClick(1)}
              >
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                  Click to open this one and close others
                </div>
                <div className="collapse-content">
                  <div className="card bg-base-100  w-[90%] md:w-96 shadow-xl">
                    <figure>
                      <img
                        src={`https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp`}
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                      </h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="collapse collapse-plus bg-base-200 mb-2"
                onClick={() => handleAccordionClick(2)}
              >
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                  Click to open this one and close others
                </div>
                <div className="collapse-content">
                  <div className="card bg-base-100  w-[90%] md:w-96 shadow-xl">
                    <figure>
                      <img
                        src={`https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp`}
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                      </h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="collapse collapse-plus bg-base-200 mb-2"
                onClick={() => handleAccordionClick(3)}
              >
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                  Click to open this one and close others
                </div>
                <div className="collapse-content">
                  <div className="card bg-base-100  w-[90%] md:w-96 shadow-xl">
                    <figure>
                      <img
                        src={`https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp`}
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                      </h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="collapse collapse-plus bg-base-200 mb-2"
                onClick={() => handleAccordionClick(4)}
              >
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                  Click to open this one and close others
                </div>
                <div className="collapse-content">
                  <div className="card bg-base-100  w-[90%] md:w-96 shadow-xl">
                    <figure>
                      <img
                        src={`https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp`}
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                      </h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Card Right */}
            <div className="w-full flex justify-center items-center md:h-[90%] h-[50vh] mt-4 ml-28 hidden md:block">
              {/* Carousel Vertikal */}
              <div className="carousel carousel-vertical rounded-box md:h-[90%] h-[50vh] md:w-auto w-[85%] mt-10  mockup-phone">
                <div
                  className="carousel-item h-full pt-5"
                  ref={(el) => (carouselItemRefs.current[0] = el)}
                >
                  <img
                    className="rounded-box p-2"
                    src={`https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp`}
                    alt="Carousel item"
                  />
                </div>
                <div
                  className="carousel-item h-full pt-5"
                  ref={(el) => (carouselItemRefs.current[1] = el)}
                >
                  <img
                    className="rounded-box p-2"
                    src={`https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp`}
                    alt="Carousel item"
                  />
                </div>
                <div
                  className="carousel-item h-full pt-5"
                  ref={(el) => (carouselItemRefs.current[2] = el)}
                >
                  <img
                    className="rounded-box p-2"
                    src={`https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp`}
                    alt="Carousel item"
                  />
                </div>
                <div
                  className="carousel-item h-full pt-5"
                  ref={(el) => (carouselItemRefs.current[3] = el)}
                >
                  <img
                    className="rounded-box p-2"
                    src={`https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp`}
                    alt="Carousel item"
                  />
                </div>
                <div
                  className="carousel-item h-full pt-5"
                  ref={(el) => (carouselItemRefs.current[4] = el)}
                >
                  <img
                    className="rounded-box p-2"
                    src={`https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp`}
                    alt="Carousel item"
                  />
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
      <div className="absolute right-8 ">
        <Drawer />
      </div>
      <div className="w-screen h-screen p-10 flex flex-col gap-16 items-center justify-center text-center">
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
