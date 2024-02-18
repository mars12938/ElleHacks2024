const surveyJson = {
  "title": "Ways to Help Survey",
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
      ]
    },
    {
      "name": "page2",
      "elements": [
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
      "name": "page3",
      "elements": [
        {
          "type": "radiogroup",
          "name": "minority",
          "title": "Is your biological sex female?",
          "choices": [
            "Yes",
            "No"
          ]
        },
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
      ]
    }
  ],
  "completedHtml": "<h3>Thank you for completing our survey</h3>",
  "completedHtmlOnCondition": [
    {
      "expression": "{age} == '17 to 24' && {sunlight} == '0 to 2'",
      "html": "<h3>Thank you for your feedback</h3> <h4>We are glad that you love our product. Your ideas and suggestions will help us make it even better.</h4>"
    },
    {
      "expression": "{sunlight} == '0 to 2'",
      "html": "<h3>Thank you for your feedback</h3> <h4>We are glad that you shared your ideas with us. They will help us make our product better.</h4>"
    }
  ],
  "showQuestionNumbers": "off"
};