$(document).ready(function() {
   // Header in all tables will be center aligned 
   $("thead tr", this).children("*").attr("style", "text-align: center");
   
   $("pre").hover(function() {
       $( this ).prepend( $( '<div style="text-align:right;"><button class="copy-button github"></button></div>' ) );
     }, function() {
       $( this ).find( "button:first" ).remove();
   });
   
   $(".copy-button").hover(function() {
      $( this ).parent().apend( $( '<div style="text-align:right;">Copy into clipboard</button></div>' ) );
     }, function() {
       $( this ).parent().find( "div:last" ).remove();
   });
   
   $(".copy-button").onclick(function() {
      alert("Copy text: ");
   });
});
