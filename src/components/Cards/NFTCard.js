import Frame from "../../assets/images/Rectangle 3.png";
const NFTCard = () => {
    return (
        <div class="card card-compact w-[280px] h-[358px] bg-black nft-card">
            <div class="mt-1">
                <div class=" grid justify-items-center">
                    <div class="flex flex-row flex justify-between flex items-center w-[248px] h-[16px] text-white  text-[12px] leading-[16px] font-Montserrat mt-3 pb-[4px]">
                        <p class=" ml-1 font-bold">Modernist Masks</p>
                        <p class="font-light mr-1">20h:35m:08s</p>
                    </div>
                </div>
                <figure>
                    <img class="mt-3  w-[248px] h-[216px]" src={Frame} alt="Shoes" />
                </figure>
                <div class="card-body">
                    <div class="flex justify-between items-center text-white rounded-lg w-[248px] h-[63px]">
                        <div class="ml-3">
                            <p class="text-[12px] leading-[14px]">Last Traded</p>
                            <p class="text-[16px] leading-[24px] mt-[10px] font-thin ">
                                0.001 ETH
                            </p>
                        </div>
                        <div class="mr-7">
                            <p class="text-[12px] leading-[16px]">Instant Price</p>
                            <p class="nft-card-price mt-[10px]">0.001 ETH</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NFTCard;