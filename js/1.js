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
  var val = k1 + k2 + k3 + k4;
  if (hash(val, 1234) == "839a2d6c") {
    window.location.href = "2.html";
  }
}

console.log("************************************");
console.log("************************************");
console.log("");
console.log(" THE KEY IS:");
console.log("98 + 1902 + 5460 / 35 * ( 1 + 2 + 3 + 4 + 3)");
console.log("");
console.log("************************************");
console.log("************************************");
