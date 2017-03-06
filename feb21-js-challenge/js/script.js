var button = document.getElementById('button');
var div = document.getElementByTagName('div');

console.log(div);

for(var i = 0; i < div.Length; i++){
  div[i].addEventListener('mouseover', function()
    alert('hovering the div');
  })
}


for(var j = 0; j < classes.length; j++){
  classes[i].addEventListener('mouseover', function(){
    alert('clicked on the list item');
  });
}


button.addEventListener('click', function() {
  var nameLength = prompt('write your name that is more than or equal to 5 letters');
  if(nameLength.trim() === ''){
    alert('not just blanks please');
  }
  if(nameLength.length >= 5) {
    alert(nameLength);
  }else{
    alert('come on');
  }
});
// if(nameLength.length < 5 || nameLength.trim === ''){
//   alert('wrong');
// }else{
//   alert('nameLength')
// }
