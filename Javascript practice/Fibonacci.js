function fibonacci(value){
    var f1=0 , f2=1, next;
    var output = [];

    for(var i=1; i<=value; i++){
        output.push(f1);
        next = f1 + f2;
        f1 = f2;
        f2 = next;
    }return output;
}
var v = prompt("Input value: ");
console.log(fibonacci(v));