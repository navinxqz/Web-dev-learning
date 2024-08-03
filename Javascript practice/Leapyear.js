var year = prompt("Input year");
alert("The year "+ year + Leap(year));

function Leap(year){
    if(((year%4==0) && (year%100 !=0)) || (year%400==0)){
        return " is a leap year";
    }else{
        return " is not a leap year.";
    }
}