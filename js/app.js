$(document).ready( function(){

// VARIABLES
var newDrink = [];

var ingredients = {
    strong: ["Glug of rum", "Slug of whisky", "Splash of gin"],
    salty: ["Olive on a stick", "Salt-dusted rim", "Rasher of bacon"],
    bitter: ["Shake of bitters", "Splash of tonic", "Twist of lemon peel"],
    sweet: ["Sugar cube", "Spoonful of honey", "Splash of cola"],
    fruity: ["Slice of orange", "Dash of cassis", "Cherry on top"],
};

// MAKE DRINK CLICK FUNCTION
	$('#make-drink').click(function(){
		makeDrink();
	});

// DRINK CREATION FUNCTION
	function makeDrink() {
		// TAKES USER INPUT PREFERENCES AND STORES THEM IN NEW DRINK ARRAY
		var drinkPreferences = $('#questions-list').find('input[name=questions-input]:checked');
		newDrink = [];
		// RANDOMIZED SELECTION OF AN INGREDIENT FROM EACH CATEGORY
		$.each(drinkPreferences, function(index, element) {
			newDrink.push(ingredients[element.value][
				Math.floor((Math.random() * 3))]);
		});
		// DISPLAYS THE FINISHED DRINK RECIPE AND PLAYS SOUND CLIP
		$('.main').hide();
		$('.finished-drinks').show();
		var drinkName = "";
		for (var i = 0; i < newDrink.length; i++) {
			drinkName += newDrink[i] + " ";
		}
		$('#drink').text("Here's your" + " " + drinkName + " " + "Brew!");
			soundClip();
	}

// CLICK FUNCTION TO RESET SELECTION AND MAKE NEW DRINK 
	$('body').on('click', '#new-drink', function(event){
		$('.main').hide();
		$('.questions').show();
		$('input[type=checkbox]').prop('checked', false);
	});

// SOUND CLIP LOAD AND PLAY FUNCTION
	function soundClip() {
	    $("#pirate-song")[0].volume = 0.5;
	    $("#pirate-song")[0].load();
	    $("#pirate-song")[0].play();
	}

});

