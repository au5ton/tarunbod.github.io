var width_paths = [
"css/stylesheets/small.css",
"css/stylesheets/medium.css",
"css/stylesheets/large.css",
];

var small_max = 767;
var medium_min = 768;
var medium_max = 991; 
var large_min = 992;

var mode;

function width() {
  return document.body.clientWidth;
}

function height() {
  return Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
}

function width_isBetween(val,min,max) {
  if(val >= min && val <= max) {
    return true;
  }
  return false;
}

function getModeByName(mode) {
	return mode;
}

function getMode() {
  if (width() <= small_max) {
    return "small";
  } else if (width_isBetween(width(), medium_min, medium_max)) {
    return "medium";
  } else if (width() >= large_min) {
    return "large";
  }
  return undefined;
}

function setLink() {
  var e = document.getElementById("widthStylesheet");
  if (getMode() == "small") {
    e.setAttribute("href",width_paths[0]);
  } else if (getMode() == "medium") {
    e.setAttribute("href",width_paths[1]);
  } else if (getMode() == "large") {
    e.setAttribute("href",width_paths[2]);
  }
}
