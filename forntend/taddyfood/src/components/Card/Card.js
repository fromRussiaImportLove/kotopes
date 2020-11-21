import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

function Card({ title, linkTo }) {
    return (
        <div className="card">
            <Link to={{pathname: `/${linkTo}`}} className="card__link">
                <div className="card__image"></div>
            </Link>
            <h2 className="card__title">{title}</h2>
        </div>
    )
}

export default Card;