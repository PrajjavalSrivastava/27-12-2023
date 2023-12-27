//Function
function bmiCalculator(weight, height){
    //code
    var bmi = weight / (height ^ 2); 
    return bmi;
}

var height = 1.8;
var weight = 65;

var bmi = bmiCalculator(65, 1.8);
console.log(bmi);