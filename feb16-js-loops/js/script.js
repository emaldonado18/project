var addBtn = document.getElementById('addBtn');
var removeBtn = document.getElementById('removeBtn');
var userNameArray = [];


var movies

addBtn.addEventListener('click', userPrompt);
removeBtn.addEventListener('click', function(){
  alert('remove');
});
function populateArray(un){
  userNameArray.push();
  console.log(userNameArray);
  if(userNameArray.length >= 5){
    outputArray();
  }
}

function outputArray(){
  userNameArray.forEach(function(el, idx){
    console.log(idx + ' : ' + el);
  });
  /*
  for(var i = 0; i < userNameArray.length; i = i + 1){
    console.log(userNameArray[i]);
  }
  */
}

function userPrompt(){
  var userName = prompt('gimme yo name foo');
  if(userName === null){
    alert('please enter a username');
    return;
  }

  var userNameParsed = parseInt(userName);
  var userNameNaN = isNaN(userNameParsed);
  var userNameBlank = userName.trim() === ; // !== / ===
  // console.log('origianl; '+userName);
  // console.log('parsed: '+userNameParsed);
  // console.log('is it NaN: '+userNameNaN);
  // console.log('is it blank: '+userNameBlank);

  if(
    userNameNaN === false &&
    userNameBlank === false ||
    userNameNaN === true &&
    userNameBlank === true
  ){
    alert('you entered bad info');
  }else{
    alert('you may continue');
  }
}
