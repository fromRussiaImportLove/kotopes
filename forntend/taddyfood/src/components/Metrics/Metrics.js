import React from 'react'
import './Metrics.css';
import { ResponsiveBar } from '@nivo/bar'



function Metrics({data, handleSubmitForm}) {

    const [dataSelect, setData] = React.useState([]);
    const [amount, setAmount] = React.useState('');
    const [price, setPrice] = React.useState('');

    //получение метрик по приюту
    function handleSelect(evt) {
            setData([data.find(item => item.shelter === evt.target.value)])     
    }

    function handleAmountInput(evt) {
        setAmount(evt.target.value)
    }

    function handlePriceInput(evt) {
        setPrice(evt.target.value)
    }

    function handleSubmit() {
        handleSubmitForm(amount, price)
    }

    return (
        <div className="metrics">
            <div className="metrics__container">
                <ResponsiveBar
                data={dataSelect}
                keys={[ 'day', 'week', 'month']}
                indexBy="shelter"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                valueScale={{ type: 'linear' }}
                colors={{ scheme: 'nivo' }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: '#38bcb2',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#eed312',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'fries'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'sandwich'
                        },
                        id: 'lines'
                    }
                ]}
                borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Shelter',
                    legendPosition: 'middle',
                    legendOffset: 32
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Amout',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
            />
            </div>
            <div className="metrics__input-container">
                <select className="metrics__select" onChange={handleSelect}>
                    {data.map((item) => (
                        <option key={item.id} value={item.shelter}>{item.shelter}</option>
                    ))}
                </select>
                <form className="metrics__form" onSubmit={handleSubmit}>
                    <h2 className="metrics__title">Настройка цен</h2>
                    <label className="metrics__label">Количество продаж<input className="metrics__input" type="text" onChange={handleAmountInput}/></label>
                    <label className="metrics__label">Минимальная стоимость КотоДня<input className="metrics__input" type="text" onChange={handlePriceInput}/></label>
                    <button className="metrics__button">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Metrics;