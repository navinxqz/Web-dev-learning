$("h1").addClass("big margin50");
// $("h1").click(function(){
//     $("h1").css("color","purple");
// });

$("a").attr("href","https://www.yahoo.com");

// for(var i=0;i<5;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         document.querySelector("h1").style.color = "purple";
//     });
// }

$("button").click(function(){
    $("h1").css("color","pink");
});

$("input").css("margin-left","50px");
$("button").css("margin-top","30px");

$("input").keydown(function(event){
    $("h1").text(event.key);
})