import React from 'react';
import './Main.css';
import Card from '../Card/Card';
import cat from '../../images/catt.png';
import dog from '../../images/dogg.png';
import catDog from '../../images/catdogg.jpg'

function Main() {
    return (
        <section className="main">
            <div className="main__container">
                <p className="main__description">Приложение для оптимизации ценообразования</p>
                <div className="main__cards">
                    <Card title="Метрики с собачками" linkTo="dog" imgSrc={dog} alt="Пес"/>
                    <Card title="Метрики с котиками" linkTo="cat" imgSrc={cat} alt="Кот"/>
                    <Card title="Метрики с котиками и собачками" linkTo="all" imgSrc={catDog} alt="Кот и Пес"/>
                </div>
            </div>
        </section>
    )
}

export default Main;