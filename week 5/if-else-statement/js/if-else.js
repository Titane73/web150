var pass = 80; // Pass mark
var score = 75; // Current score
var msg; // Message

// Select message to write based on score
if (score > pass) {
    msg = 'Congratulations, you passed!';
} else {
    msg = 'You FAIL! You should be ashamed! Try again.';
}

var el = document.getElementById('answer');
el.textContent = msg;