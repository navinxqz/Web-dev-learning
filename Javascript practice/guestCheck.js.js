var name = prompt("Enter your name");
alert(name + check(name));

function check(name){
    var guests = ["Navin","Eva","Amrin","Jack","Anne"];
    
    for (var i = 0; i<guests.length; i++){
        if(name == guests[i]){
            return ", welcome to the party!";
        }
    }return ", puta madre!";
}