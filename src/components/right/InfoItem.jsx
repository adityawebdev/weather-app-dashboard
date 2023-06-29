import React from "react";
import { Line } from "rc-progress";

const InfoItem = ({ name, value, text, icon, range, status }) => {
  const percent = (value * 100) / range;
  return (
    <div className="bg-white flex flex-col p-4 rounded-[20px] w-3/12 mt-2">
      <div className="header flex justify-between">
        <h2 className="font-bold text-sm">{name}</h2>
        <span className="material-icons text-light-blue">{icon}</span>
      </div>
      <div className="details flex justify-center items-center mt-2">
        <h1 className="text-xl font-bold">
          {text} <span className="text-xs font-medium">{status}</span>
        </h1>
      </div>
      <div className="progress">
        <Line percent={percent} strokeWidth={3} strokeColor="#5C9CE5" />
      </div>
    </div>
  );
};

export default InfoItem;
