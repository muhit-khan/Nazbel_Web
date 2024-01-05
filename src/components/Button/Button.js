import React from 'react';
import './Button.css';

const Button = ({ label, onClick }) => {
    return (
        <button className="rounded-button" onClick={onClick}>
            {label}
        </button>
    );
}

export default Button;
