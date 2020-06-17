# 04 Web APIs: Code Quiz

As you proceed in your career as a web developer, you will probably be asked to complete a coding assessment, which is typically a combination of multiple-choice questions and interactive challenges. Build a timed code quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

## User Story

```
AS A coding bootcamp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz

WHEN I click the start button  < got a button 

THEN a timer starts and I am presented with a question < Add questions, display at <div id=question>
Need an array of questions and answers :  use objects

WHEN I answer a question < add a text box and button to submit answer

THEN I am presented with another question
WHEN I answer a question incorrectly  < array of objects with questions and answers>
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

The following animation demonstrates the application functionality:

![code quiz](./Assets/04-web-apis-homework-demo.gif)

## You should set your questions as an object like this example:

```js
var questions = [
  {
    title: "Example Question 1:",
    choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
    answer: "answer from choices"
  },
  {
    title: "Example Question 2:",
    choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
    answer: "answer from choices"
  }
];
```
//hook elements from the page
var containerE1 = document.querySelector(".container)
## Check list
```
✓ The first view of the application displays a button used to start the quiz.
✓ Clicking the 'Start Quiz' button displays a series of questions.
✓ Once the quiz begins, a countdown timer starts.
✓ If a question is answered incorrectly, additional time is subtracted from the timer.
✓ The timer ends when all questions have been answered or the timer reaches 0.
✓ After the game ends, the user can save their initials and score to a highscores view using local storage.
✓ Repository contains quality README with description, screenshot, link to deployed application.
```

### Deployment:
```
✓   Application loads at deployed URL.
✓   GitHub Repo contains application code.
```

## Submission
```
You are required to submit the following for review:

1. The URL of the deployed application.

2. The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

Total of two (2) links.
```

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
