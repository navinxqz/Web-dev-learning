// var age = prompt("Enter your age");

// var days = (90*365) - (age*365);
// var weeks = (90*52) - (age*52);
// var months = (90*12) - (age*12);

// alert("You have "+days+" days, "+weeks+" weeks, and "+months+" months left.");
var weight = prompt("Input your weight (kg)");
var height = prompt("Input your height (m)");

function result(weight,height){
    return Math.round(weight / (height*height));
}

alert("Your BMI value is: "+result(weight,height));