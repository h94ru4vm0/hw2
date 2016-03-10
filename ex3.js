// function statement
function greet() {
	console.log('hi');
}
greet();

// function expression
var greetMe () = function() {
	console.log('Hi Tony!');
}
greetMe();

greetSam = () => console.log('hi Sam');
greetSam();
greetYou =() => console.log(`hi ${name} !`)
greetYou();
