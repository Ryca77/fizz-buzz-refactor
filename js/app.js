$(document).ready(function() {

$('button').click(function() {
	var inputVal = $('input').val();

	var entry = parseInt(inputVal);
	console.log(entry);

	$('div').html(refactor(entry));

});

function refactor(not) {

if (not < 1) {
      return "Enter a value greater than 1";
    }

var result = " ";

	for(i = 1; i <= not; i++) {
		if(i % 3 === 0 && i % 5 === 0) {
			result += "fizzbuzz ";
		}
		else if (i % 3 === 0) {
			result += "fizz ";
		}
		else if (i % 5 === 0) {
			result += "buzz ";
		}
		else {
			result += i + " ";
		}
	}
	return result;
}

});







