var NeedTofindCities = localStorage.getItem("cities");
find();
function find() {
  document.getElementById("loader").style.display = "block";
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);
      var holtellist = "";
      for (index = 1; index < response.data.length; index++) {
        if (response.data[index].result_object.category.name == "Hotel") {
          var hotelName = response.data[index].result_object.name;
          var hotelUrl =
            response.data[index].result_object.photo.images.small.url;
          var locationId = response.data[index].result_object.location_id;
          let rating = response.data[index].result_object.rating;
          let Address = response.data[index].result_object.address;

          holtellist =
            holtellist +
            "<div>" +
            `<div onclick="clickForDetails(${locationId})" id="hotel-list-cards">  
              <img id="Hotel-images" src=${hotelUrl} alt=${hotelName}>
            <figcaption>
                 <h3>${hotelName}</h3>
              <div>
                 <span>${rating}</span>
                 <span class="fa fa-star checked"></span>
             </div>
             <div>${Address}</div>
          </figcaption>
          </div>` +
            "</div>";

          var divToShowResult = document.getElementById("HOTEL_LIST");
          divToShowResult.innerHTML = "";
          divToShowResult.innerHTML = holtellist;
        }
      }
      document.getElementById("loader").style.display = "none";
    }
  };

  xhr.open(
    "GET",
    "https://travel-advisor.p.rapidapi.com/locations/search?query=" +
      NeedTofindCities
  );
  xhr.setRequestHeader(
    "x-rapidapi-key",
    "26cc93a231msh0ac0e0cc421947dp1c1df3jsn7ab32902b63f"
  );
  xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
  xhr.send();
}
function clickForDetails(LocatioID) {
  localStorage.setItem("Location", LocatioID);
  window.location.replace("/detail.html");
  window.location = "/detail.html?id=" + LocatioID;
}

//----map view--------------
var list = document.getElementById("HOTEL_LIST");
var map = document.getElementById("map-view");
function click2() {
  list.style.display = "none";
  map.style.display = "block";
  document.getElementById("list-content").style.marginBottom = "0px";
}
function click1() {
  list.style.display = "grid";
  map.style.display = "none";
  document.getElementById("list-content").style.marginBottom = "500px";
}
//----map view--------------
