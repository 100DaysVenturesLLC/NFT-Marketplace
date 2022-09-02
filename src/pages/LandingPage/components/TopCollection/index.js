import React from "react";

import { topcollection_data } from "../../../../mocdata/topCollection";
import Card from "./components/Card";

const TopCollection = () => {
  return (
    <div className="top-collection dark:bg-white">
      <div className="container  mx-auto px-8 max-h-full w-full">
        <div className="flex items-center justify-between pb-12 pt-12 ">
          <p className="text-3xl text-white font-bold text-shadow dark:text-foreground-secondary">
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
                <Card resource={resource} index={index} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopCollection;
