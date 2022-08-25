import React from "react";
import Card from "./componernts/Card";
import Carousel from "react-multi-carousel";
import { card_data } from "../../../../mocdata/popularCategory";

const PopularCategory = () => {
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
    <div className="popularcategory">
      <div className="container  w-full  mx-auto max-h-screen max-w-full px-32 ">
        <div className="flex flex-col  ">
          <p className="text-3xl text-white font-bold text-shadow  mb-12 pt-12">
            Popular Categories
          </p>

          <div className="grid grid-cols-1   items-center ">
            <Carousel responsive={responsive} itemClass="carouselItem2">
              {card_data.map((resource, index) => {
                return <Card index={index} resource={resource} />;
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategory;
