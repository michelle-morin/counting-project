// front-end logic:

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var numberOne = parseInt($("input#number1").val());
    var numberTwo = parseInt($("input#number2").val());

    var listOfNUmbers = [];
    for (var index = numberTwo; index <= numberOne; index += numberTwo) {
      listOfNUmbers.push(index);
    }

    $("#output").show();
    listOfNUmbers.forEach(function(number) {
      $("ul").append("<li>" + number + "</li>");
    })
  })
})