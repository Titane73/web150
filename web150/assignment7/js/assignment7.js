var mpgForm = document.querySelector('form');
var miles = document.getElementById('miles');
var gallons = document.getElementById('gallons');
var result = document.getElementById('result');


function calcMpg(event) {
    event.target
    var mpg = miles/gallons;
    result. = mpg; // add content to results
}


mpgForm.addEventListener('submit', calcMpg);