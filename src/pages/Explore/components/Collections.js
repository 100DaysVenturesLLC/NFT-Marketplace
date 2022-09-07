import React,{useEffect,useState} from 'react'
import CollectionCard from '../../../components/Cards/CollectionCard'
import cards from "./mockdata.json"
import { BiFilterAlt, BiArrowToLeft } from "react-icons/bi"
import bc from "../../../assets/icons/Group(3).png"
import eth from "../../../assets/filter-icons/cib_ethereum.png"
import poly from "../../../assets/filter-icons/polygon-matic-logo 1.png"
import flow from "../../../assets/filter-icons/flow.png"
import solana from "../../../assets/filter-icons/solana-sol-logo 1.png"
import tezos from "../../../assets/filter-icons/Tezos.png"
import getAllCollections from '../../../hook/queries/getAllCollections'
import { useNavigate } from "react-router-dom";

const Collections = () => {
    const navigate= useNavigate()
    const [collection,setCollection] = useState()


    const getCollections = async() => {
       const response = await getAllCollections()
       setCollection(response)
    }

    useEffect(() => {
        getCollections()
    }, [])
    
console.log(collection,"ye state hai")
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
                        <div className="grid grid-cols-4 gap-6">
                            {collection?.data.map((item) => {
                                return (
                                    <div onClick={()=> {navigate(`/collections/${item.contractAddress}`)}}><CollectionCard  resource={item} /></div>
                                    
                                )
                            })}

                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                  <div class="font-bold flex gap-3 items-center">
                    <img src={tezos} alt="icon" />
                    Tezos
                  </div>
                  <input
                    type="radio"
                    name="radio-6"
                    class="radio bg-grey checked:bg-blue-500"
                  />
                </div>
              </div>
    </section>
  );
};

export default Collections;
