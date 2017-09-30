var list = document.getElementsByClassName("mouse-event");
for(var x =0; x < list.length; x++){
	list[x].addEventListener("mouseover",function(){
		for(var x =0; x < list.length; x++){
			document.getElementsByClassName("mouse-event")[x].style.animationPlayState="paused";
		}
	});
	
	list[x].addEventListener("mouseleave",function(){
		for(var x =0; x < list.length; x++){
			document.getElementsByClassName("mouse-event")[x].style.animationPlayState="running";
			console.log(1);
		}
	});
}