function sing(){
    var n = 9;
    var noun = "bottles";
    var value = n;

    while(n>=0){
        if(n==1){ noun = "bottle"; }
        if(n==0){ value = "No more"; }
        console.log(value+" "+noun+" of beer on the wall, "+value+" "+noun+" of beer.");
        n--;

        value = n;
        console.log("Take one down and pass it around, "+value+" "+noun+" of beer on the wall.");
    }
}