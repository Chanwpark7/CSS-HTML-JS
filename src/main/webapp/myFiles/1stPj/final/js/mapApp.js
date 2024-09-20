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

let textWrapper = document.querySelector('.ml2');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: false})
      .add({
        targets: '.ml2 .letter',
        scale: [4,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70*i
      }).add({
        targets: '.ml2',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });