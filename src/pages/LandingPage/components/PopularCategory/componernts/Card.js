import Employee from "../../../../../assets/images/Employee.png";

const Card = () => {
  return (
    <div class="bg-white">
      <div class="card w-[280px] h-[278px] bg-gray-700 text-white shadow-xl ">
        <div class="card-body  ">
          <h2 class="card-title flex justify-center font-semibold Montserrat">
            PFP
          </h2>
        </div>
        <figure>
          <img class="w-[164px] h-[167px]" src={Employee} alt="Employee" />
        </figure>
      </div>
    </div>
  );
};

export default Card;