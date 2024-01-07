import { Route, Routes } from "react-router-dom";
import FoodOftheDay from "../Components/FoodoftheDay";
import Recipe from "../Components/Recipe";
import Meal from "../Components/Meal";
import Home from "../Components/Home";
import About from "../Components/About";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meal" element={<Meal />} />
      <Route path="/fod" element={<FoodOftheDay />} />
      <Route path="/recipe/:id" element={<Recipe />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
export default AllRoutes;
