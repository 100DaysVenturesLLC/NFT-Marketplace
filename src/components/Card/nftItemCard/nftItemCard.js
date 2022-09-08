import Image1 from "../../../assets/images/image1.jpg";
const NftItemCard = ({collectible}) => {
  return (
    <div class="card card-compact w-[280px] h-[358px] bg-[#121a23] backdrop-blur-xl bg-opacity-30 dark:bg-white ">
      <div class="mt-1">
        <div class=" grid justify-items-center ">
          <div class="flex flex-row flex justify-between  flex items-center w-[248px] h-[16px] text-white  text-[12px] leading-[16px] font-Montserrat mt-3 pb-[4px]">
            <p class=" ml-1 font-medium dark:text-foreground-secondary">
              {JSON.parse(collectible.metadata).name}
            </p>
            <p class="font-light mr-1">20h:35m:08s</p>
          </div>
        </div>
        <figure>
          <img class="mt-3  w-[248px] h-[216px] " src={JSON.parse(collectible.metadata).image} alt="Shoes" />
        </figure>
        <div class="card-body font-Montserrat">
          <div class="flex justify-between flex items-center text-white rounded-lg w-[248px] h-[63px]">
            <div class="ml-3 ">
              <p class="text-[12px] leading-[14px] dark:text-foreground-secondary">
                Last Traded
              </p>
              <p class="text-[16px] leading-[24px] mt-[10px]  font-thin dark:text-[#121A23] ">
                0.001 MATIC
              </p>
            </div>
            <div class="mr-7">
              <p class="text-[12px] leading-[16px] dark:text-foreground-secondary">
                Instant Price
              </p>
              <p class="text-[16px] leading-[24px]  mt-[10px] background-linear-gradient">
                0.001 MATIC
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftItemCard;
