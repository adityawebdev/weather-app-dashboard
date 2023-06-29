import React from "react";
import InfoItem from "./InfoItem";
import { gridItems } from "../../constants";

//data is being mapped with the items so in future if we want to add more sections we just only needed to update items in contants.js file

const InfoGrid = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between items-center space-x-2">
        {gridItems.map((item) => (
          <InfoItem
            key={item.id}
            name={item.name}
            icon={item.icon_name}
            value={item.value}
            range={item.range}
            status={item.status}
            text={item.value_text}
          />
        ))}
      </div>
    </>
  );
};

export default InfoGrid;
