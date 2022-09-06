import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import avatar from "../../../assets/icons/avatar.png";
import { collectioncard_data } from "../../../mocdata/collectionSpotlight";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="collection-spotlight container max-h-full  mx-auto  max-w-full dark:bg-white">
      <p className="font-bold text-white text-3xl pb-12 mx-auto text-shadow container px-8 pt-12 dark:text-foreground-secondary">
        Most Popular
      </p>
      <div>
        <div className="overlay-carousel"></div>
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          showDots={false}
          partialVisible={false}
          itemClass="carouselItem"
        >
          {collectioncard_data.map((resource, index) => {
            return (
              // <div key={index} class="card bg-transparent ">
              //   <figure class="px-5 pt-5">
              //     <img
              //       src={resource.imageUrl}
              //       alt="Shoes"
              //       class="rounded-xl object-cover"
              //     />
              //   </figure>
              //   {/* <div>
              //     <div class="absolute items-center  left-0 bottom-0 ">
              //       <h2 class="card-title text-white text-lg">
              //         {resource.title}
              //       </h2>
              //       <p className="card-subtitle text-xs">{resource.subtitle}</p>
              //     </div>
              //   </div> */}
              // </div>

              <div
                onClick={() => navigate("/nftitem")}
                key={index}
                class="card w-[380px] h-[480px] mr-6 my-3 cursor-pointer  "
              >
                <div className="relative w-full h-full  ">
                  <div className="w-full h-full">
                    <img
                      src={resource.imageUrl}
                      alt="car!"
                      className="w-full h-full "
                    />
                  </div>
                  <div class="w-full p-5  overlay h-2/5 absolute bottom-0 bg-black drop-shadow-lg dark:bg-white ">
                    <div className="absolute bottom-10  ">
                      <h2 class="card-title text-white text-shadow dark:text-foreground-secondary  ">
                        Life hack
                      </h2>
                      <div className="flex">
                        <img src={avatar} alt="" />
                        <p className="text-white ml-2 dark:text-foreground-secondary ">
                          Recur
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
      ;
    </div>
  );
};

export default Projects;
