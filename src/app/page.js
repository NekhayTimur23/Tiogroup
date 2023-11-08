import styles from "./page.module.sass";
import Main from "@/components/MainSection/MainSection";
import About from "@/components/AboutSection/AboutSection";
import Head from "next/head";
import Services from "@/components/ServicesSection/ServicesSection";
import Concultation from "@/components/ConcultationSection/Concultation";
import Reviews from "@/components/ReviewsSection/ReviewsSection";
import Footer from "@/components/Footer/Footer";

export default function Home() {
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
        <Main/>
        <About />
        <Services />
        <Concultation />
        <Reviews />
        <Footer />
      </div>
    </>
  );
}