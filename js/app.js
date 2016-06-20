$(document).ready( function(){
var newDrink = [];
var ingredients = {

    strong: ["Glug of rum", "Slug of whisky", "Splash of gin"],
    salty: ["Olive on a stick", "Salt-dusted rim", "Rasher of bacon"],
    bitter: ["Shake of bitters", "Splash of tonic", "Twist of lemon peel"],
    sweet: ["Sugar cube", "Spoonful of honey", "Splash of cola"],
    fruity: ["Slice of orange", "Dash of cassis", "Cherry on top"],

};

	$('#make-drink').click(function(){
		makeDrink();
	});

// Function drink creation
	function makeDrink() {
		var drinkPreferences = $('#questions-list').find('input[name=questions-input]:checked');
		newDrink = [];
		$.each(drinkPreferences, function(index, element) {
			newDrink.push(ingredients[element.value][
				Math.floor((Math.random() * 3))]);
				
		});
		console.log(newDrink);	
		$('.main').hide();
		$('.finished-drinks').show();
		var drinkName = "";
		for (var i = 0; i < newDrink.length; i++) {
			drinkName += newDrink[i] + " ";
		}
		$('#drink').text("Here's your" + " " + drinkName + " " + "Brew!");
			soundClip();
	}

	$('body').on('click', '#new-drink', function(event){
		$('.main').hide();
		$('.questions').show();
		$('input[type=checkbox]').prop('checked', false);
		$("#pirate-song")[0].stop();
	});


function soundClip() {
    $("#pirate-song")[0].volume = 0.2;
    $("#pirate-song")[0].load();
    $("#pirate-song")[0].play();
};

});