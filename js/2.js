$(document).ready(function() {
  // CSSMap;
  $("#map-continents").CSSMap({
    size: 1450
  });
  // END OF THE CSSMap;
});

function selectEurope() {
  setTimeout(function() {
    window.location.href = "3.html";
  }, 1000);
}

function selectAfrica() {
  setTimeout(function() {
    window.location.href = "5.html";
  }, 1000);
}

function selectAustralia() {
  setTimeout(function() {
    window.location.href = "5.html";
  }, 1000);
}

function selectAsia() {
  setTimeout(function() {
    window.location.href = "5.html";
  }, 1000);
}

function selectNorthAmerica() {
  setTimeout(function() {
    window.location.href = "4.html";
  }, 1000);
}

function selectSouthAmerica() {
  setTimeout(function() {
    window.location.href = "4.html";
  }, 1000);
}

$(window).bind("hashchange", function() {
  var h = window.location.hash;
  console.log("hash change " + h);
  if (h == "#europe") {
    selectEurope();
  }
  if (h == "#north-america") {
    selectNorthAmerica();
  }
  if (h == "#south-america") {
    selectSouthAmerica();
  }
  if (h == "#africa") {
    selectAfrica();
  }
  if (h == "#australia") {
    selectAustralia();
  }
  if (h == "#asia") {
    selectAsia();
  }
});
