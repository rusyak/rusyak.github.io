 $(function(){
 	var $submenu = $('.active_jquery');

 	$submenu.hover(
 		function() {    
 			$(this).find('ul:first').slideDown(500).animate({backgroundColor: '#4da6ff'}, 800);
 		},
 		function() {  
 			$(this).find('ul:first').slideUp(500).animate({backgroundColor: '#ff6666'}, 800);
 		});

 });