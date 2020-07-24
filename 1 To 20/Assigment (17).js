var fruits = [""];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  fruits.splice(2, 0, "Banana", "Orange", "Apple", "Mango");
  document.getElementById("demo").innerHTML = fruits;
}