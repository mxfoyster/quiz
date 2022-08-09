const popUpBody = document.getElementById("popUpBody");

let question = "What is the answer?";
let answers = ["Answer 1", "Answer 2", "Answer 3", "Answer 4"];

let quizPage = {
    question: question, answers: answers, correctAnswer: 1

}

displayQuizPage();


function displayQuizPage(){    
    //create and display the question
    const thisQuestion = document.createElement("p");
    thisQuestion.innerHTML = quizPage.question;
    popUpBody.appendChild(thisQuestion);
    
    for (count = 0; count < quizPage.answers.length; count++){
        //create the label
        const thisCheckBoxLabel = document.createElement("label")
        thisCheckBoxLabel.setAttribute("for", "Q" + count);
        thisCheckBoxLabel.innerHTML = quizPage.answers[count];
        popUpBody.appendChild(thisCheckBoxLabel);

        //create the checkbox
        const thisCheckBox = document.createElement("input");
        thisCheckBox.setAttribute("type", "checkbox");
        thisCheckBox.setAttribute("name", "Q" + count);
        thisCheckBox.setAttribute("class", "answer");
        popUpBody.appendChild(thisCheckBox);

        //just for now, we'll add a line break
        const newLine = document.createElement("br")
        popUpBody.appendChild(newLine);    
    }
    //add the check answer button
    const getResult = document.createElement("button");
    getResult.setAttribute("onclick", "checkAnswer()");
    getResult.innerHTML="CHECK"
    popUpBody.appendChild(getResult);
}

function checkAnswer(){
    const theseAnswers = document.querySelectorAll(".answer");
    console.log(theseAnswers);
    let thisIndex = 0;
   for (let thisAnswer of theseAnswers){
    if (thisAnswer.checked) if(thisIndex == quizPage.correctAnswer) console.log("CORRECT");
    thisIndex++;
   }
}