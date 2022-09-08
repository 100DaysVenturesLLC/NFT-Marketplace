import React from "react";

function ActivityTable({nftData}) {
  console.log("nft data in activity table",nftData)
  const metadata = JSON.parse(nftData?.metadata)
  console.log("ye metadata hai",metadata)
  const date = new Date()
  
  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <tbody>
        {
          nftData?.listings.map((item,index)=> {
            return(
              <tr className="border-none">
              {/* <th></th> */}
              <td className="bg-[#121a23] backdrop-blur-xl bg-opacity-30 border-none dark:bg-white">
                <div className="text-base font-semibold text-foreground-primary">
                  <span className="text-[#23AEE3] pr-2">{metadata.name}</span>
                  <span className="dark:bg-white dark:text-foreground-secondary">
                    listed for
                  </span>
                </div>
                <div className="flex">
                  <div className="text-[#BFCBD9] text-sm pr-4 dark:text-[#303F50]">
                    8/8/22
                  </div>
                  <div className="text-[#BFCBD9] text-sm pr-2 dark:text-[#303F50]">
                    8:21 AM
                  </div>
                </div>
              </td>
              <td className="bg-[#121a23] backdrop-blur-xl bg-opacity-30 border-none dark:bg-white">
                <div className="float-right">
                  <div className="text-base font-semibold text-foreground-primary dark:text-foreground-secondary">
                    {item.price} wETH
                  </div>
                  <div className="text-[#BFCBD9] text-sm dark:text-[#303F50]">
                    $171
                  </div>
                </div>
              </td>
            </tr>
            )
          })
        }
     
        </tbody>
      </table>
    </div>
  );
}

export default ActivityTable;
