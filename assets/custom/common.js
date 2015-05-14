$(document).ready(function() {
   // Header in all tables will be center aligned 
   $("thead tr", this).children("*").attr("style", "text-align: center");
   
   // Add copy to clipboard button before every pre
    $("pre").wrap("<div class='codeSnippet'></div>");
    $(".codeSnippet").prepend('<div style="text-align:right; visibility:hidden;"><div><button class="copy-button github"></button></div><div style="color:red">Copy into Clipboard</div></div>');
   // Copy text into clipboard
   $(".codeSnippet").hover(function() {
       //$( this ).prepend( $( '<div style="text-align:right;" id="copyIntoClipBoard"><div><button class="copy-button github"></button></div><div style="color:red">Copy into Clipboard</div></div>' ) );
         $( this ).find("div:first").css("visibility", "visible");
         $( this ).find("div").find("button").addClass("selectedButton");
         
        /* $(".copy-button").hover(function() {
            //$(".copy-button").parent().apend( $( '<div style="text-align:right;">Copy into clipboard</button></div>' ) );
            //alert($(".copy-button").parent().parent().html().replace(/^(.*)$/mg, "<span class=\"line\">$1</span>"));
           }, function() {
             $(".copy-button").parent().find( "div:last" ).remove();
         });*/
     }, function() {
       //$( "#copyIntoClipBoard" ).remove();
       $( this ).find("div").find("button").removeClass("selectedButton");
       $( this ).find("div:first").css("visibility", "hidden");
   });
   
   $(".copy-button").click(function() {
         //alert($( this ).find("pre").html().replace(/^(.*)$/mg, "<span class=\"line\">$1</span>"));
         // If the button is visible
         if($( this ).parent().parent().is(':visible')) {
            alert($(".selectedButton").parent().parent().parent().find("pre").html());
            //alert("This feature is coming soon");
         }
      });

});
