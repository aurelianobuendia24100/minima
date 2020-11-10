$(document).ready(function(){
  var $name = $('#name'),
    $address = $('#address'),
    $number = $('#number'),
    $formData = $('form#data'),
    $conversation = $('#conversation');

  $formData.submit(function(e) {
    e.preventDefault();
    var message = $number.val() + ' ' + $name.val() + ' ' + $address.val(),
        $yourMessage = $('#yourMessage'),
      $yourDate = $('#yourDate'),
      $theirMessage = $('#theirMessage'),
        $theirDate = $('#theirDate');
    $yourMessage.text(message);
    $theirMessage.text('Μετακίνηση ' + message);
    $conversation.show();

  });
});
var elem = document.getElementById("body");

elem.onclick = function() {
  req = elem.requestFullScreen || elem.webkitRequestFullScreen || elem.mozRequestFullScreen;
  req.call(elem);
}
