$(document).ready(function(){

  var isPhoneDevice = "ontouchstart" in document.documentElement;

  $(document).ready(function() {
      if (isPhoneDevice) {
          //mobile
      } else {
          //desktop
          // Initialize WOW.js
          wow = new WOW({
              offset: 50
          })
          wow.init();
      }
  }); //핸드폰으로 보았을때와 데스탑으로 보았을때
     //와우 플러그인을 달아두어야 실행되는 식
    //와우실행코드 -> 모바일에서는 안하고 데스크탑에서는 하겠다




    $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top - 50)
            }, 1250, 'easeInOutExpo');
            event.preventDefault();
        });
        //a태그의 클래스 page-scroll을 주면 해당 a태그의 href값으로 애니메이션이동하겠다
        //왜 bind썼냐면 On메서드는 제이커리7이상만 가능!
        //bind는 그 이하 (객체와 이벤트를 연결하는 역할)
       // 쓰는법 : <a href=".footer" class="page-scroll">같은페이지내에서 스르륵움직이고싶은 메뉴</a>

})
