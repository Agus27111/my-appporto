// data/trips.js
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { DiRedis } from "react-icons/di";
import {
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiSequelize,
  SiPrisma,
  SiPostgresql,
  SiMysql,
  SiLaravel,
  SiTypescript,
} from "react-icons/si";

const showOf = [
  {
    id: 1,
    imageSrc: "images/image.png",
    altText: "beckend-web-event",
    types: "Backend- Web Event",
    title: "BE - Web Event",
    description:
      "Through this project, I was learn about creating a scalable event management system using Express.js, MongoDB, and various other tools and libraries",
    techs: [
      { icon: <SiExpress />, altText: "Express Icon" },
      { icon: <SiMongodb />, altText: "MongoDB Icon" },
      { icon: <SiMongoose />, altText: "ORM Mongoose Icon" },
    ],
    link: "https://github.com/Agus27111/be-webevent",
  },
  {
    id: 2,
    imageSrc: "images/image.png",
    altText: "beckend-Online Course platfoarm",
    types: "Backend-Online Course platfoarm (Microservices)",
    title: "Be-Online Course platfoarm (Microservices)",
    description:
      "This project is designed using a microservices architecture, demonstrating the flexibility in selecting different programming languages for various services With Express and Laravel.",
    techs: [
      { icon: <SiExpress />, altText: "Express Icon" },
      { icon: <SiLaravel />, altText: "Laravel Icon" },
      { icon: <SiSequelize />, altText: "Sequelize Icon" },
      { icon: <SiMysql />, altText: "MySql Icon" },
    ],
    link: "https://github.com/Agus27111/be-microservice",
  },
  {
    id: 3,
    imageSrc: "images/image.png",
    altText: "beckend-Survei-Pilkada",
    types: "Backend-Survei-Pilkada",
    title: "Be-Survei-Pilkada",
    description:
      "This project is a Backend Election Survey Application built with Express.js. It manages data for candidates, respondents, and survey results, storing respondents'.",
    techs: [
      { icon: <SiExpress />, altText: "Express Icon" },
      { icon: <SiSequelize />, altText: "Sequelize Icon" },
      { icon: <SiPostgresql />, altText: "PostgresSql Icon" },
    ],
    link: "https://github.com/Agus27111/be-survei-pilkada",
  },
  {
    id: 4,
    imageSrc: "images/image.png",
    altText: "beckend-expressTS-social-media",
    types: "Backend-express TypeScript social-media",
    title: "Be-expressTS-social-media",
    description:
      "This project focuses on building a social media platform with features such as authentication using JWT, password hashing with bcrypt, token storage in cookies, and user information storage in Redis.",
    techs: [
      { icon: <SiExpress />, altText: "Express Icon" },
      { icon: <SiPrisma />, altText: "Prisma Icon" },
      { icon: <SiPostgresql />, altText: "PostgresSql Icon" },
      { icon: <SiTypescript />, altText: "SiTypescript  Icon" },
      { icon: <DiRedis />, altText: "Redis  Icon" },
    ],
    link: "https://github.com/Agus27111/expressTS-social-media",
  },
];

export default showOf;
