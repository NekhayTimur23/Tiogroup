import styles from "./AboutSectionPhone.module.sass";

function AboutSectionPhone() {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.aboutSectionContainer}>
        <div className={styles.aboutSectionContent}>
          <div className={styles.aboutSectionContentTextOne}>
            <p>Наши преимущества</p>
          </div>
          <div className={styles.aboutSectionContentTextTwo}>
            <p>
              Профессионализм: Наш опыт и знания в строительстве гарантируют
              надежность выполнения проектов. Прозрачность: Мы ценим взаимное
              доверие и всегда предоставляем прозрачные условия сотрудничества.
              Гарантия качества: Мы гарантируем качество оказываемых услуг и
              готовы нести ответственность за результаты нашей работы.
            </p>
          </div>
          <div className={styles.aboutSectionContentTextFree}>
            <p>
              Выбрав нас, вы выбираете надежного партнера в мире строительства и
              инженерных решений. Мы всегда готовы приступить к работе над
              вашими проектами и обеспечить их успешное завершение.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSectionPhone;
