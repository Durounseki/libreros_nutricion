import { useState, useRef } from "react";
import Review from "./Review";
function Carousel({ data, styles }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsRef = useRef(null);
  const handlePrev = () => {
    const container = testimonialsRef.current;
    const activeReview = container.children[activeIndex];
    if (container) {
      const scrollLeft = activeReview.offsetWidth;
      container.scrollBy({
        left: -scrollLeft,
        behavior: "smooth",
      });
    }
    console.log(activeIndex);
    setActiveIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };
  const handleNext = () => {
    const container = testimonialsRef.current;
    const activeReview = container.children[activeIndex];
    if (container) {
      const scrollRight = activeReview.offsetWidth;
      container.scrollBy({
        left: scrollRight,
        behavior: "smooth",
      });
    }
    console.log(activeIndex);
    setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
  };
  return (
    <div className={styles.carousel}>
      <div className={styles["scroll-button"]} onClick={handlePrev}>
        <i className="fa-solid fa-angle-left"></i>
      </div>
      <div ref={testimonialsRef} className={styles.testimonials}>
        {data.map((review) => (
          <Review key={review.id} review={review} styles={styles} />
        ))}
      </div>
      <div className={styles["scroll-button"]} onClick={handleNext}>
        <i className="fa-solid fa-angle-right"></i>
      </div>
    </div>
  );
}

export default Carousel;
