import React from "react";
import { useNavigate } from "react-router-dom";
import ethlogo from "../../../../../assets/icons/Etherium-icon.png";

const Card = ({ resource, index }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/collection");
      }}
      className=" cursor-pointer collection-card-container justify-between flex items-center px-8 py-4 dark:bg-white  "
    >
      <div className="flex items-center ">
        <div className="flex ">
          <div className="text-[#6A8099] text-shadow dark:text-foreground-secondary  ">
            1
          </div>
          <div class="absolute ml-5 w-0.5 h-6 vertical-line"></div>
        </div>
        <div className="flex items-center">
          <img src={resource.imageUrl} alt="" className="ml-12" />
          <div className="flex-col ml-6 ">
            <p className="text-white text-xl text-shadow dark:text-foreground-secondary ">
              {resource.title}
            </p>
            <div className="flex text-shadow  text-base font-light text-white dark:text-foreground-secondary  ">
              Floor price :
              <img src="" alt="" />
              {resource.price}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className=" mt-2 items-center">
          <div className=" items-center flex justify-end">
          <p
            className={
              resource.rate < 0
                ? "text-foreground-error bg-error rounded-lg py-1 px-6 text-xl font-semibond "
                : "text-success bg-foreground-success text-xl rounded-lg rounded-md px-6 py-1 font-semibond"
            }
          >
            {resource.rate}
          </p>

          </div>
        
        </div>
        <div className="bg-[#5C789918] rounded-lg px-4 py-1 flex mt-2 items-center">
        <img src={ethlogo} alt="" className="ml-2 mr-2" />
          <p className="flex text-white text-xl font-semibond dark:text-foreground-secondary ">
           
            {resource.eth_rate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
