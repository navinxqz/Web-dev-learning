var name1 = prompt("Enter the boy's name");
var name2 = prompt("Enter the girl's name");

var result = Math.floor(Math.random()*100) +1;

alert("Mr. "+name1+" Loves Ms. "+name2+" ->"+result+"%\n"+comment(result));

function comment(n){
    if(result <= 30){
    var m = "That's a shame.";
}else if(result >= 31 && result <= 80){
    var m = "Okey! That looks something.";
}else{
    var m = "Damm! So that's called the true love.";
}
    return m;
}