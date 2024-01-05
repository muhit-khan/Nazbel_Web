import React from 'react';
import './Ratings.css';

const Ratings = ({ ratingsData }) => {
    const renderStars = (rating) => {
        const totalStars = 5;
        const filledStars = Math.floor(rating);
        const remainingStars = totalStars - filledStars;

        const starArray = Array.from({ length: filledStars }, (_, index) => (
            <span key={index} className="star filled-star">&#9733;</span>
        ));

        const remainingStarArray = Array.from({ length: remainingStars }, (_, index) => (
            <span key={index} className="star">&#9734;</span>
        ));

        return [...starArray, ...remainingStarArray];
    };

    return (
        <div className="ratings-container">
            {ratingsData.map((data, index) => (
                <div key={index} className="rating-item">
                    <div className="service-name">{data.name}</div>
                    <div className="rating">
                        {renderStars(data.rating)}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Ratings;
