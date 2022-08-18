import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import avatar from "../../../assets/icons/avatar.png";
import { card_data } from "./data";

const Projects = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="bg-[#0C111A]">
      <p className="font-bold text-white text-3xl mb-12 text-shadow lg:py-12 lg:px-24">
        Projects you'll love
      </p>
      <div >
        <div className="overlay-carousel">

        </div>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={false}
        partialVisible={false}
      itemClass="carouselItem"
      >
        {card_data.map((resource, index) => {
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

            <div key={index} class="card w-[380px] h-[480px] mr-6 my-3 ">
              <div className="relative w-full h-full ">
                <div className="w-full h-full">
                  <img
                    src={resource.imageUrl}
                    alt="car!"
                    className="w-full h-full "
                  />
                </div>
                <div class="w-full p-5  overlay h-2/5 absolute bottom-0 bg-black drop-shadow-lg">
                  <div className="absolute bottom-10 ">
                    <h2 class="card-title text-white text-shadow ">Life hack</h2>
                    <div className="flex">
                      <img src={avatar} alt="" />
                    <p className="text-white ml-2">
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
