import vector from "../../../../../assets/images/Vector.png";
import image9 from "../../../../../assets/images/image 9.png";

const Card = ({ resource, index }) => {
  return (
    <div key={index} className="card card-compact w-[580px] h-[330px] mr-6 ">
      <div className="realtive w-full h-full">
        <div className=" w-full h-full">
          <figure className="">
            <img
              src={image9}
              alt="Shoes"
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
        <div className="w-full">
          <div class="w-full p-5 h-1/3 overlay2  absolute bottom-0   flex  dark:bg-white">
            <div class="flex items-center justify-between w-full ">
              <div className="flex items-center">
                <div className="">
                  <img
                    src={resource.imageUrl}
                    class="w-10 h-10 rounded-full"
                  ></img>
                </div>
                <div class="text-white flex flex-col	ml-5 ">
                  <h2 class="card-title text-xl dark:text-foreground-secondary">
                    {resource.title}
                  </h2>
                  <p class="text-base dark:text-foreground-secondary">
                    50k Followers
                  </p>
                </div>
              </div>

              <div class=" flex  items-center ">
                <img src={vector}></img>

                <p class="text-xl ml-2 text-background-highlight text-semibold">
                  Follow
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
