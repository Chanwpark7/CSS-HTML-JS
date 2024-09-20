const toTopBtn=document.querySelector("#container");

toTopBtn.addEventListener("click",toTop);

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

window.addEventListener('scroll', function(){
	const line = document.querySelector(".line");
	let scrollY_percent=window.scrollY/(document.body.offsetHeight-window.innerHeight);
	let scrollY_center=scrollY+innerHeight/2-5*innerHeight/7;

	const newLine=document.createElementNS('http://www.w3.org/2000/svg','line');
	newLine.setAttribute('id','line2');
	newLine.setAttribute('x1','1.5');
	newLine.setAttribute('y1','0');
	newLine.setAttribute('x2','1.5');
	newLine.setAttribute('y2',scrollY_center);
	newLine.setAttribute("stroke", "white")
	line.append(newLine);
});

let posTop = 0;
    let k=0;
    let sf_bgImg1 = document.querySelector("#snowflower1");
    let sf_bgImg2 = document.querySelector("#snowflower2");
    let bg_container = document.querySelector("#bg_container");
    let bg_containerHeight = bg_container.offsetHeight;
    let moving_bg = document.querySelector("#moving");
    let cb1 = document.querySelector("#cb1");
    cb1.style.top = -1*cb1.offsetHeight+"px";
    let cb1posTop = 0;
    let cb2 = document.querySelector("#cb2");
    cb2.style.top = -1*cb2.offsetHeight+"px";
    let cb2posTop = 0;
    let cb3 = document.querySelector("#cb3");
    cb3.style.top = -1*cb3.offsetHeight+"px";
    let cb3posTop = 0;
    let cb4 = document.querySelector("#cb4");
    cb4.style.top = -1*cb4.offsetHeight+"px";
    let cb4posTop = 0;
    let cb5 = document.querySelector("#cb5");
    cb5.style.top = -1*cb5.offsetHeight+"px";
    let cb5posTop = 0;
    let cb6 = document.querySelector("#cb6");
    cb6.style.top = -1*cb6.offsetHeight+"px";
    let cb6posTop = 0;
    let cb7 = document.querySelector("#cb7");
    cb7.style.top = -1*cb7.offsetHeight+"px";
    let cb7posTop = 0;
    let cb8 = document.querySelector("#cb8");
    cb8.style.top = -1*cb8.offsetHeight+"px";
    let cb8posTop = 0;
    let cb9 = document.querySelector("#cb9");
    cb9.style.top = -1*cb9.offsetHeight+"px";
    let cb9posTop = 0;
    let cb10 = document.querySelector("#cb10");
    cb10.style.top = -1*cb10.offsetHeight+"px";
    let cb10posTop = 0;
    let cb11 = document.querySelector("#cb11");
    cb11.style.top = -1*cb11.offsetHeight+"px";
    let cb11posTop = 0;
    let cb12 = document.querySelector("#cb12");
    cb12.style.top = -1*cb12.offsetHeight+"px";
    let cb12posTop = 0;
    let cb13 = document.querySelector("#cb13");
    cb13.style.top = -1*cb13.offsetHeight+"px";
    let cb13posTop = 0;
    let cb14 = document.querySelector("#cb14");
    cb14.style.top = -1*cb14.offsetHeight+"px";
    let cb14posTop = 0;
    let cb15 = document.querySelector("#cb15");
    cb15.style.top = -1*cb15.offsetHeight+"px";
    let cb15posTop = 0;
    let cb16 = document.querySelector("#cb16");
    cb16.style.top = -1*cb16.offsetHeight+"px";
    let cb16posTop = 0;
    let cb17 = document.querySelector("#cb17");
    cb17.style.top = -1*cb17.offsetHeight+"px";
    let cb17posTop = 0;
    let cb18 = document.querySelector("#cb18");
    cb18.style.top = -1*cb18.offsetHeight+"px";
    let cb18posTop = 0;
    let cb19 = document.querySelector("#cb19");
    cb19.style.top = -1*cb19.offsetHeight+"px";
    let cb19posTop = 0;
    let cb20 = document.querySelector("#cb20");
    cb20.style.top = -1*cb20.offsetHeight+"px";
    let cb20posTop = 0;

    cb1.style.left = -1*window.innerWidth+"px";
    cb2.style.left = -1*window.innerWidth+"px";
    cb3.style.left = -1*window.innerWidth+"px";
    cb4.style.left = -1*window.innerWidth+"px";
    cb5.style.left = -1*window.innerWidth+"px";
    cb6.style.left = -1*window.innerWidth+"px";
    cb7.style.left = -1*window.innerWidth+"px";
    cb8.style.left = -1*window.innerWidth+"px";
    cb9.style.left = -1*window.innerWidth+"px";
    cb10.style.left = -1*window.innerWidth+"px";
    cb11.style.left = -1*window.innerWidth+"px";
    cb12.style.left = -1*window.innerWidth+"px";
    cb13.style.left = -1*window.innerWidth+"px";
    cb14.style.left = -1*window.innerWidth+"px";
    cb15.style.left = -1*window.innerWidth+"px";
    cb16.style.left = -1*window.innerWidth+"px";
    cb17.style.left = -1*window.innerWidth+"px";
    cb18.style.left = -1*window.innerWidth+"px";
    cb19.style.left = -1*window.innerWidth+"px";
    cb20.style.left = -1*window.innerWidth+"px";
    
    window.addEventListener("load",()=>{
      setInterval(frame,30);
      setInterval(mcb1,32);
      setInterval(mcb2,29);
      setInterval(mcb3,27);
      setInterval(mcb4,24);
      setInterval(mcb5,20);
      setInterval(mcb6,17);
      setInterval(mcb7,14);
      setInterval(mcb8,11);
      setInterval(mcb9,7);
      setInterval(mcb10,4);
      setInterval(mcb11,31);
      setInterval(mcb12,28);
      setInterval(mcb13,26);
      setInterval(mcb14,23);
      setInterval(mcb15,19);
      setInterval(mcb16,16);
      setInterval(mcb17,13);
      setInterval(mcb18,10);
      setInterval(mcb19,8);
      setInterval(mcb20,6);
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


    function mcb1(){
      const comp=Math.random();
      let cbLeft=comp*bg_container.offsetWidth;

      if(cb1posTop>=cb1.offsetHeight+bg_containerHeight){
        cb1posTop=0;
        cb1.style.top = cb1posTop-cb1.offsetHeight+"px";
        cb1.style.left = cbLeft-cb1.offsetWidth+"px";
      }else{
        cb1posTop++;
        cb1.style.top = cb1posTop-cb1.offsetHeight+"px";
      }
    }

    function mcb2(){
      const comp=Math.random();
      let cbLeft=comp*bg_container.offsetWidth;

      if(cb2posTop>=cb2.offsetHeight+bg_containerHeight){
        cb2posTop=0;
        cb2.style.top = cb2posTop-cb2.offsetHeight+"px";
        cb2.style.left = cbLeft-cb2.offsetWidth+"px";
      }else{
        cb2posTop++;
        cb2.style.top = cb2posTop-cb2.offsetHeight+"px";
      }
    }

    function mcb3(){
      const comp=Math.random();
      let cbLeft=comp*bg_container.offsetWidth;

      if(cb3posTop>=cb3.offsetHeight+bg_containerHeight){
        cb3posTop=0;
        cb3.style.top = cb3posTop-cb3.offsetHeight+"px";
        cb3.style.left = cbLeft-cb3.offsetWidth+"px";
      }else{
        cb3posTop++;
        cb3.style.top = cb3posTop-cb3.offsetHeight+"px";
      }
    }

    function mcb4(){
      const comp=Math.random();
      let cbLeft=comp*bg_container.offsetWidth;

      if(cb4posTop>=cb4.offsetHeight+bg_containerHeight){
        cb4posTop=0;
        cb4.style.top = cb4posTop-cb4.offsetHeight+"px";
        cb4.style.left = cbLeft-cb4.offsetWidth+"px";
      }else{
        cb4posTop++;
        cb4.style.top = cb4posTop-cb4.offsetHeight+"px";
      }
    }

    function mcb5(){
      const comp=Math.random();
      let cbLeft=comp*bg_container.offsetWidth;

      if(cb5posTop>=cb5.offsetHeight+bg_containerHeight){
        cb5posTop=0;
        cb5.style.top = cb5posTop-cb5.offsetHeight+"px";
        cb5.style.left = cbLeft-cb5.offsetWidth+"px";
      }else{
        cb5posTop++;
        cb5.style.top = cb5posTop-cb5.offsetHeight+"px";
      }
    }

    function mcb6(){
      const comp=Math.random();
      let cbLeft=comp*bg_container.offsetWidth;

      if(cb6posTop>=cb6.offsetHeight+bg_containerHeight){
        cb6posTop=0;
        cb6.style.top = cb6posTop-cb6.offsetHeight+"px";
        cb6.style.left = cbLeft-cb6.offsetWidth+"px";
      }else{
        cb6posTop++;
        cb6.style.top = cb6posTop-cb6.offsetHeight+"px";
      }
    }

    function mcb7(){
      const comp=Math.random();
      let cbLeft=comp*bg_container.offsetWidth;

      if(cb7posTop>=cb7.offsetHeight+bg_containerHeight){
        cb7posTop=0;
        cb7.style.top = cb7posTop-cb7.offsetHeight+"px";
        cb7.style.left = cbLeft-cb7.offsetWidth+"px";
      }else{
        cb7posTop++;
        cb7.style.top = cb7posTop-cb7.offsetHeight+"px";
      }
    }

    function mcb8(){
      const comp=Math.random();
      let cbLeft=comp*bg_container.offsetWidth;

      if(cb8posTop>=cb8.offsetHeight+bg_containerHeight){
        cb8posTop=0;
        cb8.style.top = cb8posTop-cb8.offsetHeight+"px";
        cb8.style.left = cbLeft-cb8.offsetWidth+"px";
      }else{
        cb8posTop++;
        cb8.style.top = cb8posTop-cb8.offsetHeight+"px";
      }
    }

    function mcb9(){
      const comp=Math.random();
      let cbLeft=comp*bg_container.offsetWidth;

      if(cb9posTop>=cb9.offsetHeight+bg_containerHeight){
        cb9posTop=0;
        cb9.style.top = cb9posTop-cb9.offsetHeight+"px";
        cb9.style.left = cbLeft-cb9.offsetWidth+"px";
      }else{
        cb9posTop++;
        cb9.style.top = cb9posTop-cb9.offsetHeight+"px";
      }
    }

    function mcb10(){
      const comp=Math.random();
      let cbLeft=comp*bg_container.offsetWidth;

      if(cb10posTop>=cb10.offsetHeight+bg_containerHeight){
        cb10posTop=0;
        cb10.style.top = cb10posTop-cb10.offsetHeight+"px";
        cb10.style.left = cbLeft-cb10.offsetWidth+"px";
      }else{
        cb10posTop++;
        cb10.style.top = cb10posTop-cb10.offsetHeight+"px";
      }
    }

    function mcb11(){
      const comp=Math.random();
      let cbLeft=comp*bg_container.offsetWidth;

      if(cb11posTop>=cb11.offsetHeight+bg_containerHeight){
        cb11posTop=0;
        cb11.style.top = cb11posTop-cb11.offsetHeight+"px";
        cb11.style.left = cbLeft-cb11.offsetWidth+"px";
      }else{
        cb11posTop++;
        cb11.style.top = cb11posTop-cb11.offsetHeight+"px";
      }
    }

    function mcb12(){
      const comp=Math.random();
      let cbLeft=comp*bg_container.offsetWidth;

      if(cb12posTop>=cb12.offsetHeight+bg_containerHeight){
        cb12posTop=0;
        cb12.style.top = cb12posTop-cb12.offsetHeight+"px";
        cb12.style.left = cbLeft-cb12.offsetWidth+"px";
      }else{
        cb12posTop++;
        cb12.style.top = cb12posTop-cb12.offsetHeight+"px";
      }
    }

    function mcb13(){
      const comp=Math.random();
      let cbLeft=comp*bg_container.offsetWidth;

      if(cb13posTop>=cb13.offsetHeight+bg_containerHeight){
        cb13posTop=0;
        cb13.style.top = cb13posTop-cb13.offsetHeight+"px";
        cb13.style.left = cbLeft-cb13.offsetWidth+"px";
      }else{
        cb13posTop++;
        cb13.style.top = cb13posTop-cb13.offsetHeight+"px";
      }
    }

    function mcb14(){
      const comp=Math.random();
      let cbLeft=comp*bg_container.offsetWidth;

      if(cb14posTop>=cb14.offsetHeight+bg_containerHeight){
        cb14posTop=0;
        cb14.style.top = cb14posTop-cb14.offsetHeight+"px";
        cb14.style.left = cbLeft-cb14.offsetWidth+"px";
      }else{
        cb14posTop++;
        cb14.style.top = cb14posTop-cb14.offsetHeight+"px";
      }
    }

    function mcb15(){
      const comp=Math.random();
      let cbLeft=comp*bg_container.offsetWidth;

      if(cb15posTop>=cb15.offsetHeight+bg_containerHeight){
        cb15posTop=0;
        cb15.style.top = cb15posTop-cb15.offsetHeight+"px";
        cb15.style.left = cbLeft-cb15.offsetWidth+"px";
      }else{
        cb15posTop++;
        cb15.style.top = cb15posTop-cb15.offsetHeight+"px";
      }
    }

    function mcb16(){
      const comp=Math.random();
      let cbLeft=comp*bg_container.offsetWidth;

      if(cb16posTop>=cb16.offsetHeight+bg_containerHeight){
        cb16posTop=0;
        cb16.style.top = cb16posTop-cb16.offsetHeight+"px";
        cb16.style.left = cbLeft-cb16.offsetWidth+"px";
      }else{
        cb16posTop++;
        cb16.style.top = cb16posTop-cb16.offsetHeight+"px";
      }
    }

    function mcb17(){
      const comp=Math.random();
      let cbLeft=comp*bg_container.offsetWidth;

      if(cb17posTop>=cb17.offsetHeight+bg_containerHeight){
        cb17posTop=0;
        cb17.style.top = cb17posTop-cb17.offsetHeight+"px";
        cb17.style.left = cbLeft-cb17.offsetWidth+"px";
      }else{
        cb17posTop++;
        cb17.style.top = cb17posTop-cb17.offsetHeight+"px";
      }
    }

    function mcb18(){
      const comp=Math.random();
      let cbLeft=comp*bg_container.offsetWidth;

      if(cb18posTop>=cb18.offsetHeight+bg_containerHeight){
        cb18posTop=0;
        cb18.style.top = cb18posTop-cb18.offsetHeight+"px";
        cb18.style.left = cbLeft-cb18.offsetWidth+"px";
      }else{
        cb18posTop++;
        cb18.style.top = cb18posTop-cb18.offsetHeight+"px";
      }
    }

    function mcb19(){
      const comp=Math.random();
      let cbLeft=comp*bg_container.offsetWidth;

      if(cb19posTop>=cb19.offsetHeight+bg_containerHeight){
        cb19posTop=0;
        cb19.style.top = cb19posTop-cb19.offsetHeight+"px";
        cb19.style.left = cbLeft-cb19.offsetWidth+"px";
      }else{
        cb19posTop++;
        cb19.style.top = cb19posTop-cb19.offsetHeight+"px";
      }
    }

    function mcb20(){
      const comp=Math.random();
      let cbLeft=comp*bg_container.offsetWidth;

      if(cb20posTop>=cb20.offsetHeight+bg_containerHeight){
        cb20posTop=0;
        cb20.style.top = cb20posTop-cb20.offsetHeight+"px";
        cb20.style.left = cbLeft-cb20.offsetWidth+"px";
      }else{
        cb20posTop++;
        cb20.style.top = cb20posTop-cb20.offsetHeight+"px";
      }
    }

    let textWrapper = document.querySelector('.ml13');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: false})
      .add({
        targets: '.ml13 .letter',
        translateY: [0,-100],
        opacity: [1,0],
        easing: "easeInExpo",
        duration: 3000,
        delay: (el, i) => 100 + 30 * i
      });