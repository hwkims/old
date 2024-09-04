$(function () {

    /* header 부서동 */
    $('.h_top_li2').click(function () {
        $('.ht_sub02').hide();
        $('.ht_sub01').fadeToggle(100);
        //$('nav > ul.gnb > li').off('mouseover');
    });
    $('.ht_sub01_top ul li').click(function () {
        $('.ht_sub01_top ul li,.ht_sub01_bottom>div').removeClass('on');
        $(this).addClass('on');
        let i = $(this).index();
        $('.ht_sub01_bottom>div').eq(i).addClass('on')
    });

    $('.ht_sub01 .close_btn').click(function () {
        $('.ht_sub01').fadeOut(100, function () {
            $('.ht_sub01_top ul li,.ht_sub01_bottom>div').removeClass('on');
            $('.ht_sub01_bottom>div').eq(0).addClass('on');
            $('.ht_sub01_top ul li').eq(0).addClass('on');
        });
    });

    /* header 주요누리집 */
    $('.h_top_li5').click(function () {
        $('.ht_sub01').hide();
        $('.ht_sub02').fadeToggle(100);
        
    });
    $('.ht_sub02_top ul li').click(function () {
        $('.ht_sub02_top ul li,.ht_sub02_bottom>div').removeClass('on');
        $(this).addClass('on');
        let i = $(this).index();
        $('.ht_sub02_bottom>div').eq(i).addClass('on')
    });

    $('.ht_sub02 .ht_sub02_close_btn').click(function () {
        $('.ht_sub02').fadeOut(100, function () {
            $('.ht_sub02_top ul li,.ht_sub02_bottom>div').removeClass('on');
            $('.ht_sub02_bottom>div').eq(0).addClass('on');
            $('.ht_sub02_top ul li').eq(0).addClass('on');
        });
    });


    /* gnb 메인메뉴 시작 */
    $('nav > ul.gnb > li , .h_bottom .nav_bg').mouseover(function () {
       let h= $(this).find('ul.sub').height();
       console.log(h);
        $('header .h_bottom .nav_bg').stop().fadeIn(100);
        $(this).find('ul.sub, ul.gl05_sub').stop().fadeIn(100);
    });
    $('header .h_bottom .container nav>ul.gnb>li.gl_05>ul.gl05_sub>li, .h_bottom .nav_bg').mouseover(function () {
        //$(this).find('ul.s_sub').stop().fadeIn(100);
        $(this).addClass('on').siblings().removeClass('on');
    });

    $('nav > ul.gnb > li , .h_bottom .nav_bg').mouseout(function () {
        $('header .h_bottom .nav_bg').stop().fadeOut(100);
        $(this).find('ul.sub,  ul.gl05_sub').stop().fadeOut(100,function(){
            $('header .h_bottom .container nav>ul.gnb>li.gl_05>ul.gl05_sub>li').eq(0).addClass('on');
        });
        // $(this).find('ul.sub').stop().fadeOut(100);
        //$('header .h_bottom .container nav>ul.gnb>li.gl_05>ul.gl05_sub>li').removeClass('on');
       

    })
    $('header .h_bottom .container nav>ul.gnb>li.gl_05>ul.gl05_sub>li,.h_bottom .nav_bg').mouseout(function () {
        //$(this).find('ul.s_sub').stop().fadeOut(100);
        $('header .h_bottom .container nav>ul.gnb>li.gl_05>ul.gl05_sub>li').removeClass('on');

    });


  /* 메인슬라이드 재생/정지버튼 토글 */
  $('.sc_right > div > span.stop').click(function(){
    $(this).hide();
    $('.sc_right > div > span.play').show();
    });
    $('.sc_right > div > span.play').click(function(){
    $(this).hide();
    $('.sc_right > div > span.stop').show();
    });

    /* 메인슬라이드 */
    let mainSlider = $('.main_visual .slide ul').bxSlider({
        auto: true, // 자동재생
        nextSelector: '.next', //다음 버튼 지정
        prevSelector: '.prev', //이전 버튼 지정
        nextText: '<img src="images/right.png" alt="다음">', //다음 버튼 요소에 ‘next’ 텍스트 삽입 , 텍스트가 필요 없다면 text-indent로 텍스트 숨김
        prevText: '<img src="images/left.png" alt="이전" >', //이전 버튼 요소에 ‘prev’ 텍스트 삽입
        pager: false,
        onSlideBefore: function ($slideElement, oldIndex, newIndex) {
            var current_index = parseInt(newIndex + 1);
            $('.sc_left .num').text(current_index);
        }
    });
        $('.sc_right .play').on('click',function(){
        mainSlider.startAuto();
        });
        $('.sc_right .stop').on('click',function(){
        mainSlider.stopAuto();
        });

    /* 송파소식 탭메뉴 */
    $('.content2 ul.news_tab li').click(function () {
        $(this).addClass('on').siblings().removeClass('on');
        let idx = $(this).index();
        $('.content2 .news_left .newsbox  > ul').eq(idx).addClass('on').siblings().removeClass('on');
    });


    /* 지금 접수중 탭메뉴 */
    $('.content2 .now_right ul.now_tab>li').click(function () {
        $(this).addClass('on').siblings().removeClass('on');
        let idx = $(this).index();
        $('.content2 .now_right .nowbox  > ul').eq(idx).addClass('on').siblings().removeClass('on');
    });


    /* We Songpa 탭메뉴 */
    $('.content3 .container ul.we_menu li').click(function () {
        let idx = $(this).index();
        $('.content3 .container .we_pic ul').eq(idx).addClass('on').siblings().removeClass('on');
    });


    /* 송파 맞춤서비스 탭메뉴 */
    $('.content4 .container ul.service_tab li').click(function () {
        $(this).addClass('on').siblings().removeClass('on');
        let idx = $(this).index();
        $('.content4 .container .service_menu > ul').eq(idx).addClass('on').siblings().removeClass('on');
    });


    /* 알림/참여 탭메뉴 */
    $('.content5 .container .alarm_left ul.alarm_menu li').click(function(){
    $(this).addClass('on').siblings().removeClass('on');
    let idx = $(this).index();
    $('.content5 .container .alarm_left .alarm_banner a').eq(idx).addClass('on').siblings().removeClass('on');
    });


    /* 하단 배너모음 슬라이드 정지/재생 토글 */
    $('.banner_control > div > .bc_pause').click(function(){
        $(this).hide();
        $('.banner_control > div > .bc_play').show();
        });
        $('.banner_control > div > .bc_play').click(function(){
        $(this).hide();
        $('.banner_control > div > .bc_pause').show();
    });

    /* 하단 배너모음 슬라이드 */
    $( '.slider' ).slick( {
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2000,
    slidesToShow: 7,
    variableWidth: true,
    prevArrow : $('.bc_prev'), 
    nextArrow : $('.bc_next'), 
    });

    $('.bc_play').click(function(){
	$('.slider').slick('slickPlay');
    });
 
    $('.bc_pause').click(function(){
	$('.slider').slick('slickPause');
    });


    

    

}); //ready end