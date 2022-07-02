$(function(){
   
    $("#skills li").hover(function () {
      
      $("#hobbies li").addClass("animation");
      $("#mylanguages li").addClass("animation");
        
      }, function () {
      
         $("#skills li").removeClass("animation");
         $("#mylanguages li").removeClass("animation");
      }
     );
});





