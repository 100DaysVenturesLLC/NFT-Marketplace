import React from "react";
import PropertiesTable from "./propertiesTable/propertiesTable";

function Properties() {
  return (
    <div>
      <div className="text-foreground-primary text-shadow text-xl font-semibold pb-6 dark:text-foreground-secondary">
        Rank
      </div>
      <PropertiesTable />
    </div>
  );
}

export default Properties;
