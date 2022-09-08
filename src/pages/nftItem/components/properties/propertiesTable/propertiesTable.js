import React from "react";

function PropertiesTable({metadata}) {
  console.log("metadata in properties table",metadata.attributes)
  return (
    <div class="overflow-x-auto">
      <table className="table w-full ">
        <thead>
          <tr className="bg-transparent ">
            {/* <th></th> */}
            <th className="bg-transparent text-[#BFCBD9] dark:text-foreground-secondary">
              Name
            </th>
            <th className="bg-transparent">
              <span className="float-right pr-6 text-[#BFCBD9] dark:text-foreground-secondary">
                Job
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {metadata?.attributes?.map((attribute)=>{
            return(<tr className="border-none dark:bg-white">
            {/* <th></th> */}
            <td className="bg-[#121a23] backdrop-blur-xl bg-opacity-30 border-none dark:bg-white">
              <div className="flex ">
                <div className="text-[#BFCBD9] text-sm pr-2 ">{attribute.trait_type}</div>
              </div>
            </td>
            <td className="bg-[#121a23] backdrop-blur-xl bg-opacity-30 border-none dark:bg-white">
              <div className="text-base font-semibold text-foreground-primary dark:text-foreground-secondary dark:text-foreground-secondary">
                <span className="float-right">{attribute.value}</span>
              </div>
            </td>
          </tr>)
          })}
          
        </tbody>
      </table>
    </div>
  );
}

export default PropertiesTable;
