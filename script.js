$(document).ready(function(){
	//////////////////
    // Menu Principal
    /////////////////
	
	$('.myMenu > li').bind('mouseover', openSubMenu);
	$('.myMenu > li').bind('mouseout', closeSubMenu);
		
		function openSubMenu() {
			$(this).find('ul').css('visibility', 'visible');	
		};
		
		function closeSubMenu() {
			$(this).find('ul').css('visibility', 'hidden');	
		};
	
    ////////////////////////
    // Ultimas Publicaciones
    ////////////////////////

	// Elementos
	$('#last_pub').append('<li><a href="index.html">Bienvenidos</a></li>');
});