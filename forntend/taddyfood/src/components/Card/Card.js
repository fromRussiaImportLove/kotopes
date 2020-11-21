import React from 'react';
import './Card.css';

function Card({ title }) {
    return (
        <div className="card">
            <div className="card__image"></div>
            <h2 className="card__title">{title}</h2>
        </div>
    )
}

export default Card;