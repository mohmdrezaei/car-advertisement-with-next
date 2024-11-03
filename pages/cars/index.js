import Categories from "@/components/layout/module/Categories";
import CarsPage from "@/components/templates/CarsPage";
import carsData from "@/data/carsData";

function Details() {
  return (
    <div>
      <Categories />
      <CarsPage data={carsData} />{" "}
    </div>
  );
}

export default Details;
