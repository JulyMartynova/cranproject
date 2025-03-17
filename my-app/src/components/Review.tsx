import PropTypes from 'prop-types';

interface Review{
    id: number;
    text: string;
    mark: number;
    username: string;
    img: string;
}
interface ReviewsProps {
    reviews: Review[];
}

function Reviews ({reviews}: ReviewsProps) {
    return (
        <div className = "reviews-greed">
            
        </div>
    )
}