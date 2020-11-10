$(document).ready(function(){
  var $button = $('#button'),
    $name = $('#name'),
    $address = $('#address'),
    $number = $('#number'),
    $form = $('form')
  $form.submit(function(e) {
    e.preventDefault();

  });
});
var elem = document.getElementById("body");

elem.onclick = function() {
  req = elem.requestFullScreen || elem.webkitRequestFullScreen || elem.mozRequestFullScreen;
  req.call(elem);
}
