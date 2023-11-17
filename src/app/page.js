"use client";
import { useEffect, useState, useRef } from "react";
import Modal from "@/components/MainSection/Modal";
import styles from "./page.module.sass";
import Main from "@/components/MainSection/MainSection";
import About from "@/components/AboutSection/AboutSection";
import Head from "next/head";
import Services from "@/components/ServicesSection/ServicesSection";
import Concultation from "@/components/ConcultationSection/Concultation";
import Reviews from "@/components/ReviewsSection/ReviewsSection";
import Footer from "@/components/Footer/Footer";
import Gallery from "@/components/Gallery/Garrery";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
    section5: useRef(null),
  };

  const scrollToSection = (sectionName) => {
    const section = sectionRefs[sectionName].current;
    if (section) {
      const sectionTop = section.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const top = sectionTop + offset;
      const windowHeight = window.innerHeight;
      const scrollTo = top - windowHeight / 2 + section.offsetHeight / 2;
      window.scrollTo({ top: scrollTo, behavior: "smooth" });
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isModalOpen]);

  // overflow: hidden

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Roboto:wght@100;300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.main}>
        <Main
          ref={sectionRefs.section1}
          onNavigate={scrollToSection}
          onClick={toggleModal}
        />
        <About ref={sectionRefs.section2} onClick={toggleModal} />
        <Services ref={sectionRefs.section3} />
        <Gallery ref={sectionRefs.section5} />
        <Concultation ref={sectionRefs.section4} onClick={toggleModal} />
        <Reviews />
        <Footer onClick={toggleModal} />
        {isModalOpen && (
          <Modal onClose={toggleModal}>
            {/* Содержимое модального окна */}
          </Modal>
        )}
      </div>
    </>
  );
}
