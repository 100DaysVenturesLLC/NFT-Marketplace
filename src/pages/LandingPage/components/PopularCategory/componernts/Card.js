import Employee from "../../../../../assets/images/Employee.png";

const Card = ({resource,index}) => {
  return (
    <div key={index} className="card card-compact w-2/4 h-[278px]">
      <div class="card  bg-gray-700 text-white shadow-xl ">
        <div class="card-body  ">
          <h2 class="card-title flex justify-center font-semibold Montserrat">
        {resource.title}
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
