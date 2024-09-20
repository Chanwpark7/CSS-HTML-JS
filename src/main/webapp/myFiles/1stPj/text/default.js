// 스크롤바
$(document).ready(function(){
  let scrollBar = document.querySelector('#scrollBar');

  let yOffset = 0;

  let mouseClicked = false;
  
    //scrollBar height를 window 전체 height에 따라 변경
    setInterval(() =>{
      let scrollY_percent = window.scrollY / document.body.offsetHeight;
      let box_height = window.innerHeight * window.innerHeight / document.body.offsetHeight;
      scrollBar.style.height = box_height + "px";
      scrollBar.style.top=scrollY_percent * window.innerHeight + "px";
    },10);

  window.addEventListener('scroll', function () {
    //window.scrollY=스크롤 바 top 부분 px 로 계산
    //window.innerHeight = vh(margin 제외) 계산
    //document.body.offsetHeight = 총 body height 계산
  
    //scrollBar 위치를 전체 window 전체 height에 대한 비율 계산.
    let scrollY_percent = window.scrollY / document.body.offsetHeight;
    if(!mouseClicked){
      if (scrollY_percent < 0) { //margin padding 때문에 scrollY 가 0 일때 document.body.offsetHeight이 1vh 보다 크게 되어 음수가 잡히는 경우 배제.
        scrollY_percent = 0;
        scrollBar.style.top = scrollY_percent * window.innerHeight + "px";
        //div가 fixed 된 화면 내에서 scroll bar 가 움직인 px 만큼 움직임
      }
      scrollBar.style.top = scrollY_percent * window.innerHeight + "px";
    }
  });

  scrollBar.addEventListener("mousedown",(event) => {
    let box_height = window.innerHeight * window.innerHeight / document.body.offsetHeight;
    scrollBar.style.height = box_height + "px";
    yOffset = event.offsetY;
    mouseClicked = true;

    window.addEventListener("mousemove", function(){
    //scrollBar 위치를 window 전체 height에 대한 비율 계산.

      window.addEventListener("mouseup", () => {
        return mouseClicked = false;
      });

      //mouse 움직임 y좌표 계산하여 screen 과 scrollbar 이동.
      if(mouseClicked){
        let y = this.event.clientY;
        if(y < yOffset){
          scrollBar.style.top = "0px";
          scrollTo(0,0);
        }else if(window.innerHeight - box_height * (1 - yOffset / box_height) < y){
          scrollBar.style.top = (window.innerHeight - box_height) + "px";
          scrollTo(0,document.body.offsetHeight - window.innerHeight);
        }else{
          scrollBar.style.top = y - yOffset + "px";
          scrollTo(0,(y * document.body.offsetHeight / window.innerHeight) - (window.innerHeight * yOffset / box_height));
        }
      }
    });
  });
});