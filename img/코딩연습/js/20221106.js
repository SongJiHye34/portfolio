$(document).ready(function () {
  const $menu = $('.main-menu-bar');
  const $menuBar = $('.main-menu-bar');
  const $logoImg = $('#loge-image');
  $(function () {
  $('.sub-btn ul').each(function () {
    const $submenu = $(this);
    const classes = $submenu.attr('class'); // 예: 'about-sub'

    // 클래스가 없으면 skip
    if (!classes) return;

    // 예: 'about-sub' → 'about'
    const matched = classes.match(/(\w+)-sub/);
    if (!matched) return;

    const targetClass = matched[1]; // 'about'
    const $targetMenuItem = $('.main-menu-bar .menu-item.' + targetClass);

    // 마우스 진입 시 상단 메뉴 강조
    $submenu.on('mouseenter', function () {
      $targetMenuItem.addClass('hovered');
    });

    $submenu.on('mouseleave', function () {
      $targetMenuItem.removeClass('hovered');
    });
  });
});

/*버튼*/
const topBtn = document.getElementById('topBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 800) {
    topBtn.classList.add('show');
  } else {
    topBtn.classList.remove('show');
  }
});

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}); 
/*버튼*/ 
  // 메뉴 hover 시 메뉴바 배경 활성화
  $menu.on('mouseenter', function () {
    $menuBar.addClass('active');
  });

  $menu.on('mouseleave', function () {
    $menuBar.removeClass('active');
  });

  // 메뉴바에 마우스 올리면 로고 이미지 변경
  $menuBar.on('mouseenter', function () {
    $logoImg.attr('src', 'img/off.jpg');
  });

  $menuBar.on('mouseleave', function () {
    $logoImg.attr('src', 'img/on.jpg');
  });
   
const slidewrap = document.querySelector(".slidewrap");
const slidescnt = document.querySelectorAll(".slide").length;
const slideContainer = document.getElementsByClassName("slides");
const slideWidth = slidewrap.offsetWidth;
let currentSlide = 0;

/*  공통으로 이용할 함수
        슬라이드 이동 함수
            해당 기능에는 페이지네이션 HTML에 class를 이동하여 현 위치를 마크해야함
        CSS 삽입 함수
*/


//슬라이드 이동 함수
function goToSlide(index){
    currentSlide = index;
    slideContainer[0].style.transition = 'transform 0.5s ease';
    slideContainer[0].style.transform = `translateX(-${slideWidth * currentSlide}px)`;

    //페이지네이션 Class 부여하기
    const pagination = document.querySelectorAll(".pagination li");
    for (let i = 0 ; i < pagination.length ; i++){
        if(i === index){
            pagination[i].classList.add("act");
            continue;
        }
        pagination[i].classList.remove("act");
    }
}

//CSS 삽입 함수
function AddStyle(style){
    const styleTag = document.createElement('style');
    styleTag.innerHTML = style;
    document.head.appendChild(styleTag);
}

/*  페이지네이션 생성 함수
        HTML 삽입
        CSS 삽입 (공통함수 사용)
        페이지네이션 이벤트 등록 (공통함수 이벤트 함수)
*/

// 페이지네이션 생성
function Createpagination(){
    //HTML Tag 생성
    slidewrap.innerHTML += `<div class="pagination"></div>`;
    const pagination = document.querySelector(".pagination");
    for (let i = 1 ; i < slidescnt; i++){
        if(i===1){pagination.innerHTML += `<li class="act"><a></a></li>`;}
        pagination.innerHTML += `<li><a></a></li>`;
    }

    //CSS 생성
    const paginationStyle = `
       .pagination {
      display: flex;
      position: absolute;
      left: 5%;
      transform: trans
        transform: translateX(-50%);
      bottom: 14.7vh;
      gap: 0;
      z-index: 10;
  }

  .pagination li {
       flex: 1; /* ✅ 균등 분배 */
      width: 40px; 
       max-width: 40px;      /* 🔹 길쭉한 막대 길이 */
      height: 3px;    
       max-height: 3px;      /* 🔹 얇은 막대 높이 */
      background: rgba(255, 255, 255, 0.4); /* 반투명 흰색 */
      list-style: none;
      transition: all 0.5s ease;
      cursor: pointer;
  }

  .pagination li.act {
      background: white;   /* 활성된 막대는 불투명 */
      opacity: 1;
  }
    `
    AddStyle(paginationStyle);

    //페이지네이션 이벤트 생성
    const paginationlink = document.querySelectorAll(".pagination li a");
    paginationlink.forEach((link, index) => {
        link.addEventListener('click', (event) => {
          event.preventDefault(); // 기본 앵커 링크 동작을 막습니다.
          goToSlide(index);
        });
    });
}

/*  버튼 생성 함수
        HTML 삽입
        CSS 삽입 (공통함수 사용)
        버튼 이벤트 등록 (공통함수 이벤트 함수)
*/
// 버튼생성
function Createbtn(){
    //HTML Tag 생성
  // HTML Tag 생성
    slidewrap.innerHTML += `
        <div class="leftbtn btn">
            <img src="./back.png" alt="prev" class="arrow-icon" />
        </div>`;
    slidewrap.innerHTML += `
        <div class="rightbtn btn">
            <img src="./right.png" alt="next" class="arrow-icon" />
        </div>`;
    //CSS 생성
    const BtnStyle = `
        .btn {
            display : flex;
            position : absolute;
            bottom : calc(15% - 60px);
            width: 130px;
            height : 150px;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 40px;
            border-radius: 20px;
        }
        .leftbtn{
            left : 16vw;
        }
        .rightbtn{
            right : 65vw;
        }
    `
    AddStyle(BtnStyle);
    
    //버튼 이벤트 생성
    const BtnL = document.querySelector(".leftbtn");
    BtnL.addEventListener('click',(event)=>{
        event.preventDefault(); // 기본 앵커 링크 동작을 막습니다.
        const index = (currentSlide-1) >=0 ? currentSlide-1 : slidescnt-1; // 삼항 연산을 통해 페이지 이동 최소 값 제한
        goToSlide(index);
    })
    const BtnR = document.querySelector(".rightbtn");
    BtnR.addEventListener('click',(event)=>{
        event.preventDefault(); // 기본 앵커 링크 동작을 막습니다.
        const index = (currentSlide+1) < slidescnt ? currentSlide+1 : 0; //삼항 연산을 통해 페이지 이동 최대 값 제한
        goToSlide(index);
    })    
}
/* 슬라이드 터치 또는 스와이프 생성 함수

*/
// 사용할 변수 
let startpos = 0;
let endpos = 0;
function Createdrag(){
    //마우스를 클릭 시작
    slideContainer[0].addEventListener("mousedown",(event)=>{
        startpos = event.pageX;
    })
    //마우스를 클릭 해제
    slideContainer[0].addEventListener("mouseup",(event)=>{
        endpos = event.pageX;

        //시작과 종료 지점의 포지션 값 비교 후 슬라이드 이동 실행 및 초기화
        if (startpos < endpos){
            const index = (currentSlide-1) >=0 ? currentSlide-1 : slidescnt-1; // 삼항 연산을 통해 페이지 이동 최소 값 제한
            goToSlide(index);
        }
        else{
            const index = (currentSlide+1) < slidescnt ? currentSlide+1 : 0; //삼항 연산을 통해 페이지 이동 최대 값 제한
            goToSlide(index);
        }
        //pos 값 초기화
        startpos = 0;
        endpos = 0;

    })
    //터치 시작
    slideContainer[0].addEventListener("touchstart",(event)=>{
        startpos = event.touches[0].pageX;
    })
    //터치 해제
    slideContainer[0].addEventListener("touchend",(event)=>{
        endpos = event.touches[0].pageX;

        //시작과 종료 지점의 포지션 값 비교 후 슬라이드 이동 실행 및 초기화
        if (startpos < endpos){
            const index = (currentSlide-1) >=0 ? currentSlide-1 : slidescnt-1; // 삼항 연산을 통해 페이지 이동 최소 값 제한
            goToSlide(index);
        }
        else{
            const index = (currentSlide+1) < slidescnt ? currentSlide+1 : 0; //삼항 연산을 통해 페이지 이동 최대 값 제한
            goToSlide(index);
        }
                //pos 값 초기화
                startpos = 0;
                endpos = 0;
    })
}
/*  무한 루프 자동 슬라이드 구현 (사실 next slide일 뿐)

*/
let Autoslideactive = null ; // 슬라이드 자동 이동 호출을 변수 화
function autoslide(){
    const index = (currentSlide+1) < slidescnt ? currentSlide+1 : 0;
    goToSlide(index);
}

/*  마우스 감지 시 슬라이드 자동 멈추기

*/
function Createmousedetector(){
    //마우스가 슬라이드에 올라왔을 때
    slideContainer[0].addEventListener("mouseover",(event)=>{
        clearInterval(Autoslideactive);
    })
    //마우스가 슬라이드에서 나온 경우 다시 실행
    slideContainer[0].addEventListener("mouseout",(event)=>{
        Autoslideactive = setInterval(autoslide,3000);
    })
}
//웹 브라우저 시작
Createpagination();
Createbtn();
Createdrag();
Autoslideactive = setInterval(autoslide,3000); //일정 시간마다 호출
Createmousedetector();
});

document.addEventListener('DOMContentLoaded', () => {
  const images = [
    'img/show.jpg',
    'img/show2.jpg',
    'img/show3.jpg'
  ];

  const slides = document.querySelectorAll('.slideshow');
  let current = 0;  // 현재 보이는 이미지 엘리먼트 인덱스 (0 or 1)
  let next = 1;     // 다음에 보여줄 이미지 엘리먼트 인덱스 (0 or 1)
  let imageIndex = 2; // images 배열에서 다음에 로드할 이미지 인덱스 (처음 두 이미지는 이미 로드됨)

  setInterval(() => {
    // 현재 보여지는 이미지 숨기기
    slides[current].classList.remove('active');

    // 다음 이미지 엘리먼트에 새로운 이미지 경로 세팅
    slides[next].src = images[imageIndex];

    // 다음 이미지 엘리먼트를 보이도록
    slides[next].classList.add('active');

    // 인덱스 순환 업데이트
    current = next;
    next = (next + 1) % 2;
    imageIndex = (imageIndex + 1) % images.length;
  }, 5000);
});
document.addEventListener('DOMContentLoaded', () => {
  const textItems = document.querySelectorAll('.Company .text-item');
  const images = document.querySelectorAll('.Company-img .presentation');

  textItems.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
      // 1. 이미지 처리
      images.forEach(img => img.classList.remove('active'));
      if (images[index]) {
        images[index].classList.add('active');
      }

      // 2. 글자 투명도 처리
      textItems.forEach((el, i) => {
        if (i === index) {
          el.classList.add('focused');
          el.classList.remove('unfocused');
        } else {
          el.classList.add('unfocused');
          el.classList.remove('focused');
        }
      });
    });

    // (선택) 마우스 떠날 때 원래대로 초기화
    item.addEventListener('mouseleave', () => {
      textItems.forEach(el => {
        el.classList.remove('focused', 'unfocused');
      });
    });
  });
});