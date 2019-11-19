$(document).ready(function() {
  $("input:text").focus(function() {
    $(this).select();
  });
});

function next(next) {
  document.getElementById(next).focus();
}

function checkValue() {
  var k1 = document.getElementById("1").value;
  var k2 = document.getElementById("2").value;
  var k3 = document.getElementById("3").value;
  var k4 = document.getElementById("4").value;
  var k5 = document.getElementById("5").value;
  var k6 = document.getElementById("6").value;
  var k7 = document.getElementById("7").value;
  var val = k1 + k2 + k3 + k4 + k5 + k6 + k7;
  if (hash(val.toLowerCase(), 1234) == "b1fea96c") {
    window.location.href = "finish.html";
  }
}
