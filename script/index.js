// 옆으로 슬라이드 효과
var swiper = new Swiper('.flowslide_inner ', {
    slidesPerView: 4,//보여지는 갤러리 수
    spaceBetween: 100,//갤러리 사이 간격
    speed: 5000,//버튼을 눌렀을 때 슬라이드가 넘어가는 시간
    autoplay: {
      delay: 0,//자동으로 넘어가기 전 머무르는 시간
      disableOnInteraction: false,
    },
    loop: true,//슬라이드 무한반복
  });

  $(function () {
    $('.flowslide .swiper-slide').on('mouseover', function () {
      swiper.autoplay.stop();
    });
    $('.flowslide .swiper-slide').on('mouseout', function () {
      swiper.autoplay.start();
    });
  });

// 옆으로 넘기기 효과
  var swiper2 = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });


  // 형광펜 효과
    // IntersectionObserver 를 등록한다.
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          // 관찰 대상이 viewport 안에 들어온 경우 'on' 클래스를 추가
          if (entry.intersectionRatio > 0) {
              entry.target.classList.add('on');
          }
          // 그 외의 경우 'on' 클래스 제거
          else {
              entry.target.classList.remove('on');
          }
      });
  });

  // 관찰할 대상을 선언하고, 해당 속성을 관찰시킨다.
  const boxElList = document.querySelectorAll('.highlight');
  boxElList.forEach((el) => {
      io.observe(el);
  });


  // IntersectionObserver 를 등록한다.
  const io2 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          // 관찰 대상이 viewport 안에 들어온 경우 'on2' 클래스를 추가
          if (entry.intersectionRatio > 0) {
              entry.target.classList.add('on2');
          }
          // 그 외의 경우 'on2' 클래스 제거
          else {
              entry.target.classList.remove('on2');
          }
      });
  });

  const boxElList2 = document.querySelectorAll('.highlight2');
  boxElList2.forEach((el) => {
      io2.observe(el);
  });


// 제목 효과
  AOS.init({
    duration: 400 //aos 나타나는 속도
  });


  // 메인 내용
  $(function(){
    $('.pre a').click(function(){
        $('.pop1').fadeIn(); //show()
        $('.pop2').fadeOut(); //hide()
    });
    $('.next a').click(function(){
        $('.pop2').fadeIn(); //hide()
        $('.pop1').fadeOut(); //hide()
    });
});

// 업 버튼
$(function() { // 보이기 | 숨기기
	$(window).scroll(function() {
    if ($(this).scrollTop() > 250) { //250 넘으면 버튼이 보여짐니다. 
      $('#topBtn').fadeIn();
    } else {
      $('#topBtn').fadeOut();
    }
  }); // 버튼 클릭시 
  $("#topBtn").click(function() { 
  	$('html, body').animate({ scrollTop : 0 // 0 까지 animation 이동합니다. 
  	}, 400); // 속도 400 
  	return false; 
  }); 
});
