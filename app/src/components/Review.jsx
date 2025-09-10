function Review({ review, styles }) {
  return (
    <div className={styles["review-container"]}>
      <div className={styles.review}>
        <h3 className={styles["reviewer"]}>{review.author}</h3>
        <p>
          <span>
            {Array.from({ length: 5 }, (_, index) => {
              const isFilled = index < review.rating;
              return (
                <i
                  key={index}
                  className={
                    isFilled ? "fa-solid fa-star" : "fa-regular fa-star"
                  }
                ></i>
              );
            })}
          </span>
          <span>{review.date}</span>
        </p>
        <p className={styles["review-text"]}>{review.text}</p>
      </div>
    </div>
  );
}

export default Review;
