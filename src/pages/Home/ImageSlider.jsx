import styles from "./ImageSlider.module.css";

export function ImageSlider({SLIDER, currentIndex, setCurrentIndex }) {
  //
  function decrementIndex() {
    const firstIndex = currentIndex === 0;
    const newIndex = firstIndex ? SLIDER.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  function incrementIndex() {
    const lastIndex = currentIndex === SLIDER.length - 1;
    const newIndex = lastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <>
      <div>
        <div className={styles.slider} data-type-main>
          <button
            className={styles["arrow-button"]}
            onClick={() => decrementIndex()}
          >
            &#11164;
          </button>
          <img src={SLIDER[currentIndex].IMAGE} alt="Shoe showcase" />
          <button
            className={styles["arrow-button"]}
            onClick={() => incrementIndex()}
          >
            &#11166;
          </button>
        </div>
      </div>
    </>
  );
}
