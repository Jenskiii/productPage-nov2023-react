import { ImageGalleryList } from "./ImageGalleryList";
import { ImageSlider } from "./ImageSlider";
import { Modal } from "../../components/ui/Modal";
import styles from "./ImageGallery.module.css";
import { useState } from "react";

export function ImageGallery({ SLIDER, currentIndex, setCurrentIndex }) {
  const [modalIsActive, setModalIsActive] = useState(false);

  return (
    <>
      <div className={styles.gallery}>
        <img
          className={styles["gallery-hero"]}
          src={SLIDER[currentIndex].IMAGE}
          alt="Shoe showcase"
          onClick={() => setModalIsActive((prev) => !prev)}
        />
        <ImageGalleryList
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />

        {modalIsActive && (
          <div className={styles.modal}>
            <Modal active={modalIsActive} setActive={setModalIsActive} />
            <div className={styles["modal-content"]}>
              <button className={styles["modal-button"]} onClick={() => setModalIsActive(false)}>&#10006;</button>
              <ImageSlider
                SLIDER={SLIDER}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
              />
              <ImageGalleryList
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
