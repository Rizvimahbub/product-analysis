import React from 'react';
import useReviews from '../../hooks/useReviews';
import ShowReview from '../ShowReview/ShowReview';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useReviews('review.json')
    return (
        <div className='reviews'>
            {
                reviews.map(review => <ShowReview
                    key={review.id}
                    review={review}
                ></ShowReview>)
            }
        </div>
    );
};

export default Reviews;