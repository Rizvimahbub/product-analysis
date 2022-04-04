import React, { useState } from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Home.css';

const Home = () => {
    const [reviews, setReviews] = useReviews('review.json');
    const [reviews3, setReview] = useState([])

    const showReview = () => {
        const reviews3 = reviews.slice(1,4);
        setReview(reviews3);
    }
    return (
        <div>
            <div className='home-container'>
                <div className='info-container'>
                    <h1>THE <span className='s-1'>B</span><span className='s-2'>M</span><span className='s-3'>W</span> <span className='s-4'>M</span>  1000 RR</h1>
                    <p>Your competitive spirit drives you. Your passion dominates and challenges you. The search for more defines every millisecond: pure motorsport. High performance, high-tech materials, the highest-quality workmanship and exclusivity down to the last detail: The M RR is the first M model from BMW Motorrad. Its genes come directly from professional racing. The M RR and M RR with M Competition package offers pure racing technology for the highest performance demands in motorsport and for adrenalin-driven perfectionists on the road. Because #NeverStopChallenging is more than a promise. It’s a commitment.</p>
                    <button>Live Demo</button>
                </div>
                <div className='img-container'>
                    <img src='https://ic1.maxabout.us/autos/tw_india//B/2021/3/bmw-m1000rr-front-3-quarter-vioew.jpg' />
                </div>
            </div>

            <h1>Customer Reviews (3)</h1>

            <div className='review-container'>
            {
                reviews3.map(review => <Review
                review={review}
                key={review.id}></Review>)
            }
            </div>
            
            <button onClick={showReview}>See All Reviews</button>
        </div>
    );
};

export default Home;