$(document).ready(function(){

    $("title").text('JQuery'); //adding a new title
    toggled=false;
    $("#button1").click(function(){
    if(toggled){
        $("#titletag").text("Hallo Guest");
        $("#titletag").css ({
            color:"red",
            fontSize: "50px"
        });
    }
    else{
        $("#titletag").text("Hallo World");   
        $("#titletag").css ({
            color:"blue",
            fontSize: "25px"
        });
    }
    toggled = !toggled
})
$('body').append('<h1 id="heading">This is a heading</h1>')
$("#heading").slideToggle(3000);
$("#titletag").slideToggle(3000);

})  

    



