// create object template for starships
function Starship(name, weapons, weapons_fired) {
    this.name = name;
    this.weapons = weapons;
    this.weapons_fired = weapons_fired;
    this.weaponsStatus = function () {
        return this.weapons - this.weapons_fired;
    };
}

// create two starship objects(with parameters)
var exploreStarship = new Starship('Enterprise', 50, 13);
var smuggleStarship = new Starship('Serenity', 15, 3);


// CREATE DATA FOR INDEX.HTML

// create variable to hold data, set ship name and content,
var status1 = exploreStarship.name + ' Weapons Status: ';

// then concatenate with results of function 
status1 += exploreStarship.weaponsStatus();
status1 += ' / ' + exploreStarship.weapons;

//create variable representing location on index.html
var starshipElement1 = document.getElementById('starship1');

//using textContent, load data in status1 for display on index.html
starshipElement1.textContent = status1;

//lather, rinse, repeat
var status2 = smuggleStarship.name + ' Weapons Status: ';
status2 += smuggleStarship.weaponsStatus();
status2 += ' / ' + smuggleStarship.weapons;
var starshipElement2 = document.getElementById('starship2');
starshipElement2.textContent = status2;
