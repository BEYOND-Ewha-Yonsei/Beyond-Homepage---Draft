$(function(){
    var $menu = $('#top_menu ul li'),
        $contents = $('#contents > div');


    /*$menu를 클릭하면 해당 요소에만 클래스명 on이 추가되도록*/
    $menu.click(function(x){
        x.preventDefault();
        $(this).addClass('on').siblings().removeClass('on');
        var idx = $(this).index();
        var section = $contents.eq(idx)
        var sectionDistance = section.offset().top;
        /*A.scrolltop(): 스크롤양을 확인*/
        $('html,body').stop().animate({scrollTop:sectionDistance});
    });

    /*
    윈도우 스크롤이 생가면
    $contents마다 할 일
    각각의 화면상단에서의 거리 sectionDistance보다 스크롤양이 많은지 적은지 확인
    많다라는 조건이 참이면 각요소마다 순번 변수명 idx에 저장
    그 순번에 해당하는 메뉴에만 클래스명 on 추가 */
    $(window).scroll(function(){
        $contents.each(function(){
          if($(this).offset().top <= $(window).scrollTop()){
              var idx = $(this).index();
              $menu.removeClass('on');
              $menu.eq(idx).addClass('on');
          }
        });
    });


});
