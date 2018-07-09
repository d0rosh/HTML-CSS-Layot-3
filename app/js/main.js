(function(){

	// user drobdown menu
	$('.more-btn').click(function(){
		$('.user-dropdown-menu').slideToggle('fast');

		onResize();	
	});

	$(window).click(function(event){
		let targetClass = event.target.className;
		if (targetClass != 'more-btn') {
			$('.user-dropdown-menu').slideUp('fast');
		}
	});

	function onResize(){
		let width = $(window).width();

		if(width < 480) {
			$('.user-dropdown-menu').css({'width':'100%'});
		}else {
			$('.user-dropdown-menu').css({'width':'80px'});
		}

		width < 768 ? $('nav').css({'top':'120px'}) : $('nav').css({'top':'60px'})
	}

	$(window).resize(function(){
		onResize();
	})

	// left menu
	var open = false;
	$('.nav-btn').click(function(){
		if (!open) {
			open = true;
			$('nav ul li span').animate({'left':'40px','transition':'0s'}, 150);
			$(this).parent().animate({ "left": "0" }, "fast");
			$('.content').addClass('scale-content');
		}else {
			open = false;
			var step = 0;
			$.each($('nav ul li span'), function(i, el){
				step += 0.05;
			    $(el).animate({
			       'left':'186px',
			       'transition': step + 's'
			    }, 300);
			});

			$(this).parent().animate({ "left": "-170px" }, 400);
			$('.content').removeClass('scale-content');
		}	
	});

	$('nav ul li').mouseleave(function() {
		if (!open) {
			$(this).animate({'left':'0px'},300).find('span').animate({'left':'186px'},150)
		}   
	})
	.mouseover(function() {
	  	if (!open) {
			$(this).animate({'left':'170px'},50).find('span').animate({'left':'15px'},50)
		}
	});
}());