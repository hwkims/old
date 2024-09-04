$(function () {

	/* 풀페이지 휠 이동 */
	var swiper2 = new Swiper(".fullpage", {
		direction: "vertical",
		slidesPerView: 1,
		/* 		spaceBetween: 30, */
		mousewheel: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		hashNavigation: {
			watchState: true,
		},
		on: {
			slideChange: function () {
				if(this.realIndex==1){
					$('.progress').addClass('on');
				}else{
					$('.progress').removeClass('on');
				}
			}
		}
	});

	/* skill 스크롤 이벤트 */
	/* 	$(window).scroll(function () {
			let st = $(this).scrollTop(); //스크롤 탑 위치를 st에 저장
			console.log(st);
			let skTop = $('.progress').offset().top - 0;//스킬이 스크롤 될 위치를 evTop에 저장
	
			if (st >= $('.progress').offset().top - 0) {
				for (let i = 0; i < $('.progress').find('li').length; i++) {
					$('.progress').find('li').eq(i).addClass('on').css({
						"animation-delay": (0.2 * i) + 's',
					});
				}
			} else {
				$('.progress').find('li').removeClass('on');
			}
	
		});//scroll end
	 */

	/* project 슬라이드 */
	let swiper3 = new Swiper(".pb_slidewrap", {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	/* design 탭메뉴 */
	$('.design ul.tab >li').click(function () {
		$(this).addClass('on').siblings().removeClass('on');
		let idx = $(this).index();
		$('.design .container .d_bottom > div').eq(idx).addClass('on').siblings().removeClass('on');
	});

	/* design 슬라이드 */
	let swiper1 = new Swiper(".d_bottom .slidewrap", {
		effect: "coverflow",
		/* initialSlide: 2, */
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 4,
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: true,
		},
		pagination: {
			el: ".slidewrap .swiper-pagination",
		},
	});

		swiper1.prependSlide([
			'<li class="swiper-slide"><a href="#"><img src="images/insta01.jpg" alt=""></a></li>',
			'<li class="swiper-slide"><a href="#"><img src="images/insta02.jpg" alt=""></a></li>',
			'<li class="swiper-slide"><a href="#"><img src="images/card03.png" alt=""></a></li>',
		  ]);

	$('.d_bottom .slidewrap li').click(function () {
		let imgsrc = $(this).find('img').attr('src');
		$('.modal img').attr('src', imgsrc);
		$('.modal').fadeIn();
	});

	$('.modal .button').click(function () {
		$('.modal').fadeOut(function(){
			$(this).removeClass('on');
		});
	});

	$('.d_bottom .bd_con li').click(function () {
		let imgsrc = $(this).find('img').attr('src');
		$('.modal').addClass('on');
		$('.modal img').attr('src', imgsrc);
		$('.modal').fadeIn();
	});












}); //ready end

