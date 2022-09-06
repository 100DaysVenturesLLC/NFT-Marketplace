import Card from "../../assets/images/card1.png";
import Ellipse from "../../assets/images/Ellipse 5.png";

const CollectionCard = ({resource,index}) => {
    return (
        <div key={index}>
            <div class="card card-compact w-[280px] h-[302px] shadow-xl collection-card flex flex-col justify-center">
                {/* <figure> */}
                    <img class="mt-[16px] mx-auto w-[248px] h-[124px] object-cover" src={`https://pixelpark-images.s3.amazonaws.com/${resource?.bannerImageURI}`} alt="Shoes" />
                {/* </figure> */}
                <div class="absolute bottom-0 left-7 top-[115px]">
                    <img class="w-[40px] h-[40px]  rounded-full" src={`https://pixelpark-images.s3.amazonaws.com/${resource?.avatarImageURI}`}></img>
                </div>
                <div class="card-body">
                    <div class="ml-[15px] text-white ">
                        <h2 class="card-title  text-base ">{resource.name}</h2>
                        <p class="text-[12px] leading-[14px]">5.5k Owners</p>
                    </div>
                    <div class="flex justify-around flex items-center bg-[#303F50] text-white rounded-lg w-[248px] h-[63px]">
                        <div>
                            <p class="text-[12px] leading-[16px]">Total Volume</p>
                            <p class="collection-card-title">0.001 ETH</p>
                        </div>
                        <div>
                            <p class="text-[12px] leading-[16px]">Floor Price</p>
                            <p class="collection-card-title">0.001 ETH</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>    
  );
};

export default CollectionCard;
