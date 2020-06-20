// Tooltip
$( function() {
    $( document ).tooltip();
  } );

// Autocomplete   
$( function() {
    var availableTags = [
    "alligator",
    "ant",
    "bear",
     "bee",
     "bird",
     "camel",
     "cat",
     "cheetah",
     "chicken",
     "chimpanzee",
     "cow",
     "crocodile",
     "deer",
     "dog",
     "dolphin",
     "duck",
     "eagle",
     "elephant",
     "fish",
     "fly",
     "fox",
     "frog",
     "giraffe",
     "goat",
     "goldfish",
     "hamster",
     "hippopotamus",
     "horse",
     "kangaroo",
     "kitten",
     "lion",
     "lobster",
     "monkey",
     "octopus",
     "owl",
     "panda",
     "pig",
     "puppy",
     "rabbit",
     "rat",
     "scorpion",
     "seal",
     "shark",
     "sheep",
     "snail",
     "snake",
     "spider",
     "squirrel",
     "tiger",
     "turtle",
     "wolf",
     "zebra"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );

// Switch Class
  $( function() {
    $( "#button" ).on( "click", function() {
      $( ".newClass" ).switchClass( "newClass", "anotherNewClass", 1000 );
      $( ".anotherNewClass" ).switchClass( "anotherNewClass", "newClass", 1000 );
    });
  } );

  //Draggable
  $( function() {
    $( "#draggable" ).draggable();
  } );