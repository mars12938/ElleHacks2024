import { useCallback } from 'react';

//import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import './index.scss';

const surveyJson = {
    "title": "",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "radiogroup",
            "name": "age",
            "title": "Which age bracket would you fall into (in years)?",
            "choices": [
              "Under 13",
              "13 to 16",
              "17 to 24",
              "25 to 30",
              "46+"
            ]
          },
          {
            "type": "radiogroup",
            "name": "student",
            "visibleIf": "{age} == '17 to 24'",
            "title": "Are you a student?",
            "choices": [
              "Yes",
              "No"
            ]
          },
        ]
      },
      {
        "name": "page2",
        "elements": [
          {
            "type": "radiogroup",
            "name": "sunlight",
            "title": "How many days a week (on average) are you getting direct sunlight?",
            "choices": [
              "0 to 2",
              "3 to 5",
              "6 to 7"
            ]
          },
          {
            "type": "radiogroup",
            "name": "contact",
            "title": "Have you been in contact with loved ones recently?",
            "choices": [
              "Yes",
              "No"
            ]
          },
        ]
      },
    ],
    "completedHtml": "<h1>Seasonal affective disorder affects many people across Canada. Please make sure you are taking care of your mental and physical well-being.</h1>",
    "completedHtmlOnCondition": [
      {
        "expression": "{student} == 'Yes'",
        "html": "<h1>Student</h1> <h3>There has been substantial research on the correlation between students and seasonal affective disorder. School can be an added source of stress, but it's important to prioritize your well-being and make time for yourself outside of academic obligations. <a href='https://ontario.cmha.ca/documents/mental-health-resources-in-schools/'><button>More Resources</button></a></h3>"
      },
      {
        "expression": "{sunlight} == '0 to 2' || {sunlight} == '3 to 5'",
        "html": "<h1>Lack of Sunlight</h1> <h3>Decreased exposure to sunlight is a leading cause of SAD. To increase your exposure, there are many options, including walking outside more often, purchasing a light therapy lamp, and/or Vitamin D supplements. A new resource for you is LumosLite, a Chrome Extension that reminds you to get some sunlight! Please refer to the following link to see further guidelines on these options: <a href='https://www.mayoclinic.org/diseases-conditions/seasonal-affective-disorder/in-depth/seasonal-affective-disorder-treatment/art-20048298#:~:text=Increasing%20exposure%20too%20fast%20or,specialist%20before%20starting%20light%20therapy'> <button>More Resources</button></a></h3>"
      },
      {
        "expression": "{contact} == 'No'",
        "html": "<h1>Contact with Loved Ones</h1> <h3>Withdrawing from friends and family is a common side-effect of SAD, and individuals are encouraged to stay connected to those they care about. A new resource to assist with this is LumosLite, a Chrome Extension that reminds users to reach out to those they care about!</h3>"
      },
    ],
    "showQuestionNumbers": "off"
  };

function SurveyCreatorComponent() {
  const survey = new Model(surveyJson);
  /*const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    alert(results);
  }, []);*/

  //survey.onComplete.add(alertResults);

  return <Survey model={survey} />;
}

export default SurveyCreatorComponent;
