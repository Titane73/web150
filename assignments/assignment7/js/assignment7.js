// allows the page to completely load before executing script
window.onload = function() {


    // declare function to calculate mile per gallon
    function calcMpg() {
        // variables for each field for calculation
        var miles = parseInt(document.getElementById('miles').value);
        var gallons =parseInt(document.getElementById('gallons').value);

        // test to make sure values are greater than 0
        if (miles <= 0 || gallons <= 0){
            alert('Please enter values higher than \"0\"');
            reset();
        // if so, then calculate and set results
        } else {
            var mpg = miles / gallons;
            document.getElementById('results').value = mpg;
        }
   
    }
    
    // event listener for button click
    document.getElementById("btn").addEventListener("click", calcMpg);
    
}



   
