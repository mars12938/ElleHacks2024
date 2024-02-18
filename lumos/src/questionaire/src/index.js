import React from "react";
import { createRoot } from "react-dom/client";
import SurveyCreatorRenderComponent from "./SurveyCreatorComponent";
import './index.scss';

const root = createRoot(document.getElementById("surveyCreatorContainer"));
root.render(<SurveyCreatorRenderComponent />);