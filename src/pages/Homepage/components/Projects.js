import React from "react";
import Carousel from "react-multi-carousel";
import "./Projects.css";
import "react-multi-carousel/lib/styles.css";
import cardimage from "../../../assets/images/Ellipse 5.png";
import { card_data } from "./data";

const Projects = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 520 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 520, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="bg-[#121A23] lg:py-12 lg:px-24">
      <p className="font-bold text-white text-3xl mb-12 text-shadow">
        Projects you'll love
      </p>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={false}
      >
        {card_data.map((resource, index) => {
          return (
            <div key={index} class="card bg-transparent card-container ">
              <figure class="px-5 pt-5 ">
                <img src={resource.imageUrl} alt="Shoes" class="rounded-xl" />
              </figure>

              <div class=" absolute items-center  left-0 bottom-0 left-0 right-0">
                <h2 class="card-title text-white text-lg">{resource.title}</h2>
                <p className="card-subtitle text-xs">{resource.subtitle}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
      ;
    </div>
  );
};

export default Projects;
