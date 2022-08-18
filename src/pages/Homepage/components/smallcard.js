import Employee from "../../../assets/images/Employee 1.png";

const Smallcard = () => {
  return (
    <div class=" flex flex-col h-32 w-32 bg-red-100">
      <div class="">
        <p class=" bg-red">main</p>
      </div>
      <div>
        <img src={Employee}></img>
      </div>
    </div>
  );
};

export default Smallcard;
