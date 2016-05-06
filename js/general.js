// $( "#contentload" ).load( "content/index.php", function() {
  
// });
$(document).ready(function(){
	//initial
	$('#contentload').load('content/index.php');
	
	//handle menu clicks
	$('ul#nav li a').click(function(){
		var page = $(this).attr('href');
		$('#contentload').load('content/'+ page + '.php');
		return false;
	});

	$('a#logolink').click(function() { 
                            $('#contentload').load('content/album_more.php');
                            return false;
                    });
                    

	

	//handle content part clicks
	// $('div#top-list a').click(function(){
	// 	var contpart = $(this).attr('href');
	// 	$('#featured-tab-wrap').load('content/'+ contpart + '.php');
	// 	return false;
	// });

	
});

