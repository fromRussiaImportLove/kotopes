import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

function Card({ title, linkTo, imgSrc, alt }) {
    return (
        <div className="card">
            <Link to={{pathname: `/${linkTo}`}} className="card__link">
                <img className="card__image" src={imgSrc} alt={alt}/>
            </Link>
            <h2 className="card__title">{title}</h2>
        </div>
    )
}

export default Card;