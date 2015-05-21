$(document).ready(function() {
    // Fix the navigation at the top of the page
    $(document).scroll(function () {
        var scroll = $(this).scrollTop();
        var topDist = $(".navbar-default").position();
        if (scroll > topDist.top) {
            $('nav').fadeIn().css({"position":"fixed","top":"0","width":"100%", "z-index":"1"});
        } else {
            $('nav').css({"position":"static","top":"auto"});
        }
    });
    
   // Header in all tables will be center aligned 
   if($("thead tr", this) !== null) {
      $("thead tr", this).children("*").attr("style", "text-align: center");
   }
   // Add copy to clipboard button before every pre
   if($("pre") !== null) {
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
      
	  // Category formatting: example, java-build will be changed to Build
	  var url = window.location.href;
	  if(url.indexOf(".html") != -1) { // This is the main page
		  $("h3").each(function(){
			var content = $(this).html();
			content = content.substring(content.indexOf("-") + 1);
			content = toTitleCase(content);
			content = decorateMeaningfulWords(content);
			$(this).html(content);
			
		  });
		  
		  // Modify each link
		  $(".row").find("a").each(function(){
			var content = $(this).html();
			content = toTitleCase(content);
			content = decorateMeaningfulWords(content);
			$(this).html(content);
		  });
	  }
	  
	  // Decorate words in <h1> tags
	  $("h1").each(function(){
		  var content = $(this).html();
		  content = decorateMeaningfulWords(content);
		  $(this).html(content);
	  });
	  
      $(".copy-button").click(function() {
            // If the button is visible
            if($( this ).parent().parent().is(':visible')) {
               //alert($(".selectedButton").parent().parent().parent().find("pre").html());
               //alert($("#codeCopied").html());
			   var clip = new ZeroClipboard.Client();
			clip.setHandCursor( true );
			
			clip.addEventListener('load', function (client) {
				//debugstr("Flash movie loaded and ready.");
			});
			
			clip.addEventListener('mouseOver', function (client) {
				// update the text on mouse over
				//clip.setText( $('fe_text').value );
			});
			
			clip.addEventListener('complete', function (client, text) {
				debugstr("Copied text to clipboard: " + text );
			});
			
			clip.glue( 'clickedButton', 'codeCopied' );
            }
         });
   }
});

function decorateMeaningfulWords(content)
{
	// Replace words where ever required.
	var definedKeys = $.trim($("#replaceWords").html()).split(",");
	
	var temp = content.toLowerCase();
	$.each(definedKeys, function( index, value ) {
		var length = value.length;
		var index = temp.indexOf(value.trim().toLowerCase());
		if(index >= 0) {
			var part1 = content.substr(0, index);
			var part2 = content.substr(index+length);
			content = part1 + value + part2;
		}
	});
	return content;
}

function toTitleCase(str) {
	return str.replace(/(?:^|\s)\w/g, function(match) {
		return match.toUpperCase();
	});
}

