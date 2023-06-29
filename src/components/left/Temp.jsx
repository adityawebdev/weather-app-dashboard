import React from "react";

const Temp = () => {
  return (
    <div className="flex text-white mb-8">
      <span class="material-icons opacity-60">chevron_left</span>
      <div className="-mt-6 mx-16">
        <h1 className="text-6xl">25°</h1>
        <div className="flex -ml-1">
          <span class="material-icons">light_mode</span>
          <p className="text-xl">Sunny</p>
        </div>
      </div>
      <span class="material-icons opacity-60">chevron_right</span>
    </div>
  );
};

export default Temp;
