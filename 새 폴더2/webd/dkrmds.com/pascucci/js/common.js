$(function () {

    /* 메인슬라이드 */
    let swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    /* summer 탭메뉴 */
    $('.summer .container .left ul > li').click(function () {
        $(this).addClass('on').siblings().removeClass('on');
        let idx = $(this).index();
        $('.summer .container .right > div').eq(idx).addClass('on').siblings().removeClass('on');
    });

    /* best menu */
    $(window).scroll(function () {
        let st = $(this).scrollTop(); //스크롤 탑 위치를 st에 저장
        //console.log(st);
        let evTop = $('.bestmenu').offset().top - 500;//베스트메뉴가 스크롤 될 위치를 evTop에 저장

        if (st >= $('.bestmenu').offset().top - 500) {
            for (let i = 0; i < $('.bestmenu').find('li').length; i++) {
                $('.bestmenu').find('li').eq(i).addClass('on').css({
                    "animation-delay": (0.2 * i) + 's',
                });
            }
        } else {
            $('.bestmenu').find('li').removeClass('on');
        }



    });//scroll end





$('ul.tag li').click(function(){
    let str=$(this).text();
    $('.search_in').val(str);
    $('ul.tag li').removeClass('on');
    $(this).addClass('on');
    return false;
});










}); //ready end