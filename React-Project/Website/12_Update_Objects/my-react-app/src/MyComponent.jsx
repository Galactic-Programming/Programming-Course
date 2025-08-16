import React, { useState } from 'react';

function MyComponent() {
    const [car, setCar] = useState({
        brand: 'Toyota',
        model: 'Corolla',
        year: 2020
    });

    function handleBrandChange(event) {
        setCar(car => ({...car, brand: event.target.value}));
    }

    function handleModelChange(event) {
        setCar(car => ({...car, model: event.target.value}));
    }

    function handleYearChange(event) {
        setCar(car => ({...car, year: event.target.value}));
    }

 return (<div>
    <p>Your favorite car is: {car.brand} {car.model} {car.year}</p>

    <input type="text" value={car.brand} onChange={handleBrandChange}/><br />
    <input type="text" value={car.model} onChange={handleModelChange}/><br />
    <input type="number" value={car.year} onChange={handleYearChange}/><br />

 </div>);
}

export default MyComponent;