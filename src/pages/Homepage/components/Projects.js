import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Projects = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
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
    <>
      <p>Projects you'll love</p>


        <Carousel
          responsive={responsive}
          containerClass="carousel-container"
          showDots={true}
        >
          <div className="container mx-auto w-full">
            <div className="grid grid-cols-4 w-full">
              <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                  <img
                    src="https://placeimg.com/400/225/arch"
                    alt="Shoes"
                    class="rounded-xl"
                  />
                </figure>
                <div class="card-body items-center text-center">
                  <h2 class="card-title">Shoes!</h2>
                  <p>
                    If a dog chews shoes whose shoes does
                    hasdasdasdasdasdasdasdasdasdasdsdaasdasdasdsdaasdasdsdaasdasde
                    choose?
                  </p>
                  <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
              <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                  <img
                    src="https://placeimg.com/400/225/arch"
                    alt="Shoes"
                    class="rounded-xl"
                  />
                </figure>
                <div class="card-body items-center text-center">
                  <h2 class="card-title">Shoes!</h2>
                  <p>
                    If a dog chews shoes whose shoes does
                    hasdasdasdasdasdasdasdasdasdasdsdaasdasdasdsdaasdasdsdaasdasde
                    choose?
                  </p>
                  <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
              <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                  <img
                    src="https://placeimg.com/400/225/arch"
                    alt="Shoes"
                    class="rounded-xl"
                  />
                </figure>
                <div class="card-body items-center text-center">
                  <h2 class="card-title">Shoes!</h2>
                  <p>
                    If a dog chews shoes whose shoes does
                    hasdasdasdasdasdasdasdasdasdasdsdaasdasdasdsdaasdasdsdaasdasde
                    choose?
                  </p>
                  <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
              <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                  <img
                    src="https://placeimg.com/400/225/arch"
                    alt="Shoes"
                    class="rounded-xl"
                  />
                </figure>
                <div class="card-body items-center text-center">
                  <h2 class="card-title">Shoes!</h2>
                  <p>
                    If a dog chews shoes whose shoes does
                    hasdasdasdasdasdasdasdasdasdasdsdaasdasdasdsdaasdasdsdaasdasde
                    choose?
                  </p>
                  <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
              <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                  <img
                    src="https://placeimg.com/400/225/arch"
                    alt="Shoes"
                    class="rounded-xl"
                  />
                </figure>
                <div class="card-body items-center text-center">
                  <h2 class="card-title">Shoes!</h2>
                  <p>
                    If a dog chews shoes whose shoes does
                    hasdasdasdasdasdasdasdasdasdasdsdaasdasdasdsdaasdasdsdaasdasde
                    choose?
                  </p>
                  <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </Carousel>
    
    </>
  );
};

export default Projects;
