import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "C",
    Image: "/C.png",
    width: 80,
    height: 80,
  },
  {
    name: "C++",
    Image: "/C++.png",
    width: 80,
    height: 80,
  },
  {
    name: "SQL",
    Image: "/SQL.png",
    width: 80,
    height: 80,
  },
  {
    name: "PostgreSQL",
    Image: "/PostgreSQL.png",
    width: 80,
    height: 80,
  },
  {
    name: "Godot Engine",
    Image: "/Godot.svg",
    width: 80,
    height: 80,
  },
  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Python",
    Image: "/Python.png",
    width: 80,
    height: 80,
  },
  {
    name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
];

export const Socials = [
  {
    name: "Instagram",
    src: "/instagram.svg",
    link: "https://www.instagram.com/emiliano.garin333/",
  },
  {
    name: "Linkedin",
    src: "/Linkedin-logo.png",
    link: "https://www.linkedin.com/in/emiliano-garin-36a2b31ab/",
  },
  {
    name: "GitHub",
    src: "/github.svg",
    link: "https://github.com/EmilianoGarin",
  },
];
export const Projects = [
  {
    title: "Alquivago",
    text: "Fui el encargado del backend de este proyecto, el cual es una pagina web de reservas de alojamientos y locales comerciales. Desarrollado con Python, Flask, MongoDB, React y Next.js.",
    src: "/Alquivago.png",
    link: "https://alquivago-landing.vercel.app/"

  },
  {
    title: "Magic Bullet",
    text: "Magic Bullet es un juego de disparos desarrollado con Godot Engine. Si bien es de mi autoria, mi rol es meramente logica y mecanica. Esta escrito en GDScript.",
    src: "/BalaMagica.png",
  },
  {
    title: "Portfolio",
    text: "Este es mi portfolio, donde muestro mis habilidades y proyectos. Desarrollado con Next.js, React, TypeScript y Tailwind CSS.",
    src: "/Portfolio.png",
  },
  {
    title: "Animalicis",
    text: "Animalicis es un proyecto de una pagina web de mascotas, donde se pueden adoptar y comprar mascotas.Fui encargado del backend del proyecto. Desarrollado con Python, Flask Y PostgreSQL",
    src: "/Animalicis.png",
  },
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/contact-me",
  },
];