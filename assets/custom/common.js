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
       $(".codeSnippet").prepend('<div style="text-align:right; visibility:hidden;"><div><button class="copy-button github" id="copy-button"></button></div><div style="color:red">Copy into Clipboard</div></div>');
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
      // Select code if double clicked
      $(".codeSnippet").dblclick(function() {
	  $(this).find('pre').selectText();
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
            	//alert("Clicked");
            	$(this).closest('.codeSnippet').find('pre').selectText();
            	$('#box-content').html(getSelectionText());
            	
            	/*//ZeroClipboard.setMoviePath('../ZeroClipboard/ZeroClipboard.swf');
            	ZeroClipboard.setMoviePath('http://davidwalsh.name/dw-content/ZeroClipboard.swf');
            	//create client
		var clip = new ZeroClipboard.Client();
		//event
		clip.addEventListener('mousedown',function() {
			//clip.setText(getSelectionText());
			clip.setText(document.getElementById('box-content').value);
		});
		clip.addEventListener('complete',function(client,text) {
			alert('copied: ' + text);
		});
		//glue it to the button
		clip.glue('copy-button');*/
		
		
	    var clientText = new ZeroClipboard( $('#box-content'), {
              moviePath: "http://www.paulund.co.uk/playground/demo/zeroclipboard-demo/zeroclipboard/ZeroClipboard.swf",
              debug: false
            } );

            clientText.on( "load", function(clientText)
            {
                //$('#flash-loaded').fadeIn();

                clientText.on( "complete", function(clientText, args) {
                    clientText.setText( args.text );
                    //$('#text-to-copy-text').fadeIn();
                } );
       	    } );

		
		
		$(this).closest('.codeSnippet').find('pre').removeSelection();
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

jQuery.fn.selectText = function(){
   var doc = document;
   var element = this[0];
   //console.log(this, element);
   if (doc.body.createTextRange) {
       var range = document.body.createTextRange();
       range.moveToElementText(element);
       range.select();
   } else if (window.getSelection) {
       var selection = window.getSelection();        
       var range = document.createRange();
       range.selectNodeContents(element);
       selection.removeAllRanges();
       selection.addRange(range);
   }
};

jQuery.fn.removeSelection = function(){
	if (window.getSelection) {
	  if (window.getSelection().empty) {  // Chrome
	    window.getSelection().empty();
	  } else if (window.getSelection().removeAllRanges) {  // Firefox
	    window.getSelection().removeAllRanges();
	  }
	} else if (document.selection) {  // IE?
	  document.selection.empty();
	}
};

// This function returns the selected text
function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}
