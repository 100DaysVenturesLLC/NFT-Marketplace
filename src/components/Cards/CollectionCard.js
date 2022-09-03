import Card from "../../assets/images/card1.png";
import Ellipse from "../../assets/images/Ellipse 5.png";

const CollectionCard = ({ resource, index }) => {
  return (
    <div key={index}>
      <div class="card card-compact w-[280px] h-[302px] shadow-xl collection-card">
        <figure>
          <img class="mt-[16px]" src={Card} alt="Shoes" />
        </figure>
        <div class="absolute bottom-0 left-7 top-[115px]">
          <img class="w-[40px] h-[40px]  rounded-full" src={Ellipse}></img>
        </div>
        <div class="card-body">
          <div class="ml-[15px] text-white dark:text-foreground-secondary ">
            <h2 class="card-title  text-base ">Otherdeed</h2>
            <p class="text-[12px] leading-[14px]">5.5k Owners</p>
          </div>
          <div class="flex justify-around flex items-center bg-[#303F50] text-white rounded-lg w-[248px] h-[63px] dark:bg-white dark:text-foreground-secondary">
            <div>
              <p class="text-[12px] leading-[16px] font-semibold dark:text-[#6A8099] ">
                Total Volume
              </p>
              <p class="collection-card-title">0.001 ETH</p>
            </div>
            <div>
              <p class="text-[12px] leading-[16px] font-semibold dark:text-[#6A8099]">
                Floor
              </p>
              <p class="collection-card-title">0.001 ETH</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
