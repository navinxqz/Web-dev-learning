var year = prompt("Input year");
alert("The year "+ year + Leap(year));

function Leap(year){
    var m;
    if(((year%4==0) && (year%100 !=0)) || (year%400==0)){
        m = " is a leap year";
    }else{
        m = " is not a leap year.";
    }return m;
}
