var a;

const GITHUB_URL = 'http://github.com/';
console.log(GITHUB_URL);

console.log('Notification' in window);

// if ( !'Notification' in window ){
//   console.log('not avalable');
// }else{
//   console.log('is avalables');
// }

var btn = document.querySelector('button');
console.log(btn);

if(!'childElementCount' in btn){
  itIsnt();
}else{
  itIs();
}

console.log('childElementCount' in btn);

function itIs(){
  alert('The method id avalable');
}else{
  alert('The method is NOT avalable');
}
