//-------calculate amount------------

var TotalAmount = document.getElementById("total-amount");
function myfunction() {
  var adultInfo = document.getElementById("adults").value;
  TotalAmount.value = "Rs." + adultInfo * 1000;
}
$(function () {
  var dtToday = new Date();

  var month = dtToday.getMonth() + 1;
  var day = dtToday.getDate();
  var year = dtToday.getFullYear();
  if (month < 10) month = "0" + month.toString();
  if (day < 10) day = "0" + day.toString();

  var minDate = year + "-" + month + "-" + day;

  $("#from-date").attr("min", minDate);
  $("#to-date").attr("min", minDate);
});
//-------calculate amount------------

//----Hotel details---------
var location_id = localStorage.getItem("Location");

clickForDetails();
function clickForDetails() {
  document.getElementById("loader").style.display = "block";
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);
      var urls = response.photo.images.large.url;
      var HOTELNAME = response.name;
      let Rating = response.rating;

      var Star = ["checked", "checked", "checked", "checked", "checked"];
      var RatingStar = [];
      let Ratings = parseInt(Rating);
      for (i = 0; i < Ratings; i++) {
        RatingStar[i] = Star[i];
      }
      var description = response.description;

      document.getElementById(
        "Hotel-Images"
      ).innerHTML = `<img id="hotel-detail-image" src="${urls}" alt="${HOTELNAME}">`;

      document.getElementById("description").innerHTML = `
           <h2 style="font-weight: bold; font-family: cursive"> ${HOTELNAME}</h2>
           <div style="font-weight: bold; font-family: cursive">RATING</div>
            <br />
          <div>
            <span class="fa fa-star ${RatingStar[0]}"></span>
            <span class="fa fa-star ${RatingStar[1]}"></span>
            <span class="fa fa-star ${RatingStar[2]}"></span>
            <span class="fa fa-star ${RatingStar[3]}"></span>
            <span class="fa fa-star ${RatingStar[4]}"></span>
          </div>
        <br />
        <div>
          <span style="font-weight: bold; font-family: cursive">AMENITIES</span>
          <ul id="amenities">
            
          </ul>
        </div>
        <br />
        <div style="font-weight: bold; font-family: cursive">DESCRIPITION</div>
        <p>${description}</p>`;

      var Info = "";
      for (i = 0; i < 10; i++) {
        Info = Info + "<li>" + response.amenities[i].name + "</li>";
      }
      document.getElementById("amenities").innerHTML = Info;
      document.getElementById("loader").style.display = "none";
    }
  };

  xhr.open(
    "GET",
    "https://travel-advisor.p.rapidapi.com/attractions/get-details?location_id=" +
      location_id
  );

  xhr.setRequestHeader(
    "x-rapidapi-key",
    "fe40f5b24dmsha63770bea97dccfp1e3198jsne411e12dc88c"
  );
  xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
  xhr.send();
}
//----Hotel details---------

//----get the customer details-------
function bookTicket() {
  var noOfAdults = document.getElementById("adults").value;
  localStorage.setItem("No of adults", noOfAdults);
  var cusName = document.getElementById("name").value;
  localStorage.setItem("customer Name", cusName);
  var date1 = document.getElementById("from-date").value;
  localStorage.setItem("check In date", date1);
  var date2 = document.getElementById("to-date").value;
  localStorage.setItem("to date", date2);
  var amount = document.getElementById("total-amount").value;
  localStorage.setItem("total amount", amount);
}
//----get the customer details-------
