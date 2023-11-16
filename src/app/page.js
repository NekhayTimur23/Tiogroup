"use client";
import { useEffect, useState } from "react";
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
import ButtonComp from "@/components/ButtonSection/ButtonComp";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <Main onClick={toggleModal} />
        <About onClick={toggleModal} />
        <Services />
        <Gallery />
        <Concultation onClick={toggleModal} />
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
