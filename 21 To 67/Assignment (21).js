 var cityToCheck = prompt("Enter your city");
 cityToCheck = cityToCheck.toLowerCase();
 var cleanestCities = ["karachi", "blachistan", "", "great falls", "honolulu"];
 for (var i = 0; i <= 4; i++) {
 if (cityToCheck === cleanestCities[i]) {
 alert("😀 This is very nice city 😃 ");
 }
 }
