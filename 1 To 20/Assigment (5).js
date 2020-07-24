alert("Math expressions:Familiar operators");
function addTwoNumbers() {
    var number1, number2
    number1=parseFloat(document.getElementById("number1").value);
    number2=parseFloat(document.getElementById("number2").value);
    //alert(number1+number2);
    document.getElementById("result").value=number1+number2;
}