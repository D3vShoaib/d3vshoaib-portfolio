import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter, FaDiscord } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";

import {
  SiTypescript,
  SiShadcnui,
  SiPrisma,
  SiWoocommerce,
  SiNestjs,
  SiReact,
  SiSupabase,
  SiExpress,
  SiPuppeteer,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiGraphql,
  SiLangchain,
  SiThreedotjs,
  SiElectron,
  SiPython,
  SiDocker,
  SiStreamlit,
  SiDrizzle,
  SiMui,
  SiGit,
} from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { TbApi, TbBrandReactNative } from "react-icons/tb";
import { DiRedis } from "react-icons/di";

export const siteConfig = {
  name: "Shoaib Ahmad",
  title: "Shoaib Ahmad | Full-Stack Developer",
  email: "D3vShoaib@Gmail.com",
  alias: "Aurora",
  description:
    "Shoaib Ahmad is a web developer who builds scalable, user-centric applications using Next.js, WordPress, and other frameworks. With a focus on performance, accessibility, and clean code, Shoaib creates digital solutions that are both functional and aesthetically pleasing.",
  keywords:
    "Shoaib Ahmad, full-stack developer, web development, Next.js, WordPress, React, Node.js, scalable applications, clean code",
  url: "https://d3vshoaib.netlify.app",
  taglines: [
    "🚀 Coding Simplicity, Crafting Solutions: Bringing Ideas to Life, One Line at a Time. ✨ Let's transform challenges into digital possibilities with precision and creativity!",
    "🎨 Where Code Meets Creativity: Building Digital Experiences that Matter. 🌐 From intuitive interfaces to powerful backend systems, I create solutions that engage and inspire.",
    "💡 Innovating Beyond the Screen: Crafting Seamless Digital Journeys. 🌟 From concept to completion, let’s build the future, one pixel and one line of code at a time.",
  ],
  titles: [
    "Full-Stack Developer (TrustMe)",
    "Open Source Contributor",
    // "AI/ML ",
  ],
  socialLinks: [
    {
      icon: <FaGithub />,
      url: "https://github.com/d3vshoaib",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/d3vshoaib/",
    },
    {
      icon: <FaSquareXTwitter />,
      url: "https://x.com/d3vshoaib",
    },
    // {
    //   icon: <FaDiscord />,
    //   url: "https://discord.gg/pwYGjDebkF",
    // },
    {
      icon: <IoIosMail />,
      url: "mailto:D3vShoaib@Gmail.com",
    },
  ],
  sections: {
    tableOfContents: [
      {
        id: "about-me",
        label: "ABOUT ME",
      },
      {
        id: "experiences",
        label: "EXPERIENCES",
      },
      {
        id: "projects",
        label: "PROJECTS",
      },
      {
        id: "technologies",
        label: "TECHNOLOGIES",
      },
      {
        id: "contact",
        label: "CONTACT",
      },
    ],
    aboutMe: `
            <p> 
                Hi, I'm Shoaib. I've been building web applications for the last 1+ Years. I've worked with startups, multiple businesses, and large enterprises to build and scale their web applications. Interested in many tech-domain, I prefer to call myself a problem solver. :)
            </p>

            <p>
                When I’m not coding, you’ll find me reading Manga/Novels <strong>VinlandSaga</strong> || <strong>RevernedInsanity</strong>, ricing my new Fav Linux distro, Let's connect—I'd love to help with <strong>website</strong> or <strong>API</strong> project!
            </p>
        `,
    experiences: [
      {
        company: "AndroCorders Agency",
        position: "Core Developer",
        duration: "2024 - Present",
        description:
          "Working as a developer at a web development agency focused on delivering high-quality websites and custom digital solutions. Contribute to the end-to-end development process, from client consultation and project planning to design implementation and deployment. Skilled in building scalable web apps, buisness dahoboards, and custom API integrations using modern frameworks like React & Material-ui . Collaborate with a team of developers and assist in coordinating projects to ensure timely delivery and client satisfaction.",
      },
    ],
    projects: [
      {
        title: "Shoaib Ahmad | Portfolio Website",
        description:
          "This is my portfolio website. I built it to showcase my projects and skills. It is a static site built with Next.js, Tailwind CSS, and Shadcn/UI. I used the following technologies to build it:",
        logo: "/portfo.png",
        repoLink: "https://github.com/D3vShoaib/d3vshoaib-portfolio",
        technologies: [
          {
            icon: <RiNextjsFill className="text-[#FFF]" />,
            name: "Next.js",
          },
          {
            icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
            name: "Tailwind CSS",
          },
          {
            icon: <SiShadcnui className="text-[#FFF]" />,
            name: "Shadcn/UI",
          },
          {
            icon: <SiTypescript className="text-[#3178C6]" />,
            name: "TypeScript",
          },
        ],
        link: "https://d3vshoaib.netlify.app",
      },
      {
        title: "PDF-Lens",
        description:
          "PdfLens is an AI-powered chatbot designed to make working with PDF documents easier and more efficient. Leveraging RAG technology, PdfLens helps you quickly search, extract, and summarize information from PDFs. Whether you're a researcher, student, or professional, PdfLens is here to make your life simpler!",
        logo: "/pdflens.png",
        repoLink: "https://github.com/D3vShoaib/PdfLens",
        technologies: [
          {
            icon: <SiStreamlit className="text-[#FF4B4B]" />,
            name: "StreamLit",
          },
          {
            icon: <FcGoogle className="text-[#412991]" />,
            name: "Gemini-API",
          },
          {
            icon: <SiLangchain className="text-[#06B6D4]" />,
            name: "LangChain",
          },
          {
            icon: <SiPython className="text-[#3178C6]" />,
            name: "Python",
          },
        ],
        link: "https://github.com/D3vShoaib/PdfLens",
      },
      // {
      //   title: "WhatAboutPets",
      //   description:
      //     "WhatAboutPets is a comprehensive blog and e-commerce platform I built to provide valuable insights into pet care, health, and wellness. Alongside engaging articles, the site features an integrated WooCommerce store, offering a variety of pet-related products. I managed everything from designing the user-friendly interface to implementing SEO strategies and setting up the online shop. This project highlights my expertise in both content-driven sites and e-commerce solutions, creating a complete experience for pet lovers.",
      //   logo: "/whataboutpets-logo.png",
      //   repoLink: "",
      //   technologies: [
      //     {
      //       icon: <RiNextjsFill className="text-[#FFF]" />,
      //       name: "Next.js",
      //     },
      //     {
      //       icon: <RiWordpressFill className="text-[#21759B]" />,
      //       name: "WordPress",
      //     },
      //     {
      //       icon: <SiTypescript className="text-[#3178C6]" />,
      //       name: "TypeScript",
      //     },
      //     {
      //       icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
      //       name: "Tailwind CSS",
      //     },
      //     {
      //       icon: <SiShadcnui className="text-[#FFF]" />,
      //       name: "Shadcn/UI",
      //     },
      //     {
      //       icon: <GrGraphQl className="text-[#E10098]" />,
      //       name: "GraphQL",
      //     },
      //     {
      //       icon: <SiWoocommerce className="text-[#96588A]" />,
      //       name: "Woocommerce",
      //     },
      //   ],
      //   link: "https://whataboutpets.com",
      // },
      // {
      //   title: "丹丹影院 - ynct55.com",
      //   description:
      //     "ynct55.com is a Chinese-language streaming platform offering free access to a diverse library of movies, TV shows, and anime. Managed all aspects of the project, from backend infrastructure and database setup to front-end design and user experience. Implemented efficient streaming solutions and optimized the platform for SEO to reach a broader audience. This project highlights my skills in building and maintaining a complete streaming site, tailored specifically for a Chinese-speaking user base.",
      //   logo: "/ynct55-logo.png",
      //   repoLink: "",
      //   technologies: [
      //     {
      //       icon: <RiNextjsFill className="text-[#FFF]" />,
      //       name: "Next.js",
      //     },
      //     {
      //       icon: <RiWordpressFill className="text-[#21759B]" />,
      //       name: "WordPress",
      //     },
      //     {
      //       icon: <SiTypescript className="text-[#3178C6]" />,
      //       name: "TypeScript",
      //     },
      //     {
      //       icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
      //       name: "Tailwind CSS",
      //     },
      //     {
      //       icon: <SiShadcnui className="text-[#FFF]" />,
      //       name: "Shadcn/UI",
      //     },
      //     {
      //       icon: <SiPrisma className="text-[#2D3748]" />,
      //       name: "Prisma",
      //     },
      //   ],
      //   link: "https://www.ynct55.com",
      // },
    ],
    technologies: {
      main: [
        {
          name: "Next.js",
          icon: <RiNextjsFill className="text-[#FFF]" />,
          description: "A React framework",
        },
        {
          name: "React",
          icon: <SiReact className="text-[#61DAFB]" />,
          description: "A JavaScript UI library",
        },
        {
          name: "Material-UI",
          icon: <SiMui className="text-[#0081CB]" />,
          description: "A popular React UI framework",
        },
        {
          name: "Tailwind CSS",
          icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
          description: "A CSS framework",
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-[#3178C6]" />,
          description: "Typed Javascript",
        },
        {
          name: "Git",
          icon: <SiGit className="text-[#F05032]" />,
          description: "A version control system",
        },
        {
          name: "Prisma",
          icon: <SiPrisma className="text-[#4a5b77]" />,
          description: "An ORM for databases",
        },
        {
          name: "NestJS",
          icon: <SiNestjs className="text-[#E0234E]" />,
          description: "A modern alternative to Express.js",
        },
        {
          name: "Express.js",
          icon: <SiExpress className="text-[#FFF]" />, // ORIGINALLY BLACK
          description: "A Node.js framework",
        },
      ],
      other: [
        {
          name: "HTML5",
          icon: <SiHtml5 className="text-[#E34F26]" />,
        },
        {
          name: "CSS",
          icon: <SiCss3 className="text-[#009df7]" />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-[#F7DF1E]" />,
        },
        {
          name: "NodeJS",
          icon: <SiNodedotjs className="text-[#339933]" />,
        },
        {
          name: "PHP",
          icon: <SiPhp className="text-[#5d6dad]" />,
        },
        {
          name: "MySQL",
          icon: <SiMysql className="text-[#5798ca]" />,
        },
        {
          name: "Supabase",
          icon: <SiSupabase className="text-[#0084d4]" />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-[#47A248]" />,
        },
        {
          name: "Redis",
          icon: <DiRedis className="text-[#DC382D]" />,
        },
        {
          name: "GraphQL",
          icon: <SiGraphql className="text-[#E10098]" />,
        },
        {
          name: "RESTful API",
          icon: <TbApi className="text-[#FF5733]" />,
        },
        {
          name: "Three.js",
          icon: <SiThreedotjs className="text-[#FFF]" />, // ORIGINALLY BLACK
        },
        {
          name: "WooCommerce",
          icon: <SiWoocommerce className="text-[#96588A]" />,
        },
        {
          name: "React Native",
          icon: <TbBrandReactNative className="text-[#61DAFB]" />,
        },
        {
          name: "Electron",
          icon: <SiElectron className="text-[#47848F]" />,
        },
        {
          name: "Docker",
          icon: <SiDocker className="text-[#2496ED]" />,
        },
        {
          name: "Shadcn/UI",
          icon: <SiShadcnui className="text-[#FFF]" />,
        },
        {
          name: "Drizzle",
          icon: <SiDrizzle className="text-[#00A7E1]" />,
        },
      ],
    },
  },
};
