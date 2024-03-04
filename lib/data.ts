import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Juristische Fakültät, Selcuk University",
    location: "Konya, Türkei",
    description:
      "Nach 4 Jahren Studium habe ich meinen Abschluss gemacht.",
    icon: React.createElement(GoLaw),
    date: "2011-2015",
  },
  {
    title: "Assistent Anwalt",
    location: "Amtsgericht Konya und Keskin Anwaltskanzleibüro in Trabzon",
    description:
      "Man muss in der Türkei ein Jahr als Assistent Anwalt arbeiten, um Rechtsanwaltlizenz zu erhalten.",
    icon: React.createElement(GoLaw),
    date: "2016-2017",
  },
  {
    title: "Rechtsanwalt",
    location: "Trabzon",
    description:
      "Ich habe ein Jahr lang als Anwalt im Anwaltsbüro gearbeitet. Dann habe ich mit meinem Freund ein Büro gegründet. Dort habe ich noch ein Jahr gearbeitet.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2019",
  },
  {
    title: "Automation Tester und Java Developer Bootcamps",
    location: "online, USA",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaJava),
    date: "2020 - 2022",
  },
  {
    title: "Full Stack Java Entwickler",
    location: "CSTx Software Engineering GmbH, Braunschweig-Deutschland",
    description:
      "Ich habe in dieser Firma zwei Jahre lang als Full Stack Java Entwickler gearbeitet. Für das Backend habe ich SpringBoot, JPA, Hibernate, JDBC, grpc, MariaDB benutzt. Für das Frontend habe ich Java Server Faces, Primefaces und Ajax benutzt.",
    icon: React.createElement(FaJava),
    date: "02/2022 - 02/2024",
  },
] as const;

export const skillsData = [
  "Java",
  "SpringBoot",
  "Hibernate",
  "JPA",
  "JDBC",
  "grpc",
  "MariaDB",
  "MySql",
  "PostgreSQL",
  "JSF",
  "Primefaces",
  "Ajax",
  "xHTML",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Gradle",
  "Maven",
  "Gitlab"
] as const;
