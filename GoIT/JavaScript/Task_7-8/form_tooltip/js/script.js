$(function() {
  
 $( "#firstname" ).after( "<span class='firstname'>Please provide your firstname.</span>" );
 $(".firstname").css("opacity", "0");
    
 $('#firstname').hover(
     function(){
       $(".firstname").animate({
        opacity: 0.7,
        }, 1500 );
     },
     function(){
       $(".firstname").animate({
        opacity: 0,
        }, 1000 );
 });
 
  
  $( "#lastname" ).after( "<span class='lastname'>Please provide your lastname.</span>" );
 $(".lastname").css("opacity", "0");
    
 $('#lastname').hover(
     function(){
       $(".lastname").animate({
        opacity: 0.7,
        }, 1500 );
     },
     function(){
       $(".lastname").animate({
        opacity: 0,
        }, 1000 );
 });
 
 
 $( "#address" ).after( "<span class='address'>Your home or work address.</span>" );
 $(".address").css("opacity", "0");
    
 $('#address').hover(
     function(){
       $(".address").animate({
        opacity: 0.7,
        }, 1500 );
     },
     function(){
       $(".address").animate({
        opacity: 0,
        }, 1000 );
 });
       

});    