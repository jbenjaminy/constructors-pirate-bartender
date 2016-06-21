$(document).ready( function(){

	// VARIABLES
	var newDrink = [];

	// CONTSTRUCTOR
	var Drinktype = function (taste, content, question) {
		this.taste = taste;
		this.content = content;
		this.question = question;
	};
	Drinktype.prototype.randomizer = function () {
		return this.content[Math.floor((Math.random() * 3))];
	};

	var makeDrink = function (drinkPreferences) {
		// TAKES USER INPUT PREFERENCES AND STORES THEM IN NEW DRINK ARRAY
		newDrink = [];
		// RANDOMIZED SELECTION OF AN INGREDIENT FROM EACH CATEGORY
		$.each(drinkPreferences, function(index, element) {
			for ( var i = 0; i < ingredients.length; i++ ) {
				if (element.value === ingredients[i].taste) {
					newDrink.push(ingredients[i].randomizer());
				}
			}
		});
		drinkServe(newDrink);
	};

	// BUILDING OBJECTS
	var strong = new Drinktype('strong', ["Glug of rum", "Slug of whisky", "Splash of gin"], "Do ye like yer drinks strong?");
	var salty = new Drinktype('salty', ["Olive on a stick", "Salt-dusted rim", "Rasher of bacon"], "Do ye like it with a salty tang?");
	var bitter = new Drinktype('bitter', ["Shake of bitters", "Splash of tonic", "Twist of lemon peel"], "Are ye a lubber who likes it bitter?");
	var sweet = new Drinktype('sweet', ["Sugar cube", "Spoonful of honey", "Splash of cola"], "Would ye like a bit of sweetness with yer poison?");
	var fruity = new Drinktype('fruity', ["Slice of orange", "Dash of cassis", "Cherry on top"], "Are ye one for a fruity finish?");
	var ingredients = [strong, salty, bitter, sweet, fruity];

	// MAKE DRINK CLICK FUNCTION
	$('#make-drink').click(function(){
		var drinkPreferences = $('#questions-list').find('input[name=questions-input]:checked');
		makeDrink(drinkPreferences);
	});

	// DISPLAY QUESTIONS
	displayQs();

	// DRINK CREATION FUNCTION
	function displayQs () {
		for ( var i = 0; i < ingredients.length; i++ ) {
			var questionItem = '<li><input type="checkbox" name="questions-input" value="' + ingredients[i].taste +'">' + ' ' + ingredients[i].question + '</li>';
			$('#questions-list').append(questionItem);
		}
	}

	function drinkServe (newDrink) {
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

