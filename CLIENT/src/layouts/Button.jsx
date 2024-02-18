import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className=" px-6 py- border-2 border-red-700 text-brightColor hover:bg-red-700 hover:text-white transition-all rounded-full">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
