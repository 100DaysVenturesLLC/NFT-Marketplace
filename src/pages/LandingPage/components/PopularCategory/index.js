import React from "react";
import Card from "./componernts/Card";
import Carousel from "react-multi-carousel";
import { card_data } from "../../../../mocdata/popularCategory";

const PopularCategory = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
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
      <div className="container mx-auto max-h-full  max-w-full dark:bg-white">
        < div className="flex flex-col  " >
          <p className="text-3xl text-white container px-8 mx-auto font-bold text-shadow pb-12 pt-12 dark:text-foreground-secondary">
            Popular Categories
          </p>
          <div className="grid grid-cols-1 items-center pb-12">
            <Carousel responsive={responsive} itemClass="carouselItem">
              {card_data.map((resource, index) => {
                return <Card index={index} resource={resource} />;
              })}
            </Carousel>
          </div>
        </div >
      </div >
    </div >
  );
};

export default PopularCategory;
