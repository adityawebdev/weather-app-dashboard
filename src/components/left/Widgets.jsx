import React from "react";

const Widgets = () => {
  return (
    <div className="flex  text-white text-2xl mb-8 justify-between w-56 ">
      <div>
        <span class="material-icons">add_circle</span>
      </div>
      <div className="">
        <span class="material-icons">multiple_stop</span>
      </div>
      <div className="flex text-white space-x-2">
        <p>°C</p>
        <span class="material-icons text-5xl -mt-2">toggle_off</span>
        <p>°F</p>
      </div>
    </div>
  );
};

export default Widgets;
