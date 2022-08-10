const popUpBody = document.getElementById("popUpBody");
const displayResult = document.createElement("p");

let question = "What is the answer?";
let answers = ["Answer 1", "Answer 2", "Answer 3", "Answer 4"];

let quizPage = {
    question: question, answers: answers, correctAnswer: 1

}

loadQuiz();


function displayQuizPage(){    
    //create and display the question
    const pageContainer = document.createElement("div");
    pageContainer.classList.add("pageContainer");
    popUpBody.appendChild(pageContainer);
    const thisQuestion = document.createElement("p");
    thisQuestion.innerHTML = quizPage.question;
    pageContainer.appendChild(thisQuestion);
    
    for (count = 0; count < quizPage.answers.length; count++){
        //create the checkbox
        const thisCheckBox = document.createElement("input");
        thisCheckBox.setAttribute("type", "checkbox");
        thisCheckBox.setAttribute("name", "Q" + count);
        thisCheckBox.classList.add("answer");
        pageContainer.appendChild(thisCheckBox);

        //create the label
        const thisCheckBoxLabel = document.createElement("label")
        thisCheckBoxLabel.setAttribute("for", "Q" + count);
        thisCheckBoxLabel.classList.add("answerLabel");
        thisCheckBoxLabel.innerHTML = quizPage.answers[count];
        pageContainer.appendChild(thisCheckBoxLabel);

        //just for now, we'll add a line break
        const newLine = document.createElement("br")
        pageContainer.appendChild(newLine);    
    }
    //add the check answer button
    const getResult = document.createElement("button");
    getResult.setAttribute("onclick", "checkAnswer()");
    getResult.innerHTML="CHECK"
    pageContainer.appendChild(getResult);

    //and somewhere for the result
    pageContainer.appendChild(displayResult);
}

function checkAnswer(){
    let thisIndex = 0;
    let correctAnswer = false;

    //retrieve the answers
    const theseAnswers = document.querySelectorAll(".answer");
      
    //iterate through answers to mark results
    for (let thisAnswer of theseAnswers){
    if (thisAnswer.checked) {
            if((thisIndex + 1) == quizPage.correctAnswer) correctAnswer = true;
            else correctAnswer = false;
        }
    thisIndex++;
   }
   
   let thisResult = "Sorry, You were incorect!"
   if (correctAnswer) thisResult = "Congratulations, that's correct!";
   displayResult.innerHTML = thisResult;
   
}

function loadQuiz(){
    fetch('data/quiz.json')
    .then(response => response.json())
    .then(data => { 
        quizPage.question = data.question;
        quizPage.answers = data.answers;
        quizPage.correctAnswer = data.correctAnswer;

        console.log(quizPage);
        displayQuizPage();
    });
}