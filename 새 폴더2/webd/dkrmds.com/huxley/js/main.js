$(function(){

    /*  랭귀지 체인지 */
    let chk = 0;
    $('header ul.l_box li:first-child').click(function(){
        $(this).siblings().stop().slideToggle();
        if(chk==0){
            $(this).find('i').removeClass('fa-caret-down').addClass('fa-caret-up');
            chk++;
        }else{
            $(this).find('i').removeClass('fa-caret-up').addClass('fa-caret-down');
            chk=0;
        }
    });

    /* 햄버거메뉴 */
    $('header ul.ham').click(function(){
        $(this).hide();
        $('header ul.ham2').show();
        $('.all_menu').fadeIn();
    });
    $('header ul.ham2').click(function(){
        $(this).hide();
        $('header ul.ham').show();
        $('.all_menu').fadeOut();
    });

    let swiper = new Swiper(".main_banner", {
        /* cssMode: true, */
        navigation: {
          nextEl: ".main_banner .swiper-button-next",
          prevEl: ".main_banner .swiper-button-prev",
        },
        pagination: {
          el: ".main_banner .swiper-pagination",
          clickable: true,
        },
        keyboard: true,
        loop:true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
      });

      /* 스크롤 이벤트 시작 */
      $(window).scroll(function(){
        let st = $(this).scrollTop(); //스크롤 탑 위치를 st에 저장
        //console.log(st);
        let evTop = $('.event').offset().top - 500;//이벤트가 스크롤 될 위치를 evTop에 저장
        let lineTop = $('.line_up').offset().top - 400;//라인업이 스크롤 될 위치를 lineTop 저장

        //이벤트 컨텐츠 액션
        if(st>=evTop){
            $('main.contents .event section').eq(0).addClass('on').siblings().addClass('on').css({
                'transition-delay':'0.3s',
            });
        }else{
            $('main.contents .event section').removeClass('on');
        }
        //이벤트 컨텐츠 액션 끝

        //라인업 액션
        for(let i=0; i<4; i++){
            if(st>= lineTop +(i*30)){
                $('main.contents .line_up .container ul.img_box li').eq(i).addClass('on').css({
                    'transition-delay':(0.4*i)+ 's',
                });
                $('main.contents .line_up .container ul.txt_box li').eq(i).addClass('on').css({
                    'transition-delay':(0.5*i)+ 's',
                });
            }else{
                $('main.contents .line_up .container ul.img_box li,main.contents .line_up .container ul.txt_box li').removeClass('on');
            }
        }
        //라인업 액션 끝
        if(st>=$('.products').offset().top-500){
            for(let i=0; i<$('.products').find('li').length;i++){
                $('.products').find('li').eq(i).addClass('on').css({
                    "animation-delay": (0.2*i)+'s', 
                });
            }
        }else{
            $('.products').find('li').removeClass('on');
        }

      });//scroll end

      /* 비디오 모달 */
      $('main.contents .video button').click(function(){
        $('.vid_modal').fadeIn(1000);
        $('.vid_modal iframe').attr('src','https://www.youtube.com/embed/T2N2ACFIz5I?si=0RwxHo30zgfRmbY3');
      });
      $('.vid_modal i').click(function(){
        $('.vid_modal').fadeOut(1000);
        $('.vid_modal iframe').attr('src','');
      });

      $('.family p').first().click(function(){
         $(this).siblings().slideToggle();
         $(this).find('i').toggleClass('fa-angle-down').toggleClass('fa-angle-up');
      });

      $('aside.top').click(function(e){
        e.preventDefault();
        $('body,html').animate({scrollTop:0},500);
      });
});//ready end