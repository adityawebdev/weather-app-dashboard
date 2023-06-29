import React from "react";
import Widgets from "./left/Widgets";
import City from "./left/City";
import Temp from "./left/Temp";
import Img from "./left/Img";

//Left div is divided into 4 reusable parts widgets , city info , temperature section and image

const Left = () => {
  return (
    <div className="bg-light-blue h-4/5 w-3/12 rounded-l-[80px]  flex flex-col justify-center items-center p-12 pr-24">
      <Widgets />
      <City />
      <Temp />
      <Img />
    </div>
  );
};

export default Left;
