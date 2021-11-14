import React from "react";

import HealtyBitesForm from "./HealtyBitesForm";
import MealPrepForm from "./MealPrepForm";
// import QuickMealsForm from './QuickMealsForm';
import SmoothiesForm from "./SmoothiesForm";

function AllRecipes() {
  return (
    <div className="container">
      <HealtyBitesForm />
      <MealPrepForm />
      {/* <QuickMealsForm /> */}
      <SmoothiesForm />
    </div>
  );
}

export default AllRecipes;
