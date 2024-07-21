import React from "react";
import { useRouter } from "next/router";

function BottomNav() {
  const router = useRouter();

  const isActive = (path: string) => (router.pathname === path ? "active" : "");

  return (
    <div className="btm-nav">
      <button onClick={() => router.push("/")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <span className="btm-nav-label">Home</span>
      </button>
      <button onClick={() => router.push("/biography")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 20h9M12 4h9m-9 8h9M4 8h8m-8 4h8m-8 4h8m-8-8v8"
          />
        </svg>
        <span className="btm-nav-label">Biography</span>
      </button>
      <button
        onClick={() => router.push("/portofolio")}
        className={`${isActive("/portofolio")}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 5h18M9 3v18m6-18v18m-9-6h12"
          />
        </svg>
        <span className="btm-nav-label">Portofolio</span>
      </button>
      <button onClick={() => router.push("/contact")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 4v8m-5 0h10"
          />
        </svg>
        <span className="btm-nav-label">Contact</span>
      </button>
    </div>
  );
}

export default BottomNav;
