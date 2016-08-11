// JavaScript Document

	function Tab(id){
		//if(!id){return;}
		this.oHot=document.getElementById(id);
		this.aHotBtn=this.oHot.children[0].getElementsByTagName('span');
		this.aHotClose=this.oHot.children[0].getElementsByTagName('b')[0];
		this.oJian=this.oHot.children[1];	
		this.aHotUl=this.oHot.getElementsByTagName('ul');
		this.iNow=0;
		this.timer=null;
		this.toTab();
		this.fnOpen();
		this.fnOver();
		this.fnOut();
		this.toClose();
		
		this.oS=document.getElementById('scroll_box');
		this.oBar=this.oS.children[0];
		this.t=this.oJian.offsetHeight;
		this.bili=651/5;
	}
	Tab.prototype.toClose=function(){
		var _this=this;
		
		this.aHotClose.onclick=function(){
			if(_this.oJian.offsetHeight==0){
				this.innerHTML='-';
				//_this.oJian.style.height=_this.t+'px';
				move(_this.oJian,{height:_this.t},{easing:'linear'});
				//_this.oBar.style.height=_this.oBar.offsetHeight-651/5+'px';
				move(_this.oBar,{height:_this.oBar.offsetHeight-628/6});

			}else{
				this.innerHTML='+';
				move(_this.oBar,{height:_this.oBar.offsetHeight+628/6});
				//_this.oBar.style.height=_this.oBar.offsetHeight+651/5+'px';
				move(_this.oJian,{height:0},{easing:'linear'});
				//_this.oJian.style.height=0;
			}
			
		};	
	};
	Tab.prototype.toTab=function(){
		var _this=this;
		for(var i=0;i<this.aHotBtn.length;i++){
			this.aHotBtn[i].index=i;
			this.aHotBtn[i].onclick=function(){
				_this.iNow=this.index;
				_this.tab();
			};
		}
	};
	Tab.prototype.fnOpen=function(){
		clearInterval(this.timer);
		this.fnClose();	
	};
	Tab.prototype.fnClose=function(){
		var _this=this;
		this.timer=setInterval(function(){
			_this.next();	
		},1000);
	};
	Tab.prototype.fnOut=function(){
		var _this = this;
		this.oHot.onmouseout=function(){
			_this.fnOpen();
		};
	};
	Tab.prototype.fnOver=function(){
		var _this = this;
		this.oHot.onmouseover=function(){
			clearInterval(_this.timer);
		};
	};
	Tab.prototype.next=function(){
		this.iNow++;
		if(this.iNow==this.aHotBtn.length){
			this.iNow=0;
		}
		this.tab();
	};
	Tab.prototype.tab=function(){
		for(var i=0;i<this.aHotBtn.length;i++){
			this.aHotBtn[i].className='';
			this.aHotUl[i].style.display='none';
		}
		this.aHotBtn[this.iNow].className='cur';
		this.aHotUl[this.iNow].style.display='block';
	};
	/*function NoAuto(id){
		Tab.apply(this,arguments); 	
	}
	NoAuto.prototype=new Tab();
	NoAuto.prototype.constructor=NoAuto;
	NoAuto.prototype.fnOpen=null;*/
	
	function Banner(id){
		this.oBan=document.getElementById(id);
		this.oPic=this.oBan.children[0];
		this.oTxt=this.oBan.children[1];
		this.oMask=this.oBan.children[2].getElementsByTagName('i')[0];
		this.aImg=this.oBan.children[2].getElementsByTagName('img');
		this.toBanner();
		this.iNow=0;
		this.aTxtArr=['箭在弦上（第41集大结局）','X女热工','中国好声音','爸爸回来了吗','好丽友一起走','海贼王大结局','X女热工','中国好声音','X女热工','中国好声音'];
	}
	Banner.prototype.toBanner=function(){
		var _this=this;
		for(var i=0;i<this.aImg.length;i++){
			this.aImg[i].index=i;
			this.aImg[i].onmouseover=function(){
				_this.iNow=this.index;
				//_this.oMask.style.left=_this.iNow*76+'px';
				moveT(_this.oMask,_this.iNow*76);
				_this.bigPic();	
			};
		}
	};
	Banner.prototype.bigPic=function(){
		this.oPic.src='img/'+(this.iNow+1)+'.jpg';	
		this.oTxt.innerHTML=this.aTxtArr[this.iNow];
		
	};
//视频卡条栏	
	function Info(id){
		this.oInfo=document.getElementById(id);
		this.aInfoUl=this.oInfo.children;
		this.toInfo();
	}
	Info.prototype.toInfo=function(){
		var _this=this;
		for(var i=0;i<this.aInfoUl.length;i++){
			this.aInfoUl[i].index=i;
			this.aInfoUl[i].onmouseover=function(){
				if(this.index%2==0){
					for(var i=0;i<_this.aInfoUl.length;i+=2){
						_this.aInfoUl[i].style.display='block';
						_this.aInfoUl[i+1].style.display='none';
					}
					_this.aInfoUl[this.index+1].style.display='block';
					_this.aInfoUl[this.index].style.display='none';	
				}
			};	
		}	
	};
	function TabCli(id){
		this.oTabInfo=document.getElementById('hot4');
		this.aInfoBtn=this.oTabInfo.children[0].getElementsByTagName('span');
		this.aInfoUl=this.oTabInfo.children;
		this.aHotClose=this.oTabInfo.children[0].getElementsByTagName('b')[0];
		this.oJian=this.oTabInfo.children[1];	
		this.toTabCli();
		this.toClose();
		this.iNow=0;
		this.oS=document.getElementById('scroll_box');
		this.oBar=this.oS.children[0];
		this.t=this.oJian.offsetHeight;
	}
	TabCli.prototype.toClose=function(){
		var _this=this;
		this.aHotClose.onclick=function(){	
			if(_this.oJian.offsetHeight==0){
				this.innerHTML='-';
				//_this.oJian.style.height=_this.t+'px';
				//_this.oBar.style.height=_this.oBar.offsetHeight-_this.oJian.offsetHeight+'px';
				move(_this.oJian,{height:_this.t},{easing:'linear'});
				move(_this.oBar,{height:_this.oBar.offsetHeight-628/6});
				
			}else{
				this.innerHTML='+';
				//_this.oBar.style.height=_this.oBar.offsetHeight+_this.oJian.offsetHeight+'px';
				//_this.oJian.style.height=0;
				move(_this.oBar,{height:_this.oBar.offsetHeight+628/6});
				move(_this.oJian,{height:0},{easing:'linear'});
			}
			
		};	
	};
	TabCli.prototype.toTabCli=function(){
		var _this=this;
		for(var i=0;i<this.aInfoBtn.length;i++){
			this.aInfoBtn[i].index=i;
			this.aInfoBtn[i].onclick=function(){
				_this.iNow=this.index;
				_this.infotab();
			};
		}
	};
	TabCli.prototype.infotab=function(){
		for(var i=0;i<this.aInfoBtn.length;i++){
			this.aInfoBtn[i].className='';
			this.aInfoUl[i+1].style.display='none';
		}
		this.aInfoBtn[this.iNow].className='cur';
		this.aInfoUl[this.iNow+1].style.display='block';
	};
	
	
	function Head(id){
		this.oBank=document.getElementById(id);
		this.aWin=this.oBank.getElementsByTagName('a');
		this.toHead();
	}
	
	Head.prototype.toHead=function(){
		this.aWin[1].onclick=function(){
			window.open('http://www.baidu.com');
		};	
		this.aWin[2].onclick=function(){
			window.open('http://www.baidu.com');
		};
	};
	
	
	
	
	