//Business logic
// var result ;
// function romanNumber() {

var numberSet = [[1000, 'M'], [900,'CM'], [500, 'D'],  [400, 'CD'], [100, 'C'], 
[90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1,'I']];

var numChecker = function(number) {
  if (number < 1 || number > 3999) {
    return false; //"This number isn't a roman numeral"
  } else {
    return true;
  }
};

var romanNumber = function(number) {
  if (number === 0) {
    return "";
  }
  for (var i = 0;  i < numberSet.length ; i++) {
    if (number >= numberSet[i][0]) {
      return numberSet[i][1] + romanNumber(number - numberSet[i][0]);
    };
  };
};


//UI logic

$(document).ready(function() {
  $("#converter").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("#number").val());
    var result;

    if (numChecker(userNumber) === true) {
      result = romanNumber(userNumber);
    } else {
      result = "This number can't be a roman numeral"
    }

    $("#output").text(result);
    $(".well").show();
  });
});

// func() vs func = function(){}
// https://www.learnhowtoprogram.com/react/functional-programming-with-javascript-3399822d-e51a-4550-8a09-b2e81cf0a43d/recursion-4e6c5262-4a01-448d-b06f-f1078856739e

// https://www.youtube.com/watch?v=Qlr-FGbhKaI