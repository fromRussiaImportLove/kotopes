import React from 'react';
import './Main.css';
import Card from '../Card/Card';
import cat from '../../images/cat.jpg';
import dog from '../../images/dog.jpg';
import catDog from '../../images/catdog.jpg'

function Main() {
    return (
        <section className="main">
            <div className="main__container">
                <p className="main__description">Что то о метриках</p>
                <div className="main__cards">
                    <Card title="Метрики с котами" linkTo="cat" imgSrc={cat} alt="Кот"/>
                    <Card title="Метрики с собаками" linkTo="dog" imgSrc={dog} alt="Собака"/>
                    <Card title="Все метрики" linkTo="all" imgSrc={catDog} alt="Кот и Пес"/>
                </div>
            </div>
        </section>
    )
}

export default Main;