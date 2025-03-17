import PropTypes from 'prop-types';
import React, { forwardRef, ForwardRefRenderFunction, useState } from 'react';

export interface Review{
    id: number;
    text: string;
    mark: number;
    username: string;
    img: string;
}
interface ReviewsProps {
    reviews: Review[];
}
const Render = ({filledStars} : {filledStars: number}) => {
    const totalStars = 5;
    const [unfilledStars, setStars] = useState(totalStars)
    const starsArray = [...Array(totalStars)];
    const changeStars = () => {
        setStars((unfilledStars) => unfilledStars > 0 ? unfilledStars - 1 : 0 )
    }
    return (
        <div>
            {starsArray.map((_, index) => (
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
    )

}
  const ReviewsGrid: ForwardRefRenderFunction<HTMLDivElement, ReviewsProps> = (
    { reviews },
    ref
  ) => {
    const [startIndex, setStartIndex] = useState(0);
    const reviewsShow = 4;
    const reviewsSlice = reviews.slice(startIndex, startIndex + reviewsShow);
const handlePrevious = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
};
const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, reviews.length - reviewsShow));
};
    return (
      <div className = "review-container" ref={ref} >
        <button className = "previous" onClick = {handlePrevious} disabled = {startIndex===0}>&lt;</button>
      <div className = "review-greed" >
        
         {reviewsSlice.map((review) => (
                <div className="review" key={review.id}>
                    <h3>Review {review.id}</h3>
                    <Render filledStars = {review.mark}/>
                    <p>{review.text}</p>
                    <span></span>
                    <figure>
                <img src={review.img} alt="user" />
                <figcaption>{review.username}</figcaption>
            </figure>
                    </div>
                    
            ))}
      </div>
      <button className = "next" onClick = {handleNext} disabled={startIndex === reviews.length - reviewsShow}>&gt;</button>
      </div>
    );
  }

export default forwardRef(ReviewsGrid);