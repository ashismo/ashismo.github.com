$(document).ready(function() {
   // Header in all tables will be center aligned 
   $("thead tr", this).children("*").attr("style", "text-align: center");
   
   $("pre").hover(function() {
       $( this ).prepend( $( '<button class="copy-button github" data-toggle="tooltip" data-clipboard-text="https://github.com/spring-guides/gs-maven.git"></button>' ) );
     }, function() {
       $( this ).find( "button:first" ).remove();
   });
});
