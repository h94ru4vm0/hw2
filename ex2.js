function greet(){
  console.log(`hi`);
};
greet();
function logGreeting(fn){
  fn();
};
logGreeting(greet);
var greetMe = function(){
  console.log(`hi Tony`);
};
 logGreeting(greetMe);
// Your Javascript Code Goes Here
