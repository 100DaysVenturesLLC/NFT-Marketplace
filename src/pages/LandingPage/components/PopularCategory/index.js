import React from "react";
import Card from "./componernts/Card";

const PopularCategory = () => {
  return (
    <div className="container container w-full  mx-auto  max-w-full px-32 ">
      <div className="flex flex-col  ">
        <p className="text-3xl text-white font-bold text-shadow  mb-12 pt-12">
          Popular Categories
        </p>
        <div className="grid grid-cols-4 grid-rows-1">
        <Card/>
        </div>
        {/* <div className="grid grid-cols-2 grid-rows-5  items-center gap-4 ">
          {topcollection_data.map((resource, index) => {
            return (
              <>
                <Card resource={resource} index={index} />
              </>
            );
          })}
        </div> */}
       
      </div>
    </div>
  );
};

export default PopularCategory;
