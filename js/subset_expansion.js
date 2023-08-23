$(document).ready(function() {
    $("a").click(function() {    
        //On clicking a, use toggleClass method to toggle <div class="hide">   
        $(this).prev().toggleClass("hide");
        //Check if div has class "hide".
        if($(this).prev().hasClass("hide")){ 
            $(this).text("Show more"); 
        }
        //If not, then change text to show less
        else
        { 
             $(this).text("Show less");
    
        }    
    });    
});