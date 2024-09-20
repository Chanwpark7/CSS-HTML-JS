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

window.onload = play();
window.onload = play2();
function play() {
let l = Snap('#ml12');

setTimeout( function() {
// modify this one line below, and see the result !
let ml12Title = 'Notice';
let ml12Random = '';
let ml12TitleContainer = l.text("48%", '70%', '');
let possible = "-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}";
ml12TitleContainer.attr({
	fontSize: 2.5+"em",
	fontFamily: 'sans serif',
	fontWeight: 'bold'
});

function generateRandomTitle(i, ml12Random) {
	setTimeout( function() {
		ml12TitleContainer.attr({ text: ml12Random });
	}, i*150 );
}

for( let i=0; i < ml12Title.length+1; i++ ) {
	ml12Random = ml12Title.substr(0, i);
	for( let j=i; j < ml12Title.length; j++ ) { 
		ml12Random += possible.charAt(Math.floor(Math.random() * possible.length)); 
	}
	generateRandomTitle(i, ml12Random);
	ml12Random = '';
}

}, 100 );

}

function play2() {
	let l = Snap('#ml13');
	
	setTimeout( function() {
	// modify this one line below, and see the result !
	let ml13Title = '공지사항';
	let ml13Random = '';
	let ml13TitleContainer = l.text("0", '70%', '');
	let possible = "-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}";
	ml13TitleContainer.attr({
		fontSize: 2.5+"em",
		fontFamily: 'sans serif',
		fontWeight: 'bold'
	});
	
	function generateRandomTitle(i, ml13Random) {
		setTimeout( function() {
			ml13TitleContainer.attr({ text: ml13Random });
		}, i*150 );
	}
	
	for( let i=0; i < ml13Title.length+1; i++ ) {
		ml13Random = ml13Title.substr(0, i);
		for( let j=i; j < ml13Title.length; j++ ) { 
			ml13Random += possible.charAt(Math.floor(Math.random() * possible.length)); 
		}
		generateRandomTitle(i, ml13Random);
		ml13Random = '';
	}
	
	}, 100 );
	
	}