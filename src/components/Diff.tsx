import React from "react";

export default function Diff() {
  return (
    <div className="diff md:aspect-[16/9] h-[50vh] md:h-screen">
      <div className="diff-item-1">
        <div className="bg-neutral text-success-content grid place-content-center md:text-9xl text-5xl font-black text-center">
          WELCOME TO
          <br />
          MYPORTO
        </div>
      </div>
      <div className="diff-item-2">
        <div className="bg-base-200 grid place-content-center md:text-9xl text-5xl font-black text-center">
          WELCOME TO
          <br />
          MYPORTO
        </div>
      </div>
      <div className="diff-resizer"></div>
    </div>
  );
}
