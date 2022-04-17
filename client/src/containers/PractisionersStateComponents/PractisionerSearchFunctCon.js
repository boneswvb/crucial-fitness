import React, { useState } from "react";

import UserProfileOwner from "../../components/userProfile/ownersProfileIndividuelCom/UserProfileOwner";

function PractisionerSearchFunctCon() {
  const [searchState, setSearchState] = useState({});
  const [goalSetting, setGoalSetting] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    return type === "checkbox"
      ? setSearchState({
          ...searchState,
          [name]: checked,
        })
      : setSearchState({
          ...searchState,
          [name]: value,
        });
  };

  const handleClickSearchButton = () => {
    // const arr = ["http://localhost:5000/api/GoalSettingForm"];

    const getGoalSettingInfo = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/GoalSettingForm"
        );
        const jsonData = await response.json();
        for (let i = 0; i < jsonData.length; i += 1) {
          return jsonData.map((data) =>
            searchState.search === data.email
              ? setGoalSetting((prevState) => [...prevState, data])
              : null
          );
        }
      } catch (err) {
        console.error(err.message);
      }
      return "Transaction successful";
    };
    getGoalSettingInfo();
  };

  return (
    <div>
      <UserProfileOwner
        handlechange={handleChange}
        searchstate={searchState}
        handleclicksearchbutton={handleClickSearchButton}
        goalsetting={goalSetting}
      />
    </div>
  );
}

export default PractisionerSearchFunctCon;
