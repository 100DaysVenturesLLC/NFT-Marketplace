import React from 'react'
import CollectionCard from '../../../components/CollectionCard'

const cards = [
    {
        id: "1"
    },
    {
        id: "2"
    },
    {
        id: "3"
    },
    {
        id: "1"
    },
    {
        id: "1"
    },
    {
        id: "1"
    },
]

const Collections = () => {
    return (
        <section className="py-3">
            <div class="drawer h-full">
                <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content w-full h-full flex flex-col gap-2">
                    <label for="my-drawer" class="drawer-button text-white cursor-pointer w-full my-4">Filters</label>
                    <div className="flex justify-center">
                        <div className="grid grid-cols-3 gap-3">
                            {cards.map((item) => {
                                return (
                                    <CollectionCard />
                                )
                            })}

                        </div>
                    </div>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto backdrop-filter backdrop-blur-lg bg-opacity-10 w-80 text-base-content">
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Collections
