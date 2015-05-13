$(document).ready(function() {
   // Header in all tables will be center aligned 
   $("thead tr", this).children("*").attr("style", "text-align: center");
   
   $("pre").hover(function() {
       $( this ).append( $( "<span> ***</span>" ) );
     }, function() {
       $( this ).find( "span:last" ).remove();
   });
});
