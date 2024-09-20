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