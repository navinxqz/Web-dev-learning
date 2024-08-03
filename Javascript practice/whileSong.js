function sing(){
    var n = 9;
    var noun = "bottles";

    while(n>0){
        // if(n==0){
        //     console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
        //     n--;
        // }else{
        //     console.log(n +" bottles of beer on the wall, "+ n+" bottles of beer. Take one down and pass it around, "+(n-1)+" bottles of beer on the wall.");
        //     n--;
        // }
        if(n==1){ noun = "bottle"; }
        console.log(n+" "+noun+" of beer on the wall, "+n+" "+noun+" of beer.");
        n--;

        var value = n;
        if(n==0){ value = "No more"; }
        console.log("Take one down and pass it around, "+value+" "+noun+" of beer on the wall.");
    }
}