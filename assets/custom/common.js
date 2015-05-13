$(document).ready(function() {
   // Header in all tables will be center aligned 
   $("thead tr", this).children("*").attr("style", "text-align: center");
   
   $("pre").hover(function() {
       $( this ).prepend( $( '<div style="text-align:right;"><button class="copy-button github"></button></div>' ) );
     }, function() {
       $( this ).find( "button:first" ).remove();
   });
});
