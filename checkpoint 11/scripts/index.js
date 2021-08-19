//------view more option.....
var moreCityOption = document.getElementById("city-cards-set2");
var ViewLessButton = document.getElementById("viewLessButton");
var ViewMoreButton = document.getElementById("viewMoreButton");
function showMoreOption() {
  moreCityOption.style.display = "flex";
  ViewMoreButton.style.display = "none";
  ViewLessButton.style.display = "block";
}
function showLessOption() {
  moreCityOption.style.display = "none";
  ViewMoreButton.style.display = "block";
  ViewLessButton.style.display = "none";
}
//------view more option.....
