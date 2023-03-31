// $(":root").css("background", "#105333");


document.body.style.backgroundColor='#105333';

  var swiper1 = new Swiper('.scroll_v', {
      direction: 'vertical',
      slidesPerView: 1,
    mousewheel: {
        sensitivity: 1,
    },

    speed: 500,
    pagination: {
        el: '.pageVertical',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    }
    // eventsTarget: 'scroll_v',
    // on: {
    //     slideChangeTransitionStart: function() {
    //         $('.title').hide();
    //     },
    //     slideChangeTransitionEnd: function() {
    //         $('.title').delay(500).slideDown(1000);
    //         // setTimeout(function() {
    //         //     $('.title').slideDown(1000);
    //         // }, 1000);
    //         // AOS.init(); // AOS 강제실행 안됨
    //     },
    //     slideChange: function() {
    //         if (this.realIndex == 4) {
        //             counting();
        //         } else {
    //             $('.counting').text('0');
    //         }
    //     }, //스와이퍼에서 카운팅하기
    //     reachEnd: function() {
    //         swiper1.mousewheel.disable();
    //         $('footer').addClass('on');
    //     }
    // }
    //현재슬라이드에서 AOS 작동, 가로스와이퍼에서만 실행됨(주석처리된것은 가로 스크롤에서만 사용할것)
    //vertical에서는 애니메이션 이벤트로 등장여부를 조정하는 정도로만 타협
});
window.addEventListener('wheel', function(event) {
    if (event.deltaY < 0) {
        swiper1.mousewheel.enable();
        $('footer').removeClass('on');
    }else if(event.deltaY > 0){
        return false
    }
});


// $(document).scroll(function () {
//     var scrolltop = $(window).scrollTop();
//     if (scrolltop >= 10800) {
//       counting();
//       $(".line").addClass("gauge");
//     }
//   });







// $(document).ready(function () {
//     $('.gauge').each(function () {
//         var $this = $(this);
//         var per = $this.attr('per');
//         $this.css('width', per + "%");
//     });
// });

// $(document).ready(function () {
//     $('.gauge').each(function () {
//         var $this = $(this);
//         var per = $this.attr('per');
//         $this.animate({
//             width: 50 + "%"
//         });
//     });
// });

// $(document).scroll(function () {
//     var scrolltop = $(window).scrollTop();
//     if (scrolltop >= 2000) {
//       counting();
//       $(".line").addClass("gauge");
//     }
//   });




//   var ovf, slider;

//   $(function(){
//       ovf = this.getElementById("overflow");
//       slider = this.getElementById("slider");
//       winResize();
//       $(window).bind({resize: winResize, scroll: winScroll});
//   });
  
//   function winResize(){   
//       ovf.style.top = slider.offsetHeight + "px";
//   }
  
//   function winScroll(){
//       var op = 1 - (window.pageYOffset / slider.offsetHeight);
//       slider.style.opacity = op; 
//   }
  


// window.addEventListener("wheel", function(e){
// 	e.preventDefault();
// },{passive : true});

// var $html = $("html");
 
// var page = 1;
 
// var lastPage = $(".sec").length;
 
// $html.animate({scrollTop:0},10)

// $(window).on("wheel", function(e){
 
// 	if($html.is(":animated")) return;
 
// 	if(e.originalEvent.deltaY > 0){
// 		if(page== lastPage) return;
 
// 		page++;
// 	}else if(e.originalEvent.deltaY < 0){
// 		// if(page == 1) return;
 
// 		page--;
// 	}
// 	var posTop = (page-1) * $(window).height();
 
// 	$html.animate({scrollTop : posTop});
 
// });



// var swiper = new Swiper(".mySwiper", {
//     direction: "vertical",
//     slidesPerView: 1,
//     spaceBetween: 30,
//     mousewheel: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });
