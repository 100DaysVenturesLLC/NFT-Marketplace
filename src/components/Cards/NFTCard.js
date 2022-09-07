import { useNavigate } from "react-router-dom";

const NFTCard = ({ resource, index }) => {
  const navigate = useNavigate()
  const metadata = JSON.parse(resource?.metadata)
  console.log(resource,"ye to resource hai")

  const handleOpenItem = () => {
    navigate(`/collectible/${resource?.contractAddress}/${resource?.tokenId}`)
  }

  return (
    <div onClick={handleOpenItem} class="card card-compact w-[280px] h-[358px] cursor-pointer bg-black nft-card dark:bg-white">
      <div class="mt-1">
        <div class=" grid justify-items-center">
          <div class="flex flex-row flex justify-between flex items-center w-[248px] h-[16px] text-white  text-[12px] leading-[16px] font-Montserrat mt-3 pb-[4px ] dark:text-foreground-secondary">
            <p class=" ml-1 font-bold">{metadata.name}</p>
            <p class="font-light mr-1">11:22:30</p>
          </div>
        </div>
        <figure>
          <img class="mt-3 object-cover w-[248px] h-[216px]" src={metadata.image} alt="img" />
        </figure>
        <div class="card-body ">
          <div class="flex justify-between items-center text-white rounded-lg w-[248px] h-[63px] ">
            <div class="ml-3">
              <p class="text-[12px]  font-semibold	 leading-[14px] dark:text-foreground-secondary">
                Last Traded
              </p>
              <p class="text-[16px] leading-[24px] mt-[10px] font-thin dark:text-[#121A23] ">
                {resource.lastTraded}
              </p>
            </div>
            <div class="mr-7">
              <p class="text-[12px] leading-[16px] font-semibold		dark:text-foreground-secondary">
                Highest Bid
              </p>
              <p class="nft-card-price mt-[10px]">{resource.instantPrice}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
