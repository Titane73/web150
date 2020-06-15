//----- POPULATE UL WITH ARRAY  ----->

// Variable with items to be added to the UL
var parts = ["Airfoil", "Cosmic Overdrive", "Gyroscopic Stabilizer", "Bio-Energy Array"];

// create nodelist in array
var items = document.querySelectorAll('li');


// loop through to populate the items list
for (var i = 0; i < items.length; i++) {
    items[i].textContent = parts[i];
}

//------------- END ------------------<



//-- CHANGE COLOR OF H1 EACH LOAD OF PAGE ->

function changeColor() {
    // array of colors to choose from 
    var colors = ['rgb(255, 0, 0)', 'rgb(15, 15, 255)', 'rgb(0, 255, 0)', 'rgb(255, 255, 0)', 'rgb(255, 0, 255)'];
    // select random color frpm array
    var new_color = colors[Math.floor(Math.random() * colors.length)]; 

    // assign color to 
    var elHeader = document.getElementById('header');
    elHeader.style.color = new_color;
}
changeColor();
//------------- END ------------------<



//-----  UPDATE SUBHEADER TEXT  ----->

var msg;
var whichDeal = document.getElementById('header').style.color;

//Change text to new msg depending on the color selected for header
    switch (whichDeal){
        case 'rgb(255, 0, 0)':
            msg = "Most Cosmic Savings in the Galaxy!";
            break;
        case 'rgb(15, 15, 255)':
            msg = "Deals Hotter than Solar Flares!"
            break;
        case 'rgb(0, 255, 0)':
            msg = "We Steal It So You Don\"t Have To!";
            break;
        case 'rgb(255, 255, 0)':
            msg = "Huurh Huuguughghg Raaaaaahhgh Aarrragghuuhw Huuguughghg Hnnnhrrhhh"; // first msg in Wookie
            break;
        case 'rgb(255, 0, 255)':
            msg = "Vi chakur bic bid gar Don\'t ganar brokar!";  // third msg in Mandalorian
    }
// target element
var deals = document.getElementById("deals");
// populate with corresponding msg
deals.textContent = msg;

//---------- END --------------<



//-----  ADD ITEM TO THE LIST  ----->

// create new 'li' element
var newLI = document.createElement('li');
// create the text to add
var addText = document.createTextNode('Hyperdrive');

// populate new element with text
newLI.appendChild(addText);
// and tell it where to put it
var position = document.getElementsByTagName('ul')[0];
position.appendChild(newLI);
			


// **How to:
//      - appending elements from an array
//      - loading initial items randomly 
