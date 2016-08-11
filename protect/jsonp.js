//url,data,timeout,success,error
function jsonp(options){
	//默认值
	options = options||{};
	if(!options.url){return;}
	options.data = options.data||{};
	options.data.cbName = options.data.cbName||'cb';
	options.timeout = options.timeout||3000;		
	//变全局函数
	options.data[options.data.cbName] = 'jsonp_'+Math.random();
	options.data[options.data.cbName] = options.data[options.data.cbName].replace('.','');
	window[options.data[options.data.cbName]] = function(json){
		clearTimeout(timer);
		options.success&&options.success(json);	
		document.head.removeChild(oS);
	}; 
	//拼数据
	var arr = [];
	for(var name in options.data){
		arr.push(name+'='+encodeURIComponent(options.data[name]));
	}
	if(options.timeout){
		clearTimeout(timer);
		var timer = setTimeout(function(){
			document.head.removeChild(oS);
			window[options.data[options.data.cbName]] = null;
			options.error&&options.error();
			
		},options.timeout);
	}
	//函数调用
	var oS = document.createElement('script');
	oS.src = options.url+'?'+arr.join('&');	
	document.head.appendChild(oS);	
}
