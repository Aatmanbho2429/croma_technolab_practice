
//----------------------------Bmi start-------------------------------
// var a=prompt("enter weight");
// var b=prompt("enter height");
// 
// function bmiCalculator (weight, height) {
//     var interpretation=weight/(height*height);
//     return interpretation;
// }
// var bmi=bmiCalculator(a,b);

// if (bmi<18.5) {
//     alert("your bmi is"+bmi+"so you are underweight");
// }
// if (bmi>=18.5 && bmi<=24.9) {
//     alert("your bmi is"+bmi+"so you have a normal weight");
// }
// else{
//     alert("your bmi is "+bmi+"so you are overweight");
// }
//----------------------------Bmi end-------------------------------




function calculateBMI() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var bmi = weight / ((height/100) ** 2);
    document.getElementById("result").innerHTML = "Your BMI is: " + bmi.toFixed(2);
  }