function myFunction() {
    var greeting;
    var time = new Date().getHours();
    if (time < 10) {
      greeting = "Good morning";
    } else if (time < 20) {
      greeting = "Good day";
    } else if (time < 20) {
      greeting = "Good look";
    }
    document.getElementById("demo").innerHTML = greeting;
  }