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
