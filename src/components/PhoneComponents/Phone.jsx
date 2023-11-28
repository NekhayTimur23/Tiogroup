import styles from "./Phone.module.sass";
import MainSectionPhone from "./mainSectionPhone/MainSectionPhone";
import AboutSectionPhone from "./aboutSectionPhone/AboutSectionPhone";
import ServicesSectionPhone from "./servicesSectionPhone/ServicesSectionPhone";
import GallerySectionPhone from "./gallerySectionPhone/GallerySectionPhone";
import HeaderSectionPhone from "./headerSectionPhone/HeaderSectionPhone";
import ConsultationSectionPhone from "./consultationSectionPhone/ConsultationSectionPhone";

function Phone() {
  return (
    <div className={styles.phone}>
      <div className={styles.phoneContainer}>
        <div className={styles.phoneContent}>
          <div className={styles.phoneSections}>
            <HeaderSectionPhone />
            <MainSectionPhone />
            <AboutSectionPhone />
            <ServicesSectionPhone />
            < ConsultationSectionPhone />
            <GallerySectionPhone />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phone;
