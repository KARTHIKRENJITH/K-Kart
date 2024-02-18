import { React, useEffect, useState } from "react";

import img1 from "../assets/img/img1.jpg";

import DishesCard from "../layouts/DishesCard";
import axios from "axios";
import Procard from "../layouts/Procard";

const Dishes = () => {
  const [Item, setItem] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8980/user//getallbus")
      .then((result) => {
        console.log(result.data);
        setItem(result.data.Getbus);
      })
      .catch((error) => console.log(error));
  }, []);

  const deleteItem = async (_id) => {
    try {
      await axios.delete(`http://localhost:8980/user/${_id}`);
      console.log("post deleted :", _id);
      setItem(Item.filter((post) => post._id !== _id));
    } catch (error) {
      console.log("Error :", error);
    }
  };

  return (
    <div className=" inline-grid grid-cols-3 px-14  py-7 gap-10">
      {Item &&
        Item.map((Item, index) => {
          return (
            <div
              key={index}
              className=" mt-11 p-10 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                className="object-cover object-center aspect-auto"
                src={Item.image}
                alt="Product Image"
              />
              <div className="p-4">
                <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                  {Item.Poname}
                </h2>
                <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
                  {Item.categories}
                </p>
                <div className="flex items-center">
                  <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                    ${Item.price}
                  </p>
                  {/* <p className="text-base  font-medium text-gray-500 line-through dark:text-bgray-300">$25.00</p>  */}
                  <p className="ml-auto text-base font-medium text-green-500">
                    20% off
                  </p>
                </div>
                <div className="gap-60 py-4 px-30">
                  <button
                    type="button"
                    onClick={() => deleteItem(Item._id)}
                    className="   bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Dishes;
