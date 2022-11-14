import { Route, Routes } from "react-router-dom";
import FoodOftheDay from "./FoodoftheDay";
import Recipe from "./Recipe";
import Meal from "./Meal";
import Home from "./Home";
import About from "./About";
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
