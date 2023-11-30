import Thumbnail1 from "../../assets/image-product-1-thumbnail.jpg";
import Thumbnail2 from "../../assets/image-product-2-thumbnail.jpg";
import Thumbnail3 from "../../assets/image-product-3-thumbnail.jpg";
import Thumbnail4 from "../../assets/image-product-4-thumbnail.jpg";

import styles from "./ImageGalleryList.module.css";

const THUMBNAILS = [
  { id: crypto.randomUUID(), image: Thumbnail1, active: true, index: 0 },
  { id: crypto.randomUUID(), image: Thumbnail2, active: false, index: 1 },
  { id: crypto.randomUUID(), image: Thumbnail3, active: false, index: 2 },
  { id: crypto.randomUUID(), image: Thumbnail4, active: false, index: 3 },
];

export function ImageGalleryList({ currentIndex, setCurrentIndex }) {
  return (
    <>
      <ul className={styles["gallery-list"]}>
        {THUMBNAILS.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setCurrentIndex(item.index)}
              className={`${styles["gallery-item"]} ${
                currentIndex === item.index ? styles.active : ""
              }`}
            >
              {/* adds white effect on hover */}
              <div className={styles.filter}></div>
              
              <img src={item.image} alt="shoe thumbnail" />
            </li>
          );
        })}
      </ul>
    </>
  );
}
