import Carousel from "@/components/Gallery/Carousel/Carousel";
import styles from "./GallerySectionPhone.module.sass";
import { GoArrowLeft } from "react-icons/go";

function GallerySectionPhone() {
  return (
    <Carousel sectionPhone={true}>
      <div className={styles.galleryPhotoSlider}>
        <p>Зто слайд</p>
        <p>лестай дальше</p>
        1
        <br />
        <p>
          <GoArrowLeft />
        </p>
      </div>
      <div className={styles.galleryPhotoSlider}>2</div>
      <div className={styles.galleryPhotoSlider}>4</div>
      <div className={styles.galleryPhotoSlider}>5</div>
      <div className={styles.galleryPhotoSlider}>6</div>
      <div className={styles.galleryPhotoSlider}>7</div>
      <div className={styles.galleryPhotoSlider}>8</div>
      <div className={styles.galleryPhotoSlider}>9</div>
      <div className={styles.galleryPhotoSlider}>10</div>
      <div className={styles.galleryPhotoSlider}>11</div>
      <div className={styles.galleryPhotoSlider}>12</div>
      <div className={styles.galleryPhotoSlider}>13</div>
      <div className={styles.galleryPhotoSlider}>14</div>
      <div className={styles.galleryPhotoSlider}>15</div>
      <div className={styles.galleryPhotoSlider}>16</div>
    </Carousel>
  );
}

export default GallerySectionPhone;
