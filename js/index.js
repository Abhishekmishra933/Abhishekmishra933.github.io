
$(document).ready(function () {
  

}
);
$("#two").click(function () {
    $(".card").removeClass("hide");
    $("#one").removeClass("selected");
    $(".products").addClass("hide");
    $("#two").addClass("selected");
    
}
);
$("#one").click(function () {
    $(".card").addClass("hide");
    $("#one").addClass("selected");
    $(".products").removeClass("hide");
    $("#two").removeClass("selected");
    
}
);
$(".imicon").click(function()
{
    $(".parentes").removeClass("hide");
    $(".parent").addClass("hide");
         
         $("body").css("background-color", "#00bcd4");
    
    

});
$(".close").click(function()
{
    $(".parentes").addClass("hide");
    $(".parent").removeClass("hide");
    $("body").css("background-color", "white");
});