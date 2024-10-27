import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

import showOf from "../../data/showofporto";

function ShowList() {
  return (
    <ul className="gallery mx-10">
      {showOf.map((show) => (
        <li key={show.id}>
          <figure>
            <a href={show.link} target="_blank">
              <img src={show.imageSrc} alt={show.altText} />
            </a>
            <figcaption>
              <main>
                <p className="small ">{show.types}</p>
                <p className="overflow-hidden">{show.description}</p>
              </main>
              <footer>
                <div>
                  <p className="small">Tech</p>
                  <div className="tech-icons">
                    {show.techs.map((tech, index) => (
                      <span key={index} aria-label={tech.altText}>
                        {tech.icon}
                      </span>
                    ))}
                  </div>
                </div>
                <span>
                  <FaExternalLinkAlt aria-label="Open link" />
                </span>
              </footer>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}

export default ShowList;
