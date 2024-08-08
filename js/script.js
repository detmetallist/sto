$(window).on('load', function (){
	var wind_width = $(window).width();
	var wind_height = $(window).height();
	$('.contacts-map').width(wind_width-40);
	$('.contacts-map').height(wind_height-40);
	$('.contacts-map iframe').width(wind_width-80);
	$('.contacts-map iframe').height(wind_height-140);
	$('.contacts-map .map-box').width(wind_width-80);
	$('.reviews-box-content').height(wind_height-100);
	$('.articles-items').height(wind_height-250);
	$('.articles-text').height(wind_height-250);
	var slider_kol = $('.slider .item-box').length;
	var bg_scrolltop = $('.items-bg').offset().top;
	var slider_width = slider_kol*245;
	var nomer_slaida = 0;
	var slide_margin = 0;
	var kol_slide_vid = Math.floor($('.slide-item').width()/215);
	var kol_ost = slider_kol-kol_slide_vid;
	$('.slide-items').css('width',slider_width);
	$('.left-slide-arrow').click(function(){
		if(nomer_slaida>0){
			nomer_slaida--;
			slide_margin+=245;
			$('.slide-items').stop().animate({'margin-left':slide_margin},300);
		}
		return false;
	});
	$('.right-slide-arrow').click(function(){
		if(nomer_slaida<kol_ost){
			nomer_slaida++;
			slide_margin-=245;
			$('.slide-items').stop().animate({'margin-left':slide_margin},300);
		}
		return false;
	});
	$(window).scroll(function(){
		if($(window).scrollTop()>=100){
			$(".logo").stop().animate({"width":"12%","margin-right":"100px"},300);
			$("menu").stop().animate({"padding":"17px 0"},300);
			$(".phone .phone_right").stop().fadeOut(0);
			$(".line-bg").stop().animate({"height":"70px"},300);
		}
		else{
			$(".logo").stop().animate({"width":"17%","margin-right":"40px"},300);
			$("menu").stop().animate({"padding":"30px 0"},300);
			$(".phone .phone_right").stop().fadeIn(300);
			$(".line-bg").stop().animate({"height":"90px"},300)
		}
		var window_top = window.pageYOffset;
		if(wind_width>1020&&window_top<1500){
			var bg_top = window_top - bg_scrolltop;
			$(".items-bg").stop().animate({"top":bg_top+"px"},20);
		}
	});
	$(".reviews").mouseover(function(){
		$(this).stop().animate({"left":"-168px"},300)
	});
	$(".reviews").mouseleave(function(){
		$(this).stop().animate({"left":"-180px"},300)
	});
	$(".certificates").mouseover(function(){
		$(this).stop().animate({"right":"-168px"},300)
	});
	$(".certificates").mouseleave(function(){
		$(this).stop().animate({"right":"-180px"},300)
	});
	$(".contacts").mouseover(function(){
		$(this).stop().animate({"bottom":"0px"},300)
	});
	$(".contacts").mouseleave(function(){
		$(this).stop().animate({"bottom":"-12px"},300)
	});
	$(".callback a").mouseover(function(){
		if(wind_width>1020){
			$(this).stop().animate({"width":"320px"},300);
			$(".callback a p").stop().animate({"width":"230px"},300);
		}
	});
	$(".callback a").mouseleave(function(){
		if(wind_width>1020){
			$(this).stop().animate({"width":"80px"},300);
			$(".callback a p").stop().animate({"width":"0px"},300);
		}
	});
	$('a[href^="#onas"]').click(function () {
		destination = $("#onas").offset().top-75;
		$('html').animate( { "scrollTop": destination }, 2000 );
		return false;
	});
	$('a[href^="#categories"]').click(function () {
		destination = $("#categories").offset().top-75;
		$('html').animate( { "scrollTop": destination }, 2000 );
		return false;
	});
	$('a[href^="#otzivi"]').click(function () {
		$(".reviews-b").animate({"left":"0"},300);
		return false;
	});
	$('.reviews-b .button_close').click(function () {
		$(".reviews-b").animate({"left":"-100vw"},300);
	});
	$('a[href^="#certificates"]').click(function () {
		$(".certificates-b").animate({"left":"0"},300);
		return false;
	});
	$('.certificates-b .button_close').click(function () {
		$(".certificates-b").animate({"left":"100vw"},300);
	});
	$('a[href^="#contacts"]').click(function () {
		$(".contacts-b").animate({"bottom":"0"},300);
		return false;
	});
	$('.contacts-b .button_close').click(function () {
		$(".contacts-b").animate({"bottom":"-100vh"},300);
	});
	$('.href_statii').click(function(){
		$(".articles-b").fadeIn(300);
		var zagol_file = 'artickles/'+$(this).attr('href')+'.html';
		var zagol=$(this).attr('rel');
		$('.articles-box-content h3').html(zagol);
		$('.articles-text').load(zagol_file);
		return false;
	});
	$('.articles-b .button_close').click(function () {
		$(".articles-b").fadeOut();
		return false;
	});
	$('.slide_href').click(function(){
		return false;
	});
	$('a[href^="#call"]').click(function(){
		$('.form-callback').fadeIn(300);
		return false;
	});
	$('.form-callback .button_close').click(function(){
		$('.form-callback').fadeOut(300);
	});
	$("#form_call").submit(function(){
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "send.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".form-callback").fadeOut(300);
			$(".block_thanks").fadeIn(300);		
			setTimeout(function() {
				$(".block_thanks").fadeOut();
				th.trigger("reset");
			}, 5000);
		});
		return false;
	});
});