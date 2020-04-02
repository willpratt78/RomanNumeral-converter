//Business logic
// var result ;
// function romanNumber() {

var numberSet = [[1000, 'M'], [900,'CM'], [500, 'D'],  [400, 'CD'], [100, 'C'], 
[90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1,'I']];

var romanNumber = function(number) {
  if (number < 1 || number > 3999) {
    return "This number isn't a roman numeral"
  };
  for (var i = 0;  i < numberSet.length ; i++) {
    if (number >= numberSet[i][0]) {
      return numberSet[i][1] + romanNumber(number - numberSet[i][0]);
    }
    };
  };


//UI logic

$(document).ready(function() {
  $("#converter").submit(function(event) {
    event.preventDefault();
    // var romanNumber = number
    var userNumber = parseInt($("#number").val());

    let result = romanNumber(userNumber);

    $("#output").text(result);
    $(".well").show();
  });
});

// func() vs func = function(){}