import React from "react";
import { Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header/Header";
import NavBar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import HealthInfoPage from "./pages/HealthInfoPage";
import GeneralHealthAssessmentPage from "./pages/GeneralHealthAssessmentPage";
import GoalSettingPage from "./pages/GoalSettingPage";
import LifeStyleAssPage from "./pages/LifeStyleAssPage";
import InterestingReadsPage from "./pages/InterestingReadsPage";
import RecipesPage from "./pages/RecipesPage";
import CoachingPage from "./pages/CoachingPage";
import RehabilitationPage from "./pages/RehabilitationPage";
import PhotographyPage from "./pages/PhotographyPage";
import RatesPage from "./pages/RatesPage";
import ContactUsPage from "./pages/ContactUsPage";
import UserProfilePage from "./pages/UserProfilePage";
import AdminUserProfilePage from "./pages/AdminUserProfilePage";
import Footer from "./components/footer/Footer";

import UserProfileOwner from "./components/userProfile/UserProfileOwner";

import "./App.css";

function App() {
  return (
    <div>
      <UserProfileOwner />
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/aboutpage">
          <AboutPage />
        </Route>
        <Route path="/healthinfopage">
          <HealthInfoPage />
        </Route>
        <Route path="/generalhealthassessmentpage">
          <GeneralHealthAssessmentPage />
        </Route>
        <Route path="/goalsetting">
          <GoalSettingPage />
        </Route>
        <Route path="/lifeStyleasspage">
          <LifeStyleAssPage />
        </Route>
        <Route path="/interestingreadspage">
          <InterestingReadsPage />
        </Route>
        <Route path="/recipespage">
          <RecipesPage />
        </Route>
        <Route path="/coachingpage">
          <CoachingPage />
        </Route>
        <Route path="/rehabilitationpage">
          <RehabilitationPage />
        </Route>
        <Route path="/photographypage">
          <PhotographyPage />
        </Route>
        <Route path="/ratespage">
          <RatesPage />
        </Route>
        <Route path="/contactuspage">
          <ContactUsPage />
        </Route>
        <Route path="/Userprofilepage">
          <UserProfilePage />
        </Route>
        <Route path="/AdminUserProfile">
          <AdminUserProfilePage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
