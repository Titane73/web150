// set up variables
var enterScore = 0; // initiates prompt in loop
var scores = 0; // holds scores being enter by adding them together
var i = -1; // creates a count of entries, -1 offsets for the last entry of 999
var result = ''; // empty string for end results

do {
    //  prompt for entries
    enterScore = prompt("Enter test score: \nOr enter 999 to end entries");
    // scores takes the entries, then adds each entry to the existing 
    scores = scores + parseInt(enterScore);
    // count of entries, adding one to total each loop
    i++;
    // will loop until 999 is entered into the prompt
} while (enterScore != 999);
// subtract the last entry of 999
scores = scores - 999;

// result is set to the last pop up (alert), with the average
result = alert('Average score is ' + (scores) / i);