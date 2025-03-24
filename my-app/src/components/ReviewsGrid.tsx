import  { forwardRef, ForwardRefRenderFunction, useState, useMemo, useCallback, memo } from 'react';

export interface Review {
  id: number;
  text: string;
  mark: number;
  username: string;
  img: string;
}

interface ReviewsProps {
  reviews: Review[];
}

const Render = memo(({ filledStars }: { filledStars: number }) => {
  const totalStars = 5;
  return (
    <div>
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          style={{
            color: 'black',
            fontSize: '24px',
          }}
        >
          {index < filledStars ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
});

const ReviewsGrid: ForwardRefRenderFunction<HTMLDivElement, ReviewsProps> = ({ reviews }, ref) => {
  const [startIndex, setStartIndex] = useState(0);
  const reviewsShow = 4;

  const handlePrevious = useCallback(() => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  }, []);

  const handleNext = useCallback(() => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, reviews.length - reviewsShow));
  }, [reviews.length]);

  const memorizedStyle = useMemo(() => ({
    transform: `translateX(calc(${-startIndex} * ((100% - 4vw * 3) / ${reviewsShow} + 4vw)))`,
    transition: 'transform 0.5s ease-in-out',
  }), [startIndex]);

  if (reviews.length === 0) {
    return <div>No reviews available</div>;
  }

  return (
    <div className='review-container-with-header' ref={ref}>
      <h2>Что о нас думают?</h2>
      <div className="review-container" >
      
      <button className="previous" onClick={handlePrevious} disabled={startIndex === 0}>
        &lt;
      </button>

      <div className="review-slider">
        <div
          className="review-greed"
          style={memorizedStyle}
        >
          {reviews.map((review) => (
            <div
              className="review"
              key={review.id}
            >
              <span>Review {review.id}</span>
              <Render filledStars={review.mark} />
              <p>{review.text}</p>
              <figure>
                <img src={review.img} alt="user" loading="lazy" />
                <figcaption>{review.username}</figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>

      <button className="next" onClick={handleNext} disabled={startIndex >= reviews.length - reviewsShow}>
        &gt;
      </button>
    </div>
    </div>
  );
};

export default memo(forwardRef(ReviewsGrid));