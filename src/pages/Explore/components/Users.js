import React from 'react'
import cards from "./mockdata.json"
import UserCard from '../../../components/Cards/UserCard'
import { BiFilterAlt, BiArrowToLeft } from "react-icons/bi"

const Users = () => {
    return (
        <section className="py-3">
            <div class="drawer h-full">
                <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content w-full h-full flex flex-col gap-2">
                    <label for="my-drawer" class="drawer-button text-white cursor-pointer w-[120px] my-4 font-bold flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <BiFilterAlt />
                            Filters
                        </div>
                        <BiArrowToLeft />
                    </label>
                    <div className="flex justify-center">
                        <div className="grid grid-cols-4 gap-6 pb-6">
                            {cards.map((item) => {
                                return (
                                    <UserCard />
                                )
                            })}

                        </div>
                    </div>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto bg-[#0C111A] w-80 text-base-content">
                        <form class="flex items-center">
                            <label for="simple-search text-white" class="sr-only">
                                Search
                            </label>
                            <div class="relative w-full">
                                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg
                                        aria-hidden="true"
                                        class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="simple-search"
                                    class="w-full font-bold bg-transparent border text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 dark:text-white"
                                    placeholder="Search by users"
                                    required
                                />
                            </div>
                        </form>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Users
