var NeedTofindCities = localStorage.getItem("cities");
find();
function find() {
  var star = "checked";
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);
      debugger;
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
    }
  };

  xhr.open(
    "GET",
    "https://travel-advisor.p.rapidapi.com/locations/search?query=" +
      NeedTofindCities
  );
  xhr.setRequestHeader(
    "x-rapidapi-key",
    "fe40f5b24dmsha63770bea97dccfp1e3198jsne411e12dc88c"
  );
  xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
  xhr.send();
}
function clickForDetails(LocatioID) {
  localStorage.setItem("Location", LocatioID);
  window.location.replace("/detail.html");
  window.location = "/detail.html?id=" + LocatioID;
}
