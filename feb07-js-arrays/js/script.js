// var students = ['matthew', 'david', 'haley', 'marisa', 'micalela', 'olsvoldo', 'rosamaria', 'alfredo', 'rigoberto', 'leonardo', 'gustavo', 'eric', 'kevin', 'montgomery', 'cobi', 'joshua'];

// console.log(students.length);
/*
function randomStudent(){
  var numStudents = students.length;
  var randStudent = Math.ceil( Math.random() * numStudents - 1 );
  alert( students[randStudent] );
}
randomStudent();
*/

// var fruits = ['apple', 'banana', 'avocado', 'blackberry', 'mango', 'cherry'];
// console.log(fruits);

//  push - adds to the end of an array
// fruits.push('pineapple');
// console.log(fruits);

//  pop - removes from the front of an array
// var lastFruit = fruits.pop();
// console.log(fruits);
// console.log(lastFruit);

// unshift - adds to the front of an array
// fruits.unshift('kiwi');
// console.log(fruits);

// shift - removers from the front of an array
// var firstFruit = fruits.shift();
// console.log(fruits);
// console.log(firstFruit);

//indexOf - finds the index of an item in an array
// var posFruit = fruits.indexOf('avocado');
// console.log(posFruit);

// splice - remove an item by index number
// var remFruit = fruits.splice(2, 3);
//                           ^  ^
//                    index number removed
// console.log(remFruit);
// console.log(fruits);

// slice - copies an array
// var copyFruit = fruits.slice(1 ,3);
//                           ^  ^
//            starting index up-to but not including
// console.log(fruits);
// console.log(copyFruit);
// console.log(fruits);

var me = ['chior'];

me.push('geekwise', 'spanish');
console.log(me);

me.unshift('math', 'english');
console.log(me);

var mysplice = me.splice(4, 5);
console.log(me);
console.log(mysplice);

// sort - machine alphebetization
me.sort();
console.log(me);

// reverse
me.reverse();
console.log(me);

var num = [0, 53, 5, 103, 7, 78, 10];
// 0, 5, 7, 10, 53, 78, 103
num.sort();
console.log(num);
