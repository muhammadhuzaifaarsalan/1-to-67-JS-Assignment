var cleanCities = ["New York", "Mumbai", "Paris", "Toronto"];
var numCities = cleanCities.length;
var citiesToCheck = "Mumbai";

var matchFound = false;

for (var i = 0; i < numCities; i++) {
    if (citiesToCheck === cleanCities[i]) {
        matchFound = true;
            alert('Clean city found!');
            break;
    }
  }
if (matchFound === false) {
    alert('This is not a clean city');
}