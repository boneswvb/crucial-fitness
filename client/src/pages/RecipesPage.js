import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import AllRecipes from '../components/recipes/AllRecipes';
import HealtyBitesForm from '../components/recipes/HealtyBitesForm';
import MealPrepForm from '../components/recipes/MealPrepForm';
import QuickMealsForm from '../components/recipes/QuickMealsForm';
import SmoothiesForm from '../components/recipes/SmoothiesForm';

function RecipesPage() {
  return (
    <div className="container">
      <Helmet>
        <meta
          name="keywords"
          content="service "
        />
        <meta name="description" content="aaa" />
        <title>Recipes - Crucial Fitness & Nutrition</title>
      </Helmet>
      <Switch>
        <Route path="/recipespage/allrecipes">
          <AllRecipes />
        </Route>
        <Route path="/recipespage/healtybitesform">
          <HealtyBitesForm />
        </Route>
        <Route path="/recipespage/mealprepform">
          <MealPrepForm />
        </Route>
        <Route path="/recipespage/quickmealsform">
          <QuickMealsForm />
        </Route>
        <Route path="/recipespage/smoothiesform">
          <SmoothiesForm />
        </Route>
      </Switch>
    </div>
  );
}

export default RecipesPage;
