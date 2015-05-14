$(document).ready(function() {
   // Header in all tables will be center aligned 
   $("thead tr", this).children("*").attr("style", "text-align: center");
   
   // Add copy to clipboard button before every pre
    $("pre").wrap("<div class='codeSnippet'></div>");
    $(".codeSnippet").prepend('<div style="text-align:right; display:none;" id="copyIntoClipBoard"><div><button class="copy-button github"></button></div><div style="color:red">Copy into Clipboard</div></div>');
   // Copy text into clipboard
   $("pre").hover(function() {
       //$( this ).prepend( $( '<div style="text-align:right;" id="copyIntoClipBoard"><div><button class="copy-button github"></button></div><div style="color:red">Copy into Clipboard</div></div>' ) );
         $( this ).parent().css("display", "block");
         $(".copy-button").click(function() {
            alert($("#copyIntoClipBoard").parent().html().replace(/^(.*)$/mg, "<span class=\"line\">$1</span>"));
         });
         $(".copy-button").hover(function() {
            //$(".copy-button").parent().apend( $( '<div style="text-align:right;">Copy into clipboard</button></div>' ) );
            //alert($(".copy-button").parent().parent().html().replace(/^(.*)$/mg, "<span class=\"line\">$1</span>"));
           }, function() {
             $(".copy-button").parent().find( "div:last" ).remove();
         });
     }, function() {
       //$( "#copyIntoClipBoard" ).remove();
       $( this ).parent().css("display", "none");
   });

});
