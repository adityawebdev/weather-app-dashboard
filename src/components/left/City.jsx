import React from "react";

const City = () => {
  return (
    <div className="text-white mb-16  w-64 mt-8">
      <div className="upper-text flex justify-between">
        <div className="l flex space-x-4">
          <span class="material-icons">near_me</span>
          <p>Chennai , India</p>
        </div>
        <div className="r flex space-x-2">
          <span class="material-icons">wb_sunny</span>
          <p>05 : 57</p>
        </div>
      </div>
      <div className="bottom-text flex justify-between">
        <div className="l">Today 6 June</div>
        <div className="r flex space-x-2">
          <span class="material-icons">dark_mode</span>
          <p>07 : 13</p>
        </div>
      </div>
    </div>
  );
};

export default City;
