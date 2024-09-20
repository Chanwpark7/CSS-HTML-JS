/**
 * 
 */

/** 이미지 슬라이더 */
$(document).ready(function() {
    // 현재 활성화된 슬라이드의 인덱스를 저장
    let currentIndex = 0;
    
    // 슬라이드와 탭 요소를 선택
    const slides = $('.slide');
    const tabs = $('.tab');
    
    // 전체 슬라이드의 개수
    const slideCount = slides.length;
    
    // 슬라이드 쇼를 제어할 인터벌 변수
    let slideInterval;

    // 특정 인덱스의 슬라이드로 이동하는 함수
    function goToSlide(index) {
        // 모든 슬라이드와 탭에서 활성화 클래스 제거
        slides.removeClass('slide-active');
        tabs.removeClass('tab-active').find('.progress').css({
            'transform': 'scaleX(0)',
            'transition': 'none'  // 이전 탭의 애니메이션을 즉시 중지
        });

        // 지정된 인덱스의 슬라이드와 탭을 활성화
        slides.eq(index).addClass('slide-active');
        tabs.eq(index).addClass('tab-active').find('.progress').css({
            'transform': 'scaleX(1)',
            'transition': 'transform 5s linear'  // 새로운 탭에서만 애니메이션 시작
        });

        // 현재 인덱스를 업데이트
        currentIndex = index;
    }

    // 슬라이드 쇼를 시작하는 함수
    function startSlideShow() {
        // 5초마다 다음 슬라이드로 이동
        slideInterval = setInterval(function() {
            let nextIndex = (currentIndex + 1) % slideCount;  // 다음 슬라이드 인덱스 계산
            goToSlide(nextIndex);  // 다음 슬라이드로 이동
        }, 5000); // 5000ms = 5초
    }

    // 슬라이드 쇼를 중지하는 함수
    function stopSlideShow() {
        clearInterval(slideInterval);  // 슬라이드 쇼 인터벌을 지우기
    }

    // 탭 클릭 시 슬라이드 전환
    tabs.click(function() {
        stopSlideShow();  // 슬라이드 쇼 중지
        let index = $(this).index();  // 클릭된 탭의 인덱스 가져오기
        goToSlide(index);  // 해당 인덱스의 슬라이드로 이동
        startSlideShow();  // 슬라이드 쇼 재시작
    });

    // 이전 슬라이드로 이동하는 화살표 클릭 시
    $('.arrow-prev').click(function() {
        stopSlideShow();  // 슬라이드 쇼 중지
        let prevIndex = (currentIndex - 1 + slideCount) % slideCount;  // 이전 슬라이드 인덱스 계산
        goToSlide(prevIndex);  // 이전 슬라이드로 이동
        startSlideShow();  // 슬라이드 쇼 재시작
    });

    // 다음 슬라이드로 이동하는 화살표 클릭 시
    $('.arrow-next').click(function() {
        stopSlideShow();  // 슬라이드 쇼 중지
        let nextIndex = (currentIndex + 1) % slideCount;  // 다음 슬라이드 인덱스 계산
        goToSlide(nextIndex);  // 다음 슬라이드로 이동
        startSlideShow();  // 슬라이드 쇼 재시작
    });

    // 문서 로드 시 초기 슬라이드 설정 및 슬라이드 쇼 시작
    goToSlide(currentIndex);
    startSlideShow();



});


/** 마르퀴 */ 
window.addEventListener('load', () => {
    const marquee = document.querySelector('.marquee');
    const container = document.querySelector('.marquee-container');

    // 텍스트를 복제하여 스크롤을 원활하게 합니다
    marquee.innerHTML += marquee.innerHTML;

    const marqueeWidth = marquee.scrollWidth;
    const containerWidth = container.clientWidth;

    // 애니메이션의 지속 시간을 설정합니다 (속도를 조정하는 부분)
    const speed = 200; // 스크롤 속도 조정: 숫자가 작을수록 속도가 빨라짐
    const duration = (marqueeWidth + containerWidth) / speed;

    // 애니메이션 CSS를 생성합니다
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerHTML = `
        @keyframes marquee {
            from {
                transform: translateX(${containerWidth}px);
            }
            to {
                transform: translateX(-${marqueeWidth}px);
            }
        }
        .marquee {
            animation: marquee ${duration}s linear infinite;
        }
    `;
    document.head.appendChild(styleSheet);
});





/******************************************************************************************** */



const canvas = $('.snow')[0];
const context = canvas.getContext('2d');

// 캔버스의 초기 너비와 높이를 설정합니다.
let canvasWidth = $('.snow_wrap').width();
let canvasHeight = $('.snow_wrap').height();
let lastDeviceType = window.innerWidth < 768 ? 'mobile' : 'desktop';

// 눈송이 파티클을 생성하는 함수입니다.
function createParticles() {
    // 기존 파티클을 삭제하고 새 파티클을 생성합니다.
    snowParticles = []; 
    // 디바이스에 따라 파티클 수를 조정합니다.
    const particleCount = lastDeviceType === 'mobile' ? 40 : 100; 
    for (let i = 0; i < particleCount; i++) {
        snowParticles.push(new createParticle());
    }
}

// 캔버스의 크기를 조정하는 함수입니다.
function setCanvasSize() {
    const currentDeviceType = window.innerWidth < 768 ? 'mobile' : 'desktop';
    // 디바이스가 변경되면 새로운 파티클을 생성합니다.
    if (currentDeviceType !== lastDeviceType) {
        lastDeviceType = currentDeviceType;
        createParticles();
    }
    
    // 임시 캔버스를 사용하여 현재 내용을 저장합니다.
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    tempCanvas.width = canvasWidth;
    tempCanvas.height = canvasHeight;
    tempCtx.drawImage(canvas, 0, 0);

    // 캔버스의 크기를 재설정합니다.
    canvasWidth = $('.snow_wrap').width();
    canvasHeight = $('.snow_wrap').height();
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // 임시 캔버스의 내용을 원래 캔버스에 복원합니다.
    context.drawImage(tempCanvas, 0, 0);
}

// 눈송이 파티클을 저장할 배열입니다.
let snowParticles = []; 

// 개별 눈송이 파티클을 생성하는 생성자 함수입니다.
function createParticle() {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.vx = Math.random() * 4 - 1;
    this.vy = Math.random() * 4 + 1;
    this.color = `rgba(255, 255, 255, ${Math.random()})`;
    this.radius = Math.random() * 5 + 2;
}

// 눈송이 파티클을 그리는 함수입니다.
function draw() {
    context.clearRect(0, 0, canvasWidth, canvasHeight); // 캔버스를 지웁니다.
    snowParticles.forEach(function(particle) {
        context.beginPath();
        let gradient = context.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.radius);
        gradient.addColorStop(1, particle.color);
        gradient.addColorStop(1, "rgb(66, 66, 66)");
        context.fillStyle = gradient;
        context.arc(particle.x, particle.y, particle.radius, Math.PI * 2, false);
        context.fill();
        // 파티클 위치 업데이트
        particle.x += particle.vx;
        particle.y += particle.vy;
        // 파티클이 캔버스 밖으로 나가면 반대편에서 다시 시작
        if (particle.x < -50) particle.x = canvasWidth + 50;
        if (particle.y < -50) particle.y = canvasHeight + 50;
        if (particle.x > canvasWidth + 50) particle.x = -50;
        if (particle.y > canvasHeight + 50) particle.y = -50;
    });
}

// 창 크기가 변경될 때마다 캔버스 크기를 조정합니다.
$(window).resize(setCanvasSize);
setCanvasSize(); // 초기 캔버스 크기를 설정합니다.
createParticles(); // 초기 파티클을 생성합니다.
setInterval(draw, 33); // 33ms 간격으로 눈송이 애니메이션을 시작합니다.
    

















/**-******************************************************** */
 var getslide = $('.main-box li').length - 1;

var slidecal = 30/getslide+'%';

$('.box').css({"width": slidecal});

$('.box').click(function(){
  $('.box').removeClass('active');
 $(this).addClass('active');
});

var spans = document.getElementsByClassName("m3_c"); // 클래스 이름에 해당하는 모든 요소를 선택
for (var i = 0; i < spans.length; i++) { // 선택된 모든 요소에 대해 반복
  var span = spans[i];
  var text = span.textContent;
  var newText = text.split('').join('\n');  // 각 글자 사이에 줄바꿈 추가
  span.textContent = newText;
}