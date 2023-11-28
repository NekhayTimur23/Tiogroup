import { useState } from "react";
import styles from "./Phone.module.sass";
import MainSectionPhone from "./mainSectionPhone/MainSectionPhone";
import AboutSectionPhone from "./aboutSectionPhone/AboutSectionPhone";
import ServicesSectionPhone from "./servicesSectionPhone/ServicesSectionPhone";
import GallerySectionPhone from "./gallerySectionPhone/GallerySectionPhone";
import HeaderSectionPhone from "./headerSectionPhone/HeaderSectionPhone";
import ConsultationSectionPhone from "./consultationSectionPhone/ConsultationSectionPhone";

function Phone() {
  const [modalNavOn, setModalNavOn] = useState(false);

  const addModalNav = () => {
    setTimeout(()=>setModalNavOn(!modalNavOn), 200);
  };

  return (
    <div className={styles.phone}>
      <div className={styles.phoneContainer}>
        <div className={styles.phoneContent}>
          <div className={styles.phoneSections} onClick={()=>setModalNavOn(false)}>
            <HeaderSectionPhone
              modalNavOn={modalNavOn}
              addModalNav={addModalNav}
            />
            <MainSectionPhone />
            <AboutSectionPhone />
            <ServicesSectionPhone />
            <ConsultationSectionPhone />
            <GallerySectionPhone />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phone;
