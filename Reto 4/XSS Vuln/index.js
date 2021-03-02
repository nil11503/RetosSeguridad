$(document).ready(function() {
	var input = $("#input");
	var output = $("#output");
	var button = $("#button");

	button.click(function() {
		output.val() = input.val()

		console.log(`Set text to ${input.val()}`);
	});
});

// function setText() {
// 	let inputTxt = document.getElementById("input").innerHTML;

// 	document.getElementById("output").innerHTML = inputTxt;
// 	console.log(`======= Text =======\n${inputTxt}`);
// }
