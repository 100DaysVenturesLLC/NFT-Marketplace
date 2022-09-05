import React from "react";
import Ethereum from "../../../assets/icons/Etherium-icon.png";
import { tabledata } from "./activitytablemockdata";
import { BsTag } from "react-icons/bs";

const RankingTable = () => {
    return (
        <div class="flex flex-col w-full">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden rounded-xl">
                        <table class="min-w-full text-center">
                            <thead class="">
                                <tr class="bg-slate-900 text-left ">
                                    <th
                                        scope="col"
                                        class="text-sm font-thin text-white px-6 text-left py-4 w-[44px]"
                                    ></th>
                                    <th
                                        scope="col"
                                        class="text-sm font-thin text-white pl-[50px] text-left"
                                    >
                                        Items
                                    </th>
                                    <th
                                        scope="col"
                                        class="text-sm font-thin text-white text-left px-6 py-4"
                                    >
                                        Price
                                    </th>
                                    <th
                                        scope="col"
                                        class="text-sm font-thin text-white px-6 py-4 "
                                    >
                                        Qty
                                    </th>
                                    <th
                                        scope="col"
                                        class="text-sm font-thin text-white px-6 py-4 "
                                    >
                                        From
                                    </th>
                                    <th
                                        scope="col"
                                        class="text-sm font-thin text-white px-9 py-4 text-left"
                                    >
                                        To
                                    </th>
                                    <th
                                        scope="col"
                                        class="text-sm font-thin text-white  px-6 py-4 text-left"
                                    >
                                        Time
                                    </th>
                                    {/* <th
                    scope="col"
                    class="text-sm font-thin text-white px-6 py-4"
                  >
                    Items
                  </th> */}
                                </tr>
                            </thead>

                            <tbody class="rounded-lg text-left">
                                {tabledata.map((item) => {
                                    return (
                                        <tr className="activity-table-row">
                                            <td class="text-sm text-white text-left font-medium px-6 py-4 whitespace-nowrap w-[44px] -r-[1px] -[#6A8099 ]">
                                                <BsTag />
                                            </td>
                                            <td class="text-sm text-white font-light py-4  whitespace-nowrap flex justify-start w-[368px]">
                                                <div class="flex flex-row pl-[20px] pr-[45px ]  mr-[25px] items-center">
                                                    <div class="">
                                                        <img
                                                            class="w-[36px] h-[36px]   rounded-full "
                                                            src={item.image}
                                                        ></img>
                                                    </div>
                                                    <div class="ml-[14px] font-semibold">
                                                        {item.name}
                                                        <div>
                                                            <p class="font-thin text-xs">Super Cool</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-sm text-white font-normal px-6 py-4 w-[368px] whitespace-nowrap">
                                                <div class="flex flex-row items-center">
                                                    <div class="flex flex-row">
                                                        <img
                                                            class="w-[12px] h-[16.73px]  rounded-full"
                                                            src={Ethereum}
                                                        ></img>
                                                        <div class="ml-[10px]">
                                                            {item.price}
                                                            <div>
                                                                <p class="font-thin text-xs">$ 20,000</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-sm text-white font-normal px-6 py-4 whitespace-nowrap w-[128px]">
                                                {item.qty}
                                            </td>
                                            <td class="text-sm text-[#23AEE3] font-normal px-6 py-4 whitespace-nowrap">
                                                {item.from}
                                            </td>
                                            <td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                                                <div class="flex flex-row items-center">
                                                    <div>
                                                        <img
                                                            class="w-[12px] h-[16.73px]  rounded-full"
                                                            src={Ethereum}
                                                        ></img>
                                                    </div>
                                                    <div class="ml-[10px] font-normal text-[#23AEE3]">
                                                        {item.to}
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-sm text-white font-normal px-6 py-4 whitespace-nowrap ">
                                                {item.time}
                                            </td>
                                            {/* <td class="text-sm text-white font-normal px-6 py-4 whitespace-nowrap">
                        {item.items}
                      </td> */}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RankingTable;