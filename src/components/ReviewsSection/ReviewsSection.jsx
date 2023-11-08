import styles from "./ReviewsSection.module.sass";
import Image from "next/image";

export default function ReviewsSection() {
  return (
    <div className={styles.reviewsSection}>
      <h1>ОТЗЫВЫ</h1>
      <div className={styles.reviewsContainer}>
        <div className={styles.reviewsRightBlock}>
          <Image
            layout="responsive"
            src="./reviews/25.svg"
            width={861}
            height={355}
          />
        </div>
        <div className={styles.reviewsLeftBlock}>
          <div className={styles.reviewsCard}>
            <div className={styles.cardPhoto}>
              <img 
                src="/reviews/team4.jpg"
                width={116}
                height={150}
              />
            </div>
            <div className={styles.cardTextBlock}>
              <p>
                Сайт просто супер. Ребята молодцы, делают свою работу на высоком
                уровне. Товары всегда новые, цены вполне доступные. Часто
                проводятся скидки, акции, что особо радует :) Буду рекомендовать
                всем друзьям и близким.
              </p>
              <div className={styles.cardTextBottom}>
                <p className={styles.cardNameClient}>ЯКОВЛЕВ ВЛАДИМИР</p>
                <p className={styles.cardCompanyName}>"ООО КОМПАНИЯ"</p>
                <div className={styles.cardComma}>
                  <Image layout="responsive" src="./reviews/comma.svg" width={45} height={45} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.reviewsCard}>
            <div className={styles.cardPhoto}>
              <img 
                src="/reviews/team4.jpg"
                width={116}
                height={150}
              />
            </div>
            <div className={styles.cardTextBlock}>
              <p>
                Сайт просто супер. Ребята молодцы, делают свою работу на высоком
                уровне. Товары всегда новые, цены вполне доступные. Часто
                проводятся скидки, акции, что особо радует :) Буду рекомендовать
                всем друзьям и близким.
              </p>
              <div className={styles.cardTextBottom}>
                <p className={styles.cardNameClient}>ЯКОВЛЕВ ВЛАДИМИР</p>
                <p className={styles.cardCompanyName}>"ООО КОМПАНИЯ"</p>
                <div className={styles.cardComma}>
                  <Image layout="responsive" src="./reviews/comma.svg" width={45} height={45} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
