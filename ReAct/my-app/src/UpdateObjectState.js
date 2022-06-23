import React from 'react';
import { useState } from 'react';

function Car() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: 1999,
        color: "red"
    });


    const changeColor = (color) => {
        setCar(previousState => {
            return {
                ...previousState, color: color
            }
        });
    }
    return (
        <div className='container'>
            <h1 style={{ backgroundColor: car.color }}>My {car.brand}</h1>
            <p>
                It is a <span style={{ color: car.color }}>{car.color}</span>
                {car.model}
                from {car.year}.
            </p>
            <button
                type="button" className='btn'
                onClick={() => changeColor("blue")}
            >Blue</button>
            <button
                type="button" className='btn'
                onClick={() => changeColor("red")}
            >Red</button>
            <button
                type="button" className='btn'
                onClick={() => changeColor("pink")}
            >Pink</button>
            <button
                type="button" className='btn'
                onClick={() => changeColor("green")}
            >Green</button>

        </div>
    );
}

export default Car;
