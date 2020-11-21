import React from 'react';
import './Main.css';
import Card from '../Card/Card';

function Main() {
    return (
        <section className="main">
            <div className="main__container">
                <p className="main__description">Что то о метриках</p>
                <div className="main__cards">
                    <Card title="Метрики с котами" linkTo="cat"/>
                    <Card title="Метрики с собаками" linkTo="dog"/>
                    <Card title="Все метрики" linkTo="all"/>
                </div>
            </div>
        </section>
    )
}

export default Main;