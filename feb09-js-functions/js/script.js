// IIFE -  Immediatley Invoked Function Expression
// (function(){

// function Decloration
function funcDec(userMessage, userAge){
  // alert('this is form the decloration');
  console.log(userAge, userMessage);
}
funcDec('hello', 21);
// PARAMENTER & ARGUMENT
// fincDec(); // calling (aka involking, aka running) the function
var myNum; // undefined variable
// function Expretion
var funcExp = function(){
  myNum = 3;
  // funcDec();
  // alert('this is from the expresion');
}(); // immediatley invoke the function with ()
// funcExp(); // calling (aka involkin, aka runnning) the funtion

// hoisting - places all function DECLORATIONS and variable names to memory before calling (aka involking aka running) scripts

// SCOPE - a variable that exists ONLY within the function

// RETURN

function getFullName(a, b){
  return a + ' ' + b;
}

console.log( getFullName('Eric', 'Maldonado') );

function getUserName (){
  // alert('from get username');
  var userName = prompt('what your name');
  var userMsg = 'hello ' + userName + '!';
  return userMsg;
}
function alertUserName(){
  alert( getUserName() );
}
alertUserName();

alertUserName





// }())





// function funcAlert(){
//   var funcDec(){
//     prompt('hey whats your name?');
//   }
//   console.log(funcDec, 'hey nice to meet you!', funcDec, 'its nice to meet you ;)');
//   funcDec();
// }
//
// function getFullName(){
//   console.log();
//   return a + ' ' + b;
// }
