import React from "react";

export default function drawer() {
  return (
    <div className="drawer fixed">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="btn  bg-base-200 hover:bg-base-400 drawer-button"
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        >
          Menu
        </label>
      </div>
      <div className="drawer-side z-20">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/biography">Biography</a>
          </li>
          <li>
            <a href="/portofolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact Me</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
