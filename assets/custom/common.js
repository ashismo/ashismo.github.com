$(document).ready(function() {
   // Header in all tables will be center aligned 
   $("thead tr", this).children("*").attr("style", "text-align: center");
   
   // Copy text into clipboard
   $("pre").hover(function() {
       $( this ).prepend( $( '<div style="text-align:right;"><button class="copy-button github"></button></div>' ) );
         $(".copy-button").click(function() {
            alert($(".copy-button").parent().parent().html().replace(/^(.*)$/mg, "<span class=\"line\">$1</span>"));
         });
         $(".copy-button").hover(function() {
            $( this ).parent().apend( $( '<div style="text-align:right;">Copy into clipboard</button></div>' ) );
           }, function() {
             $( this ).parent().find( "div:last" ).remove();
         });
     }, function() {
       $( this ).find( "button:first" ).remove();
   });

});
