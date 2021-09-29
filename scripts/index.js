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

//----citycards--------------
function clickCards(citiess) {
  localStorage.setItem("cities", citiess);
  window.location.replace("/list.html");
  window.location = "/list.html?city=" + citiess;
}
//----citycards--------------

//----searchbar trigger-----------------

var disp = document.getElementById("result_UL");
disp.style.display = "none";
function search(event) {
  if (event.target.value.length > 2) {
    disp.style.display = "block";
    find(event.target.value);
  } else {
    disp.style.display = "none";
  }
}

function find(cities) {
  const xhr = new XMLHttpRequest();
  var Result = "";
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);

      for (index = 0; index < response.data.length; index++) {
        if (response.data[index].result_object.name != undefined) {
          console.log(response?.data[index]?.result_object.name);

          Result =
            Result +
            `<div onclick="handlePageChange('${response?.data[index]?.result_object.name}')"
            ><li id="option">${response.data[index].result_object.name}</li></
          >`;

          var show = document.getElementById("result_UL");
          show.innerHTML = "";
          show.innerHTML = Result;
        }
      }
    }
  };
  xhr.open(
    "GET",
    "https://travel-advisor.p.rapidapi.com/locations/auto-complete?query=" +
      cities
  );
  xhr.setRequestHeader(
    "x-rapidapi-key",
    "26cc93a231msh0ac0e0cc421947dp1c1df3jsn7ab32902b63f"
  );
  xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
  xhr.send();
}

const handlePageChange = (city) => {
  localStorage.setItem("cities", city);
  var name = city;
  window.location.replace("/list.html");
  window.location = "/list.html?city=" + name;
};

//----searchbar trigger-----------------
