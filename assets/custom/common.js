$(document).ready(function() {
   // Header in all tables will be center aligned 
   $("thead tr", this).children("*").attr("style", "text-align: center");
   
   $("pre").mouseover(function() {
       $( this ).prepend( $( "<div style='text-align: right;'>Copy to Clipboard</div>" ) );
     }, function() {
       $( this ).find( "div:first" ).remove();
   });
});
