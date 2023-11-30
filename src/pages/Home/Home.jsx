import { ImageSlider } from "./ImageSlider";
import { ShoeInformation } from "./ShoeInformation";
import { ImageGallery } from "./ImageGallery";
import { useState } from "react";
import IMG1 from "../../assets/image-product-1.jpg";
import IMG2 from "../../assets/image-product-2.jpg";
import IMG3 from "../../assets/image-product-3.jpg";
import IMG4 from "../../assets/image-product-4.jpg";

const SLIDER = [
  { IMAGE: IMG1 },
  { IMAGE: IMG2 },
  { IMAGE: IMG3 },
  { IMAGE: IMG4 },
];

import styles from "./Home.module.css";

export function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      <main>
        <section className={styles.hero}>
          <div className="even-columns">
            <div aria-label="Image gallery" className={styles.slider}>
              <div className={styles["slider-mobile"]}>
                <ImageSlider
                  SLIDER={SLIDER}
                  currentIndex={currentIndex}
                  setCurrentIndex={setCurrentIndex}
                />
              </div>
              <ImageGallery
                SLIDER={SLIDER}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
              />
            </div>
            <div className="container">
              <div>
                <ShoeInformation className={styles.test}/>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
