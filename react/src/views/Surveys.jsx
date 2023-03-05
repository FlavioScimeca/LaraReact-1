import { PlusCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import CustomButton from "../components/core/CustomButton";
import PageComponent from "../components/PageComponent";
import { SurveyListItem } from "../components/SurveyListItem";
import { useStateContext } from "../Context/ContextProvider";

const Surveys = () => {
  const { surveys } = useStateContext();
  // console.log(surveys);

  const OnDeleteClick = () => {
    console.log("on delete");
  };

  return (
    <PageComponent
      title="surveys"
      button={
        <CustomButton color="green" to="/surveys/create">
          <PlusCircleIcon className="h-6 w-6 mr-2" />
          Create new
        </CustomButton>
      }
    >
      <h2>Surveys</h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {surveys.map((survey) => (
          <SurveyListItem
            key={survey.id}
            survey={survey}
            OnDeleteClick={OnDeleteClick}
          />
        ))}
      </div>
    </PageComponent>
  );
};

export default Surveys;
