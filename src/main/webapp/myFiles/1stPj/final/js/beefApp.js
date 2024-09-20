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


let k=0;
    let bg_container = document.querySelector("#bg_container");
    let bg_containerHeight = bg_container.offsetHeight;
    let mp1 = document.querySelector("#mp1");
    let mp1posTop = 0;
    let mp2 = document.querySelector("#mp2");
    let mp2posTop = 0;
    let mp3 = document.querySelector("#mp3");
    let mp3posTop = 0;
    let mp4 = document.querySelector("#mp4");
    let mp4posTop = 0;
    let mp5 = document.querySelector("#mp5");
    let mp5posTop = 0;
    let mp6 = document.querySelector("#mp6");
    let mp6posTop = 0;
    let mp7 = document.querySelector("#mp7");
    let mp7posTop = 0;
    let mp8 = document.querySelector("#mp8");
    let mp8posTop = 0;
    let mp9 = document.querySelector("#mp9");
    let mp9posTop = 0;
    let mp10 = document.querySelector("#mp10");
    let mp10posTop = 0;
    let mp11 = document.querySelector("#mp11");
    let mp11posTop = 0;
    let mp12 = document.querySelector("#mp12");
    let mp12posTop = 0;
    let mp13 = document.querySelector("#mp13");
    let mp13posTop = 0;
    let mp14 = document.querySelector("#mp14");
    let mp14posTop = 0;
    let mp15 = document.querySelector("#mp15");
    let mp15posTop = 0;
    let mp16 = document.querySelector("#mp16");
    let mp16posTop = 0;
    let mp17 = document.querySelector("#mp17");
    let mp17posTop = 0;
    let mp18 = document.querySelector("#mp18");
    let mp18posTop = 0;
    let mp19 = document.querySelector("#mp19");
    let mp19posTop = 0;
    let mp20 = document.querySelector("#mp20");
    let mp20posTop = 0;
    
    window.addEventListener("load",()=>{
      moveLeft();
      setInterval(mmp1,32);
      setInterval(mmp2,29);
      setInterval(mmp3,27);
      setInterval(mmp4,24);
      setInterval(mmp5,20);
      setInterval(mmp6,17);
      setInterval(mmp7,14);
      setInterval(mmp8,11);
      setInterval(mmp9,7);
      setInterval(mmp10,4);
      setInterval(mmp11,31);
      setInterval(mmp12,28);
      setInterval(mmp13,26);
      setInterval(mmp14,23);
      setInterval(mmp15,19);
      setInterval(mmp16,16);
      setInterval(mmp17,13);
      setInterval(mmp18,10);
      setInterval(mmp19,8);
      setInterval(mmp20,6);
    });

    function moveLeft(){
      mp1.style.left = Math.random()*window.innerWidth+"px";
      mp2.style.left = Math.random()*window.innerWidth+"px";
      mp3.style.left = Math.random()*window.innerWidth+"px";
      mp4.style.left = Math.random()*window.innerWidth+"px";
      mp5.style.left = Math.random()*window.innerWidth+"px";
      mp6.style.left = Math.random()*window.innerWidth+"px";
      mp7.style.left = Math.random()*window.innerWidth+"px";
      mp8.style.left = Math.random()*window.innerWidth+"px";
      mp9.style.left = Math.random()*window.innerWidth+"px";
      mp10.style.left = Math.random()*window.innerWidth+"px";
      mp11.style.left = Math.random()*window.innerWidth+"px";
      mp12.style.left = Math.random()*window.innerWidth+"px";
      mp13.style.left = Math.random()*window.innerWidth+"px";
      mp14.style.left = Math.random()*window.innerWidth+"px";
      mp15.style.left = Math.random()*window.innerWidth+"px";
      mp16.style.left = Math.random()*window.innerWidth+"px";
      mp17.style.left = Math.random()*window.innerWidth+"px";
      mp18.style.left = Math.random()*window.innerWidth+"px";
      mp19.style.left = Math.random()*window.innerWidth+"px";
      mp20.style.left = Math.random()*window.innerWidth+"px";
    }

    function mmp1(){
      const comp=Math.random();
      let mpLeft=comp*bg_container.offsetWidth;

      if(mp1posTop>=mp1.offsetHeight+bg_containerHeight){
        mp1posTop=0;
        mp1.style.top = mp1posTop-mp1.offsetHeight+"px";
        mp1.style.left = mpLeft-mp1.offsetWidth+"px";
      }else{
        mp1posTop++;
        mp1.style.top = mp1posTop-mp1.offsetHeight+"px";
      }
    }

    function mmp2(){
      const comp=Math.random();
      let mpLeft=comp*bg_container.offsetWidth;

      if(mp2posTop>=mp2.offsetHeight+bg_containerHeight){
        mp2posTop=0;
        mp2.style.top = mp2posTop-mp2.offsetHeight+"px";
        mp2.style.left = mpLeft-mp2.offsetWidth+"px";
      }else{
        mp2posTop++;
        mp2.style.top = mp2posTop-mp2.offsetHeight+"px";
      }
    }

    function mmp3(){
      const comp=Math.random();
      let mpLeft=comp*bg_container.offsetWidth;

      if(mp3posTop>=mp3.offsetHeight+bg_containerHeight){
        mp3posTop=0;
        mp3.style.top = mp3posTop-mp3.offsetHeight+"px";
        mp3.style.left = mpLeft-mp3.offsetWidth+"px";
      }else{
        mp3posTop++;
        mp3.style.top = mp3posTop-mp3.offsetHeight+"px";
      }
    }

    function mmp4(){
      const comp=Math.random();
      let mpLeft=comp*bg_container.offsetWidth;

      if(mp4posTop>=mp4.offsetHeight+bg_containerHeight){
        mp4posTop=0;
        mp4.style.top = mp4posTop-mp4.offsetHeight+"px";
        mp4.style.left = mpLeft-mp4.offsetWidth+"px";
      }else{
        mp4posTop++;
        mp4.style.top = mp4posTop-mp4.offsetHeight+"px";
      }
    }

    function mmp5(){
      const comp=Math.random();
      let mpLeft=comp*bg_container.offsetWidth;

      if(mp5posTop>=mp5.offsetHeight+bg_containerHeight){
        mp5posTop=0;
        mp5.style.top = mp5posTop-mp5.offsetHeight+"px";
        mp5.style.left = mpLeft-mp5.offsetWidth+"px";
      }else{
        mp5posTop++;
        mp5.style.top = mp5posTop-mp5.offsetHeight+"px";
      }
    }

    function mmp6(){
      const comp=Math.random();
      let mpLeft=comp*bg_container.offsetWidth;

      if(mp6posTop>=mp6.offsetHeight+bg_containerHeight){
        mp6posTop=0;
        mp6.style.top = mp6posTop-mp6.offsetHeight+"px";
        mp6.style.left = mpLeft-mp6.offsetWidth+"px";
      }else{
        mp6posTop++;
        mp6.style.top = mp6posTop-mp6.offsetHeight+"px";
      }
    }

    function mmp7(){
      const comp=Math.random();
      let mpLeft=comp*bg_container.offsetWidth;

      if(mp7posTop>=mp7.offsetHeight+bg_containerHeight){
        mp7posTop=0;
        mp7.style.top = mp7posTop-mp7.offsetHeight+"px";
        mp7.style.left = mpLeft-mp7.offsetWidth+"px";
      }else{
        mp7posTop++;
        mp7.style.top = mp7posTop-mp7.offsetHeight+"px";
      }
    }

    function mmp8(){
      const comp=Math.random();
      let mpLeft=comp*bg_container.offsetWidth;

      if(mp8posTop>=mp8.offsetHeight+bg_containerHeight){
        mp8posTop=0;
        mp8.style.top = mp8posTop-mp8.offsetHeight+"px";
        mp8.style.left = mpLeft-mp8.offsetWidth+"px";
      }else{
        mp8posTop++;
        mp8.style.top = mp8posTop-mp8.offsetHeight+"px";
      }
    }

    function mmp9(){
      const comp=Math.random();
      let mpLeft=comp*bg_container.offsetWidth;

      if(mp9posTop>=mp9.offsetHeight+bg_containerHeight){
        mp9posTop=0;
        mp9.style.top = mp9posTop-mp9.offsetHeight+"px";
        mp9.style.left = mpLeft-mp9.offsetWidth+"px";
      }else{
        mp9posTop++;
        mp9.style.top = mp9posTop-mp9.offsetHeight+"px";
      }
    }

    function mmp10(){
      const comp=Math.random();
      let mpLeft=comp*bg_container.offsetWidth;

      if(mp10posTop>=mp10.offsetHeight+bg_containerHeight){
        mp10posTop=0;
        mp10.style.top = mp10posTop-mp10.offsetHeight+"px";
        mp10.style.left = mpLeft-mp10.offsetWidth+"px";
      }else{
        mp10posTop++;
        mp10.style.top = mp10posTop-mp10.offsetHeight+"px";
      }
    }

    function mmp11(){
      const comp=Math.random();
      let mpLeft=comp*bg_container.offsetWidth;

      if(mp11posTop>=mp11.offsetHeight+bg_containerHeight){
        mp11posTop=0;
        mp11.style.top = mp11posTop-mp11.offsetHeight+"px";
        mp11.style.left = mpLeft-mp11.offsetWidth+"px";
      }else{
        mp11posTop++;
        mp11.style.top = mp11posTop-mp11.offsetHeight+"px";
      }
    }

    function mmp12(){
      const comp=Math.random();
      let mpLeft=comp*bg_container.offsetWidth;

      if(mp12posTop>=mp12.offsetHeight+bg_containerHeight){
        mp12posTop=0;
        mp12.style.top = mp12posTop-mp12.offsetHeight+"px";
        mp12.style.left = mpLeft-mp12.offsetWidth+"px";
      }else{
        mp12posTop++;
        mp12.style.top = mp12posTop-mp12.offsetHeight+"px";
      }
    }

    function mmp13(){
      const comp=Math.random();
      let mpLeft=comp*bg_container.offsetWidth;

      if(mp13posTop>=mp13.offsetHeight+bg_containerHeight){
        mp13posTop=0;
        mp13.style.top = mp13posTop-mp13.offsetHeight+"px";
        mp13.style.left = mpLeft-mp13.offsetWidth+"px";
      }else{
        mp13posTop++;
        mp13.style.top = mp13posTop-mp13.offsetHeight+"px";
      }
    }

    function mmp14(){
      const comp=Math.random();
      let mpLeft=comp*bg_container.offsetWidth;

      if(mp14posTop>=mp14.offsetHeight+bg_containerHeight){
        mp14posTop=0;
        mp14.style.top = mp14posTop-mp14.offsetHeight+"px";
        mp14.style.left = mpLeft-mp14.offsetWidth+"px";
      }else{
        mp14posTop++;
        mp14.style.top = mp14posTop-mp14.offsetHeight+"px";
      }
    }

    function mmp15(){
      const comp=Math.random();
      let mpLeft=comp*bg_container.offsetWidth;

      if(mp15posTop>=mp15.offsetHeight+bg_containerHeight){
        mp15posTop=0;
        mp15.style.top = mp15posTop-mp15.offsetHeight+"px";
        mp15.style.left = mpLeft-mp15.offsetWidth+"px";
      }else{
        mp15posTop++;
        mp15.style.top = mp15posTop-mp15.offsetHeight+"px";
      }
    }

    function mmp16(){
      const comp=Math.random();
      let mpLeft=comp*bg_container.offsetWidth;

      if(mp16posTop>=mp16.offsetHeight+bg_containerHeight){
        mp16posTop=0;
        mp16.style.top = mp16posTop-mp16.offsetHeight+"px";
        mp16.style.left = mpLeft-mp16.offsetWidth+"px";
      }else{
        mp16posTop++;
        mp16.style.top = mp16posTop-mp16.offsetHeight+"px";
      }
    }

    function mmp17(){
      const comp=Math.random();
      let mpLeft=comp*bg_container.offsetWidth;

      if(mp17posTop>=mp17.offsetHeight+bg_containerHeight){
        mp17posTop=0;
        mp17.style.top = mp17posTop-mp17.offsetHeight+"px";
        mp17.style.left = mpLeft-mp17.offsetWidth+"px";
      }else{
        mp17posTop++;
        mp17.style.top = mp17posTop-mp17.offsetHeight+"px";
      }
    }

    function mmp18(){
      const comp=Math.random();
      let mpLeft=comp*bg_container.offsetWidth;

      if(mp18posTop>=mp18.offsetHeight+bg_containerHeight){
        mp18posTop=0;
        mp18.style.top = mp18posTop-mp18.offsetHeight+"px";
        mp18.style.left = mpLeft-mp18.offsetWidth+"px";
      }else{
        mp18posTop++;
        mp18.style.top = mp18posTop-mp18.offsetHeight+"px";
      }
    }

    function mmp19(){
      const comp=Math.random();
      let mpLeft=comp*bg_container.offsetWidth;

      if(mp19posTop>=mp19.offsetHeight+bg_containerHeight){
        mp19posTop=0;
        mp19.style.top = mp19posTop-mp19.offsetHeight+"px";
        mp19.style.left = mpLeft-mp19.offsetWidth+"px";
      }else{
        mp19posTop++;
        mp19.style.top = mp19posTop-mp19.offsetHeight+"px";
      }
    }

    function mmp20(){
      const comp=Math.random();
      let mpLeft=comp*bg_container.offsetWidth;

      if(mp20posTop>=mp20.offsetHeight+bg_containerHeight){
        mp20posTop=0;
        mp20.style.top = mp20posTop-mp20.offsetHeight+"px";
        mp20.style.left = mpLeft-mp20.offsetWidth+"px";
      }else{
        mp20posTop++;
        mp20.style.top = mp20posTop-mp20.offsetHeight+"px";
      }
    }

    let textWrapper = document.querySelector('.ml12');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: false})
      .add({
        targets: '.ml12 .letter',
        translateX: [0,-30],
        opacity: [1,0],
        easing: "easeInExpo",
        duration: 3000,
        delay: (el, i) => 100 + 30 * i
      });