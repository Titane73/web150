var enterScore = 0;
var scores = 0;
var scoreCount = 0;
var result = '';

getScore();

function getScore() {
    enterScore = prompt("Enter test score: \nOr enter 999 to end entries");

    if (enterScore != '999') {
        scores = scores + parseInt(enterScore);
        scoreCount++;
        getScore();

    } else {
        result = alert('Average score is ' + scores / scoreCount);
    }

}