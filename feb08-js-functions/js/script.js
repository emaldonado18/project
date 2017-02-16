(function(){ //IIFE - Immediately Involked Function Excecutable


// var userName = prompt('whats your name?');
// var num1 = parseInt(prompt('pick your number'));
// var num2 = parseInt(prompt('pick another number'));


// function declaration
function funcdec(a, b, c){
  alert(a + (b + c));
}

// funcdec(userName, num1, num2);

var car = {
  make: 'ford',
  model: 'BMW',
  color: 'green'
};

function myModel(a){
  alert(a.model);
}
// parameters 'a' is SCOPED to function mtModel
// myModel(car);

// Function Excecutable
// var funcEx = function(){
//   alert(arguments[0]);
// }('eric', 25);


var Name = ['eric', 'david', 'gustavo', 'cobi', 'montgomery', 'kevin'].sort();

var Food = ['frosted flakes', 'cinnamin toast crunch', 'fruity pebbles', 'cocoa pebbles', 'fruit loops, hunny bunch oats'].sort();

var randName = Name[Math.floor(Math.random() * Name.length)];
var randFood = Food[Math.floor(Math.random() * Food.length)];

var spyname = function(){
  alert(arguments[0] + ' ' + arguments[1]);
}(randName, randFood);

var spyname = function(){
  alert(arguments[0] + ' ' +  arguments[1]);
}(randName, randFood)















})();
