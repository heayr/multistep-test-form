// Step.js
import React, { useContext } from "react";
import { FormContext } from "../../App";
import { Position, Details, Contacts, AddVacancy } from "../Forms";

function Step() {
  const { activeStepIndex } = useContext(FormContext);
  let stepContent;
  switch (activeStepIndex) {
    case 0:
      stepContent = <Position />;
      break;
    case 1:
      stepContent = <Details />;
      break;
    case 2:
      stepContent = <Contacts />;
      break;
    case 3:
      stepContent = <AddVacancy />;
      break;
    default:
      break;
  }

  return stepContent;
}

export default Step;
