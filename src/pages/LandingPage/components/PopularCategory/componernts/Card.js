import Employee from "../../../../../assets/images/Employee.png";

const Card = ({ resource, index }) => {
  return (
    <div key={index} className="card card-compact  w-[278px] popular-card">
      <div class="card   text-white  ">
        <div class="card-body  ">
          <h2 class="card-title flex justify-center font-semibold Montserrat pb-12  py-2">
            {resource.title}
          </h2>
        </div>
        <figure>
          <img
            class=""
            src={resource.imageUrl}
            alt="Employee"
          />
        </figure>
      </div>
    </div>
  );
};

export default Card;
