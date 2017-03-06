var form = document.querySelector('form');
var subBtn = document.querySelector('input[type="submit"]');
subBtn.addEventListener('click', function(evt){
  evt.preventDefaults();
  concole.log(evt);
})
