import { useState, useRef } from "react";
import Review from "./Review";
function Carousel({ data, styles }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsRef = useRef(null);
  const handlePrev = () => {
    if (activeIndex === 0) {
      return;
    }
    const container = testimonialsRef.current;
    if (container) {
      const activeReview = container.children[activeIndex];
      const scrollLeft = activeReview.offsetWidth;
      container.scrollBy({
        left: -scrollLeft,
        behavior: "smooth",
      });
    }
    setActiveIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };
  const handleNext = () => {
    if (activeIndex === data.length - 1) {
      return;
    }
    const container = testimonialsRef.current;
    if (container) {
      const activeReview = container.children[activeIndex];
      const scrollRight = activeReview.offsetWidth;
      container.scrollBy({
        left: scrollRight,
        behavior: "smooth",
      });
    }
    setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
  };
  const handleMoveTo = (index) => {
    const container = testimonialsRef.current;
    if (container) {
      const activeReview = container.children[index];
      activeReview.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
    setActiveIndex(index);
  };
  return (
    <div className={styles.carousel}>
      <div
        className={
          activeIndex === 0
            ? `${styles["scroll-button"]} ${styles["scroll-button-disabled"]}`
            : styles["scroll-button"]
        }
        onClick={handlePrev}
      >
        <i className="fa-solid fa-angle-left"></i>
      </div>
      <div ref={testimonialsRef} className={styles.testimonials}>
        {data.map((review) => (
          <Review key={review.id} review={review} styles={styles} />
        ))}
      </div>
      <div className={styles["scroll-indices"]}>
        {data.map((review, index) => (
          <span
            key={review.id}
            className={
              activeIndex === index
                ? `${styles["scroll-index"]} ${styles["scroll-index-active"]}`
                : styles["scroll-index"]
            }
            onClick={() => handleMoveTo(index)}
          ></span>
        ))}
      </div>
      <div
        className={
          activeIndex === data.length - 1
            ? `${styles["scroll-button"]} ${styles["scroll-button-disabled"]}`
            : styles["scroll-button"]
        }
        onClick={handleNext}
      >
        <i className="fa-solid fa-angle-right"></i>
      </div>
    </div>
  );
}

export default Carousel;
