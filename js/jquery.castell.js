;(function($){
	function mobileNav(){
		$(".btnMobileNav").on("click", function(){
			var display = $(".topNav").css("display");
			if(display == "none"){
				$(this).addClass("closeNav");
				$(".topNav").stop(true, true).fadeIn(300);
				/*$("html, body").css({
					overflow:"hidden"
				});*/
			}
			else{
				$(this).removeClass("closeNav");
				$(".topNav").stop(true, true).fadeOut(300);
				/*$("html, body").css({
					overflow:"visible"
				});*/
			}
		});
	}

	function bannerText(){
		TweenMax.from(".topBanner h3", 0.75, {bottom:-100, scale:0, opacity:0, ease: Power3.easeInOut});
		TweenMax.from(".topBanner h4", 0.75, {bottom:-100, scale:0, delay:0.2, opacity:0, ease: Power3.easeInOut});
	}

	

	$(function(){
		mobileNav();
		bannerText();
	});

})(jQuery);




