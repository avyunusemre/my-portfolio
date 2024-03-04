"use client";

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
        ref = {ref}
        initial={{ opacity: 0, y: 100 }}
        animate= {{ opacity: 1, y: 0 }}
        transition= {{ delay: 0.175 }}
        id='about'
        >
        <SectionHeading>About</SectionHeading> 
        <p className="mb-3">
        Nachdem ich 2 Jahre lang in der Türkei als Rechtsanwalt gearbeitet habe{" "}
        bin ich nach Deutschland einwandert. Ich wollte neues Leben mit neue Karrierre anfangen.
        Ich habe immer Interesse an Software. Deswegen dachte ich, dass ich in diesem Bereich mit freude arbeiten kann. 
        Ich habe an den zwei Bootcamps teilgenommen. 
        Wenn ich die Abschlussprojekte mitrechne, habe ich etwa <span className="font-medium">zwei Jahre lang</span> Software gelernt. 
        Dann habe ich mich um drei Stelle beworben und 2 von Ihnen habe ich Angebot bekommen.
        Danach habe ich <span className="font-medium">2 Jahre lang bei der Firma CSTx Software Engineering GmbH als Full Stack Java Entwickler gearbeitet.</span>.{" "}{" "}{" "}
        <span className="italic">Mein Lieblingsteil des Programmierens</span> ist der Problemlösungsaspekt.Ich liebe das Gefühl, endlich eine Lösung für ein Problem zu finden. 
        Meine Schwerpunkt ist das Backend mit den {" "}
        <span className="font-medium">
          SpringBoot, JPA, Hibernate, JDBC und relationale Datenbank wie MySQL, MariaDB
        </span>
        . Ich habe auch mit Java Server Faces und Primefaces gearbeitet.
          Ich kenne auch React und Javascript.
          Ich bin derzeit auf der Suche nach {" "}
        <span className="font-medium">einer Vollzeitstelle</span> als Fullstack Softwareentwickler.
      </p>

      <p>
        <span className="italic">Ich habe auch ein Youtube-Kanal.</span>{" "}
         Ich erkläre manche Software Themen in meinem Kanal auf Türkisch.{" "}
         Ich mag Videospiele und Wandern. 
      </p>
    </motion.section>
  )
}
