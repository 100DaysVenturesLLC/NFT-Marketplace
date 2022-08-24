import React from "react";
import Card from "./components/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { card_data } from "../../../../static/recommendedCreators";
const RecommendedCreators = () => {
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
    <div className="bg-background-primary creators lg:py-12 lg:px-24 w-full">
      <p className="text-3xl mb-12 text-white font-bold text-shadow ">
        Recommended Creators
      </p>
      <div className="grid grid-cols-1  items-center ">
        <Carousel responsive={responsive}       itemClass="carouselItem"
>
          {card_data.map((resource, index) => {
            return <Card index={index} resource={resource}/>;
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default RecommendedCreators;
