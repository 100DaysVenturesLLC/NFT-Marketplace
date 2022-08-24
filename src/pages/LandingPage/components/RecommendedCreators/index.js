import React from "react";
import Card from "./components/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { card_data } from "../../../../mocdata/recommendedCreators";
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
    <div className="bg-background-primary container  w-full  mx-auto max-h-screen max-w-full py-32">
      <p className="text-3xl pb-12 text-white font-bold text-shadow px-32  pt-12 ">
        Recommended Creators
      </p>
      <div className="grid grid-cols-1 gap-4 items-center ">
        <Carousel responsive={responsive}       itemClass="carouselItem2"
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
