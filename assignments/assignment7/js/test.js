<script>
function calculateMpg() {
    // variables
    var milesDriven = document.getElementById("miles_driven").value;
    var gallonsUsed = document.getElementById("gallons_used").value;
    var pricePerGallon = document.getElementById("price_per_gallon").value;
    // input validation
    if (milesDriven <= 0 || gallonsUsed <= 0 || pricePerGallon <= 0) {

        alert("Please enter a value higher than 0!");
        formReset();
    } else {

        var mpgCost = milesDriven / gallonsUsed;

        var costOfTrip = pricePerGallon * gallonsUsed;
    }
    // if "undefined" set to 0
    if (mpgCost === undefined || costOfTrip === undefined) {
        mpgCost = 0;
        costOfTrip = 0;
    }
    // parse and format the output
    var pmpg = parseFloat(mpgCost).toFixed(2);
    document.getElementById("your_mpg").innerText = pmpg;

    var pcot = parseFloat(costOfTrip).toFixed(2);
    var output = "$" + pcot;
    document.getElementById("cost_of_trip").innerText = output;


}
// function to reset the form and fields 
function formReset() {
    document.getElementById("your_mpg").innerText = 0;
    document.getElementById("cost_of_trip").innerText = 0;
    document.getElementById("mileage_form").reset();
}

// initialize
function init() {
    document.getElementById("calculate").onclick = calculateMpg;
}

window.onload = init;
</script>