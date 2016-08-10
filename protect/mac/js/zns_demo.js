/*
智能社© - http://www.zhinengshe.com/

微博：@北京智能社
微信：zhi_neng_she

最具深度的前端开发培训机构 HTML+CSS/JS/HTML5
*/
	document.onmousemove = function(ev){
		var oEvent = ev||event;
		var oEvent=ev||event;
		var aInput = document.getElementsByTagName('input');
		var oDiv=document.getElementById('div1');
		var aImg=oDiv.getElementsByTagName('img');
		function getDistance(obj)
		{
			return Math.sqrt
			(
				Math.pow(obj.offsetLeft+oDiv.offsetLeft-oEvent.clientX+obj.offsetWidth/2, 2)+
				Math.pow(obj.offsetTop+oDiv.offsetTop-oEvent.clientY+obj.offsetHeight/2, 2)
			);
		}
		for(var i=0;i<aImg.length;i++){
			var c = getDistance(aImg[i]);
			var scale =1 - c/500;
			aInput[i].value = scale;
			scale<0.5&&(scale=0.5);
			aImg[i].style.width = scale*128+'px';
		}
		
	};
	
