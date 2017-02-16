var str = "Eric Maldonado"
var modStr = str.substr(1, 4);
var userName = prompt('whats your name').trim();
// console.log(userName);
// var res = str.toLowerCase();
// console.log(str.substr());
// var res = str.toUpperCase();
// console.log(str.toUpperCase());
function declaration() {
return prompt('what yo name').trim();

}

  var modName = function() {
    var userName = declaration();
  var userMsg = userName;
  var length = userName.length;
  var first = userMsg.charAt(1).toUpperCase();
  var last = userMsg.substr(1, length).toLowerCase();
  var whole = first + last;
  console.log(last);
  console.log(first);

  return whole;
}

function alertName() {
  alert(modName());
}

alertName();

function changeColor() {
  var randNum = Math.floor(Math.random() * 360) + 1;
  console.log(randNum);
  document.body.style.backgroundColor = 'hsl('+ randNum +' , 50%, 50%)';
}

var extBtn = document.getElementById('external');
var content = document.getElementById('content');
console.log(content);

extBtn.addEventListener('click', function() {
  var name = prompt('what your name');
  content.textContent = name;
});
