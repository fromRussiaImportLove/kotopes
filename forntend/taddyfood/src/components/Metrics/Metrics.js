import React from 'react'
import './Metrics.css';
import { ResponsiveBar } from '@nivo/bar'


function Metrics({data}) {

    return (
        <div className="metrics">
            <div className="metrics__container">
                <ResponsiveBar
                data={data}
                keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
                indexBy="country"
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
                    legend: 'country',
                    legendPosition: 'middle',
                    legendOffset: 32
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'food',
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
                <select className="metrics__select">
                    <option value="shelter-1">Приют 1</option>
                    <option value="shelter-2">Приют 2</option>
                    <option value="shelter-3">Приют 3</option>
                    <option value="shelter-4">Приют 4</option>
                    <option selected value="all">Все приюты</option>
                </select>
                <form className="metrics__form">
                    <h2 className="metrics__title">Настройка цен</h2>
                    <label className="metrics__label">Цена за КотоДень<input className="metrics__input" type="text"/></label>
                    <label className="metrics__label">Цена за КотоНеделю<input className="metrics__input" type="text"/></label>
                    <label className="metrics__label">Цена за КотоМесяц<input className="metrics__input" type="text"/></label>
                    <button className="metrics__button">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Metrics;