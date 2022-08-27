import ellipse from "../../assets/icons/table1.png";
import vector from "../../assets/icons/Vector1.png";
import image9 from "../../assets/images/ThirdCard.jpeg";

const UserCard = () => {
    return (
        <div>
            <div class="card card-compact w-[280px] h-[256px] user-card">
                <div className="realtive w-full h-full ">
                    <div className=" w-full h-full">
                        <figure className="">
                            <img
                                src={image9}
                                alt="Shoes"
                                className="w-full h-full object-cover"
                            />
                        </figure>
                    </div>
                    <div className="w-full h-[70px]">
                        <div class="w-full p-5 h-2/5 overlay absolute bottom-0 flex">
                            <div class="flex items-center justify-between w-full">
                                <div className="flex items-center">
                                    <div className="w-[40px] h-[40px] rounded-full absolute mb-[90px]">
                                        <img src={ellipse} class=" "></img>
                                    </div>
                                    <div class="text-white flex flex-col h-[38px] mb-[5px]">
                                        <p class="card-title text-[12px] font-bold">Otherdeed</p>
                                        <p class="text-[12px] font-light  ">50k Followers</p>
                                    </div>
                                </div>
                                <div class="flex items-center ">
                                    <img class="w-[22.5px] h-[21px] mr-[12px]" src={vector}></img>
                                    <p class="text-[12px] text-[#23AEE3] font-semibold">Follow</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default UserCard;