import React from 'react';
import './Main.css';
import Card from '../Card/Card';

function Main() {
    return (
        <section className="main">
            <div className="main__container">
                <p className="main__description">Что то о метриках</p>
                <div className="main__cards">
                    <Card title="Метрики с котами"/>
                    <Card title="Метрики с собаками"/>
                    <Card title="Все метрики"/>
                </div>
            </div>
        </section>
    )
}

export default Main;