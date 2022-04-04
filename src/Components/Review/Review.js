import React from 'react';
import useReviews from '../../hooks/useReviews';
import './Review.css';

const Review = (props) => {
    const { name, img, review, ratings } = props.review;
    return (
        <div className='review-info'>
            <div className='review-img'>
                <img src={img} />
            </div>
            <div className='review-description'>
                <h2>{name}</h2>
                <h4>Comment : '{review}'</h4>
                <h5>Ratings : {ratings} stars</h5>
            </div>
        </div>
    );
};

export default Review;