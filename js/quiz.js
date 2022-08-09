const popUpBody = document.getElementById("popUpBody");

let answers = ["Answer 1", "Answer 2", "Answer 3"];

displayQuizPage();


function displayQuizPage(){    
    for (count = 0; count < answers.length; count++){
        
        //create the label
        const thisCheckBoxLabel = document.createElement("label")
        thisCheckBoxLabel.setAttribute("for", "Q" + count);
        thisCheckBoxLabel.innerHTML = answers[count];
        popUpBody.appendChild(thisCheckBoxLabel);

        //create the checkbox
        const thisCheckBox = document.createElement("input");
        thisCheckBox.setAttribute("type", "checkbox");
        thisCheckBox.setAttribute("name", "Q" + count);
        popUpBody.appendChild(thisCheckBox);

        //just for now, we'll add a line break
        const newLine = document.createElement("br")
        popUpBody.appendChild(newLine);
        
    }
}