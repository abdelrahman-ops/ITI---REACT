var dateInput = prompt("Enter a date (yyyy-mm-dd):");
var date = new Date(dateInput);

if (isNaN(date.getTime())) {
  console.log("Invalid date input.");
} else {
  var monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  console.log("Month name:", monthNames[date.getMonth()]);
}
