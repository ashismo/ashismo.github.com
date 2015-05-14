$(document).ready(function() {
   // Header in all tables will be center aligned 
   $("thead tr", this).children("*").attr("style", "text-align: center");
   
   // Add copy to clipboard button before every pre
    $("pre").wrap("<div class='codeSnippet'></div>");
    $(".codeSnippet").prepend('<div style="text-align:right; visibility:hidden;"><div><button class="copy-button github"></button></div><div style="color:red">Copy into Clipboard</div></div>');
   // Copy text into clipboard
   $(".codeSnippet").hover(function() {
         $( this ).find("div:first").css("visibility", "visible");
         $( this ).prepend('<div style="display:none;" id="codeCopied"></div>');
         $( this ).find("div").find("button").addClass("selectedButton");
         $( this ).find("div").find("button").attr("id", "clickedButton")
     }, function() {
       $( "#codeCopied" ).remove();
       $( this ).find("div").find("button").removeClass("selectedButton");
       $( this ).find("div").find("button").removeAttr("id");
       $( this ).find("div:first").css("visibility", "hidden");
   });
   
   $(".copy-button").click(function() {
         // If the button is visible
         if($( this ).parent().parent().is(':visible')) {
            //alert($(".selectedButton").parent().parent().parent().find("pre").html());
            alert($("#codeCopied").html());
         }
      });

});

