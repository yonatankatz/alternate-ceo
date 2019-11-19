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
  var k8 = document.getElementById("8").value;
  var k9 = document.getElementById("9").value;
  var k10 = document.getElementById("10").value;
  var val = k1 + k2 + k3 + k4 + k5 + k6 + k7 + k8 + k9 + k10;
  if (hash(val.toLowerCase(), 1234) == "38543ffe") {
    window.location.href = "2.html";
  }
}
