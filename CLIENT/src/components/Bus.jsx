import React from 'react'
import BusCard from '../layouts/BusCard';

function Bus () {
    return (
      <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
        <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">
        BUS
        </h1>
  
        <div className=" flex flex-wrap gap-8 justify-center">
          <DishesCard img={img1} title="Offers" price="$10.99" />
          <DishesCard img={img1} title="Offers" price="$10.99" /> 
          <DishesCard img={img1} title="Offers" price="$10.99" />
  
        </div>
      </div>
    );
  };

export default Bus