'use strict'
var iSpeed = 0;
function moveT(obj,iTarget){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		iSpeed+=(iTarget-obj.offsetLeft)/5;
		iSpeed*=0.8;
		obj.style.left = obj.offsetLeft+iSpeed+'px';
		if(Math.round(iSpeed)==0&&obj.offsetLeft==iTarget){
			clearInterval(obj.timer);
		}
	},30);
}