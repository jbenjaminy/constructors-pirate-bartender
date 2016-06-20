$(document).ready( function(){

var ingredientsArr = {

    Strong: ["Glug of rum", "slug of whisky", "splash of gin"],
    Salty: ["Olive on a stick", "salt-dusted rim", "rasher of bacon"],
    Bitter: ["Shake of bitters", "splash of tonic", "twist of lemon peel"],
    Sweet: ["Sugar cube", "spoonful of honey", "splash of cola"],
    Fruity: ["Slice of orange", "dash of cassis", "cherry on top"],

};

	$('#make-drink').click(function(){
		makeDrink();
	});

// Function drink creation
	// take user input
	function makeDrink() {
		var drinkPreferences = $('#questions-list').find('input[name=questions-input]:checked').val();
		console.log(drinkPreferences);
			if (drinkPreferences
		// If we get a response from the checkbox === 'on'
			// Then, we will locate where that 'on' is coming from (what ingredient)
				// and then mix it up
	}
		// for all yesses randomly select ingredient from category matching that key
			// randomNumber = Math.floor((Math.random() * 100) + 1);
	// add all ingredients selected to drink array
	// return statement
// "Here's your" + ingredient + "brew."

// $('#questions-list').append("<li>" + "Do ye like yer drinks strong?" + "<input type="checkbox"></li>
// 			<li>Do ye like it with a salty tang?<input type="checkbox"></li>
// 			<li>Are ye a lubber who likes it bitter?<input type="checkbox"></li>
// 			<li>Would ye like a bit of sweetness with yer poison?<input type="checkbox"></li>
// 			<li>Are ye one for a fruity finish?<input type="checkbox"></li>

// var drinkQuestions = {
//    	Question1: "Do ye like yer drinks strong?",
//    	Question2: "Do ye like it with a salty tang?",
//     Question3: "Are ye a lubber who likes it bitter?",
//     Question4: "Would ye like a bit of sweetness with yer poison?",
//     Question5: "Are ye one for a fruity finish?"
// }
});