const upload=document.querySelector("#container");

upload.addEventListener("click",toTop);

function toTop(){
	window.scrollTo(0,0);
}

window.addEventListener('scroll', function(){
	const outline = document.querySelector(".circle");
    const outlineLength = 157;
    outline.style.strokeDasharray = outlineLength;
	
	let scrollY_percent=1-(window.scrollY/(document.body.offsetHeight-window.innerHeight));
	if(scrollY_percent < 0){
		scrollY_percent = 0;
		outline.style.strokeDashoffset = scrollY_percent*outlineLength;
	}
	outline.style.strokeDashoffset = scrollY_percent*outlineLength;
});


let textWrapper = document.querySelector('.ml11 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: false})
      .add({
        targets: '.ml11 .line',
        scaleY: [0,1],
        opacity: [0.5,1],
        easing: "easeOutExpo",
        duration: 700
      })
      .add({
        targets: '.ml11 .line',
        translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100
      }).add({
        targets: '.ml11 .letter',
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=775',
        delay: (el, i) => 34 * (i+1)
      }).add({
        targets: '.ml11',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });

let posTop = 0;
    let k=0;
    let sf_bgImg1 = document.querySelector("#snowflower1");
    let sf_bgImg2 = document.querySelector("#snowflower2");
    let bg_container = document.querySelector("#bg_container");
    let bg_containerHeight = bg_container.offsetHeight;
    let moving_bg = document.querySelector("#moving");
    let sf1 = document.querySelector("#sf1");
    sf1.style.top = -1*sf1.offsetHeight+"px";
    let sf1posTop = 0;
    let sf2 = document.querySelector("#sf2");
    sf2.style.top = -1*sf2.offsetHeight+"px";
    let sf2posTop = 0;
    let sf3 = document.querySelector("#sf3");
    sf3.style.top = -1*sf3.offsetHeight+"px";
    let sf3posTop = 0;
    let sf4 = document.querySelector("#sf4");
    sf4.style.top = -1*sf4.offsetHeight+"px";
    let sf4posTop = 0;
    let sf5 = document.querySelector("#sf5");
    sf5.style.top = -1*sf5.offsetHeight+"px";
    let sf5posTop = 0;
    let sf6 = document.querySelector("#sf6");
    sf6.style.top = -1*sf6.offsetHeight+"px";
    let sf6posTop = 0;
    let sf7 = document.querySelector("#sf7");
    sf7.style.top = -1*sf7.offsetHeight+"px";
    let sf7posTop = 0;
    let sf8 = document.querySelector("#sf8");
    sf8.style.top = -1*sf8.offsetHeight+"px";
    let sf8posTop = 0;
    let sf9 = document.querySelector("#sf9");
    sf9.style.top = -1*sf9.offsetHeight+"px";
    let sf9posTop = 0;
    let sf10 = document.querySelector("#sf10");
    sf10.style.top = -1*sf10.offsetHeight+"px";
    let sf10posTop = 0;

    sf1.style.left = -1*window.innerWidth+"px";
    sf2.style.left = -1*window.innerWidth+"px";
    sf3.style.left = -1*window.innerWidth+"px";
    sf4.style.left = -1*window.innerWidth+"px";
    sf5.style.left = -1*window.innerWidth+"px";
    sf6.style.left = -1*window.innerWidth+"px";
    sf7.style.left = -1*window.innerWidth+"px";
    sf8.style.left = -1*window.innerWidth+"px";
    sf9.style.left = -1*window.innerWidth+"px";
    sf10.style.left = -1*window.innerWidth+"px";
    
    window.addEventListener("load",()=>{
      setInterval(frame,30);
      setInterval(msf1,32);
      setInterval(msf2,29);
      setInterval(msf3,27);
      setInterval(msf4,24);
      setInterval(msf5,20);
      setInterval(msf6,17);
      setInterval(msf7,14);
      setInterval(msf8,11);
      setInterval(msf9,7);
      setInterval(msf10,4);
    });

    function frame(){
      if(posTop>=sf_bgImg1.offsetHeight){
        k++;
        posTop=0;
        moving_bg.style.top = 0+"px";
        sf_bgImg1.style.order=(k%2+1);
        sf_bgImg2.style.order= (2-k%2);
      }else{
        posTop++;
        moving_bg.style.top = posTop+"px";
      }
    }


    function msf1(){
      const comp=Math.random();
      let sfLeft=comp*bg_container.offsetWidth;

      if(sf1posTop>=sf1.offsetHeight+bg_containerHeight){
        sf1posTop=0;
        sf1.style.top = sf1posTop-sf1.offsetHeight+"px";
        sf1.style.left = sfLeft-sf1.offsetWidth+"px";
      }else{
        sf1posTop++;
        sf1.style.top = sf1posTop-sf1.offsetHeight+"px";
      }
    }

    function msf2(){
      const comp=Math.random();
      let sfLeft=comp*bg_container.offsetWidth;

      if(sf2posTop>=sf2.offsetHeight+bg_containerHeight){
        sf2posTop=0;
        sf2.style.top = sf2posTop-sf2.offsetHeight+"px";
        sf2.style.left = sfLeft-sf2.offsetWidth+"px";
      }else{
        sf2posTop++;
        sf2.style.top = sf2posTop-sf2.offsetHeight+"px";
      }
    }

    function msf3(){
      const comp=Math.random();
      let sfLeft=comp*bg_container.offsetWidth;

      if(sf3posTop>=sf3.offsetHeight+bg_containerHeight){
        sf3posTop=0;
        sf3.style.top = sf3posTop-sf3.offsetHeight+"px";
        sf3.style.left = sfLeft-sf3.offsetWidth+"px";
      }else{
        sf3posTop++;
        sf3.style.top = sf3posTop-sf3.offsetHeight+"px";
      }
    }

    function msf4(){
      const comp=Math.random();
      let sfLeft=comp*bg_container.offsetWidth;

      if(sf4posTop>=sf4.offsetHeight+bg_containerHeight){
        sf4posTop=0;
        sf4.style.top = sf4posTop-sf4.offsetHeight+"px";
        sf4.style.left = sfLeft-sf4.offsetWidth+"px";
      }else{
        sf4posTop++;
        sf4.style.top = sf4posTop-sf4.offsetHeight+"px";
      }
    }

    function msf5(){
      const comp=Math.random();
      let sfLeft=comp*bg_container.offsetWidth;

      if(sf5posTop>=sf5.offsetHeight+bg_containerHeight){
        sf5posTop=0;
        sf5.style.top = sf5posTop-sf5.offsetHeight+"px";
        sf5.style.left = sfLeft-sf5.offsetWidth+"px";
      }else{
        sf5posTop++;
        sf5.style.top = sf5posTop-sf5.offsetHeight+"px";
      }
    }

    function msf6(){
      const comp=Math.random();
      let sfLeft=comp*bg_container.offsetWidth;

      if(sf6posTop>=sf6.offsetHeight+bg_containerHeight){
        sf6posTop=0;
        sf6.style.top = sf6posTop-sf6.offsetHeight+"px";
        sf6.style.left = sfLeft-sf6.offsetWidth+"px";
      }else{
        sf6posTop++;
        sf6.style.top = sf6posTop-sf6.offsetHeight+"px";
      }
    }

    function msf7(){
      const comp=Math.random();
      let sfLeft=comp*bg_container.offsetWidth;

      if(sf7posTop>=sf7.offsetHeight+bg_containerHeight){
        sf7posTop=0;
        sf7.style.top = sf7posTop-sf7.offsetHeight+"px";
        sf7.style.left = sfLeft-sf7.offsetWidth+"px";
      }else{
        sf7posTop++;
        sf7.style.top = sf7posTop-sf7.offsetHeight+"px";
      }
    }

    function msf8(){
      const comp=Math.random();
      let sfLeft=comp*bg_container.offsetWidth;

      if(sf8posTop>=sf8.offsetHeight+bg_containerHeight){
        sf8posTop=0;
        sf8.style.top = sf8posTop-sf8.offsetHeight+"px";
        sf8.style.left = sfLeft-sf8.offsetWidth+"px";
      }else{
        sf8posTop++;
        sf8.style.top = sf8posTop-sf8.offsetHeight+"px";
      }
    }

    function msf9(){
      const comp=Math.random();
      let sfLeft=comp*bg_container.offsetWidth;

      if(sf9posTop>=sf9.offsetHeight+bg_containerHeight){
        sf9posTop=0;
        sf9.style.top = sf9posTop-sf9.offsetHeight+"px";
        sf9.style.left = sfLeft-sf9.offsetWidth+"px";
      }else{
        sf9posTop++;
        sf9.style.top = sf9posTop-sf9.offsetHeight+"px";
      }
    }

    function msf10(){
      const comp=Math.random();
      let sfLeft=comp*bg_container.offsetWidth;

      if(sf10posTop>=sf10.offsetHeight+bg_containerHeight){
        sf10posTop=0;
        sf10.style.top = sf10posTop-sf10.offsetHeight+"px";
        sf10.style.left = sfLeft-sf10.offsetWidth+"px";
      }else{
        sf10posTop++;
        sf10.style.top = sf10posTop-sf10.offsetHeight+"px";
      }
    }