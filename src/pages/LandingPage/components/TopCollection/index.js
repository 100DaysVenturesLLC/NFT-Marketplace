import React from "react";

import { topcollection_data } from "../../../../mocdata/topCollection";
import Card from "./components/Card";

const TopCollection = () => {
  return (
    <div className="lg:py-12 lg:px-24 top-collection">
      <div className="flex items-center justify-between mb-12">
        <p className="text-3xl text-white font-bold text-shadow ">
          Top Collection
        </p>
        <p className="text-background-highlight font-bold text-sm">
          See All Collection
        </p>
      </div>
      <div className="grid grid-cols-2 grid-rows-5  items-center gap-4 ">
        {topcollection_data.map((resource, index) => {
          return (
            <>
              <Card resource={resource} index={index}/>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default TopCollection;
