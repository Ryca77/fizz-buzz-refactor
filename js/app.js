$(document).ready(function() {

$('button').click(function() {
	var inputVal = $('input').val();

	var entry = parseInt(inputVal);
	console.log(entry);

var refactor = function(entry) {

	for(i = 1; i <= entry; i++) {
		if(i % 3 === 0 && i % 5 === 0) {
			console.log("fizzbuzz");
		}
		else if (i % 3 === 0) {
			console.log("fizz");
		}
		else if (i % 5 === 0) {
			console.log("buzz");
		}
		else {
			console.log(i);
		}
	}
console.log(refactor);

}

})

});







