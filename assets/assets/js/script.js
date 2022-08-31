document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                console.log("you clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                console.log(`you clicked ${gameType}`);

            }
        })
    }
})

function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaysubtractQuestion() {

}

function displayMultiplyQuestion() {

}