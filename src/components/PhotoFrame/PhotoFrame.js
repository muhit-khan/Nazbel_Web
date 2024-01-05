import React from 'react';
import './PhotoFrame.css';

const PhotoFrame = ({ imagePath }) => {
    return (
        <div className='photo-frame-container'>
            <img className='photo-frame' src={imagePath} alt="alternative-text" />
        </div>
    );
}

export default PhotoFrame;
