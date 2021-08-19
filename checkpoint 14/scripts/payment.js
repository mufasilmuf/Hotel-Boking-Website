function paymentStatus() {
  return alert("Hi your booking is successfull !!");
}
//------customer details----------------
document.getElementById("NameofCustomer").innerHTML =
  localStorage.getItem("customer Name");
document.getElementById("NumberOfAdults").innerHTML =
  localStorage.getItem("No of adults");
document.getElementById("Check_in_date").innerHTML =
  localStorage.getItem("check In date");
document.getElementById("Check_out_date").innerHTML =
  localStorage.getItem("to date");
document.getElementById("payment").innerHTML =
  localStorage.getItem("total amount");
document.getElementById("breakDown").innerHTML =
  "Rs.1000 x " + localStorage.getItem("No of adults") + "Adults";
//------customer details----------------

//----address card-----------------------
var location_ids = localStorage.getItem("Location");

var xhrpayment = new XMLHttpRequest();
document.getElementById("loader").style.display = "block";
xhrpayment.onreadystatechange = () => {
  if (xhrpayment.readyState == 4 && xhrpayment.status == 200) {
    var response = JSON.parse(xhrpayment.responseText);
    debugger;
    var imageurl = response.photo.images.large.url;
    var Hotel_name = response.name;
    var ranking = response.ranking;
    var address = response.address;

    document.getElementById("hotel-payment").innerHTML = `
    <div>
    <img id="hotel-payment-images" src=${imageurl} alt=${Hotel_name}>
    </div>

    <div id="Hotel-Info">
         <h2>${Hotel_name}</h2>
          <span>${ranking}</span>
         <br>
         <br>
         <span>${address}</span>
    </div>`;
    document.getElementById("loader").style.display = "none";
  }
};

xhrpayment.open(
  "GET",
  "https://travel-advisor.p.rapidapi.com/attractions/get-details?location_id=" +
    location_ids
);

xhrpayment.setRequestHeader(
  "x-rapidapi-key",
  "fe40f5b24dmsha63770bea97dccfp1e3198jsne411e12dc88c"
);
xhrpayment.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
xhrpayment.send();
//----address card-----------------------
