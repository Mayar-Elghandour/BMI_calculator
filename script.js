function myFunction(){
var weight=document.getElementById("weight").value;
var height=document.getElementById("height").value;
var bmii=weight/(height**2)*703;
bmi=bmii.toFixed(2)
document.getElementById("heading").innerHTML = "Your BMI is....."+bmi;
result= document.getElementById("result");
if (bmi <= 18.5) {
   result.innerHTML = "which makes you underweight";
} else if (bmi <= 24.9) {
   result.innerHTML = "which makes you normal";
} else if (bmi <= 29.9) {
   result.innerHTML = "which makes you overweight";
} else if (bmi > 29.9) {
   result.innerHTML = "which makes you very overweight";
} else {
   result.innerHTML = "...oops try again";
}

}