import React from "react";

type FooterProps = {
  className?: string;
};

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer
      className={`footer footer-center text-base-content p-4 ${className}`}
    >
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          agusSetiawan
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
