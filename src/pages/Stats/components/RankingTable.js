import React from 'react'
import Ethereum from "../../../assets/table-data/Group 1.png"
import { tabledata } from "./tablemockdata"

const RankingTable = () => {
    return (
        <div class="flex flex-col w-full mt-6">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden rounded-xl">
                        <table class="min-w-full text-center">
                            <thead class="">
                                <tr class="bg-slate-900 ">
                                    <th
                                        scope="col"
                                        class="text-sm font-thin text-white px-6 text-left py-4 w-[44px]"
                                    >
                                        #
                                    </th>
                                    <th
                                        scope="col"
                                        class="text-sm font-thin text-white pl-[50px] text-left">
                                        Collection
                                    </th>
                                    <th
                                        scope="col"
                                        class="text-sm font-thin text-white px-6 py-4"
                                    >
                                        Volume
                                    </th>
                                    <th
                                        scope="col"
                                        class="text-sm font-thin text-white px-6 py-4"
                                    >
                                        24%
                                    </th>
                                    <th
                                        scope="col"
                                        class="text-sm font-thin text-white px-6 py-4"
                                    >
                                        7h%
                                    </th>
                                    <th
                                        scope="col"
                                        class="text-sm font-thin text-white px-6 py-4"
                                    >
                                        Floor Price
                                    </th>
                                    <th
                                        scope="col"
                                        class="text-sm font-thin text-white px-6 py-4"
                                    >
                                        Owners
                                    </th>
                                    <th
                                        scope="col"
                                        class="text-sm font-thin text-white px-6 py-4"
                                    >
                                        Items
                                    </th>
                                </tr>
                            </thead>


                            <tbody class="rounded-lg">

                                {tabledata.map((item) => {
                                    return (
                                        <tr class={(item.sno % 2 === 0) ? "table-even-row" : "table-odd-row"}>
                                            <td class="text-sm text-white text-left font-medium px-6 py-4 whitespace-nowrap w-[44px] -r-[1px] -[#6A8099 ]">
                                                {item.sno}
                                            </td>
                                            <td class="text-sm text-white font-light py-4  whitespace-nowrap flex justify-start w-[368px]">
                                                <div class="flex flex-row pl-[20px] pr-[45px ]  mr-[25px] items-center">
                                                    <div class="">
                                                        <img
                                                            class="w-[36px] h-[36px] rounded-full "
                                                            src={item.image}
                                                        ></img>
                                                    </div>
                                                    <div class="ml-[14px] font-semibold">{item.name}</div>
                                                </div>
                                            </td>
                                            <td class="text-sm text-white font-normal px-6 py-4 w-[368px]whitespace-nowrap">
                                                <div class="flex flex-row items-center">
                                                    <div>
                                                        <img
                                                            class="w-[12px] h-[16.73px]  rounded-full"
                                                            src={Ethereum}
                                                        ></img>
                                                    </div>
                                                    <div class="ml-[10px]">{item.volume}</div>
                                                </div>
                                            </td>
                                            <td class="text-sm text-[#01FF85] font-normal px-6 py-4 whitespace-nowrap w-[128px]">
                                                {item.h24}
                                            </td>
                                            <td class="text-sm text-[#01FF85] font-normal px-6 py-4 whitespace-nowrap">
                                                {item.h7}
                                            </td>
                                            <td class="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                                                <div class="flex flex-row items-center">
                                                    <div>
                                                        <img
                                                            class="w-[12px] h-[16.73px]  rounded-full"
                                                            src={Ethereum}
                                                        ></img>
                                                    </div>
                                                    <div class="ml-[10px] font-normal">{item.fp}</div>
                                                </div>
                                            </td>
                                            <td class="text-sm text-white font-normal px-6 py-4 whitespace-nowrap ">
                                                {item.owners}
                                            </td>
                                            <td class="text-sm text-white font-normal px-6 py-4 whitespace-nowrap">
                                                {item.items}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RankingTable
