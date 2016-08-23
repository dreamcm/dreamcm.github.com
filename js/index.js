// JavaScript Document
function setC3Style(obj,sName,sValue){
	obj.style['Webkit'+sName.charAt(0).toUpperCase()+sName.substring(1)] = sValue;
	obj.style['Moz'+sName.charAt(0).toUpperCase()+sName.substring(1)] = sValue;
	obj.style['ms'+sName.charAt(0).toUpperCase()+sName.substring(1)] = sValue;
	obj.style['O'+sName.charAt(0).toUpperCase()+sName.substring(1)] = sValue;
	obj.style[sName] = sValue;
}
document.addEventListener('DOMContentLoaded',function(){
		var oBgban=document.getElementById('banner_bg');
		var oBanner=oBgban.querySelector('.banner');
		var oBegin=oBgban.querySelector('.begin');
		var oBegin_con=oBgban.querySelector('.begin_con');
		var oBegin_mask=oBgban.querySelector('.begin_mask');
		var oConBox=oBgban.querySelector('.con');
		var aCon=oConBox.children;
		var oCon=oBgban.querySelector('.con1');
		var oCon2=oBgban.querySelector('.con2');
		var oBack=oBgban.querySelector('.begin_back');
		var oRe_btn=oBgban.querySelector('.re_btn');
		var oInput=oBgban.querySelector('.begin_back input');
		setC3Style(oBanner,'transition','.5s all ease');
		oBegin.style.opacity=0.5;
		setC3Style(oBanner,'transform','perspective(800px) translateY(60px) rotateY(0deg) scale(1,1)');
		oBanner.addEventListener('transitionend',oBegin_ma,false);
		function oBegin_ma(){
			oBanner.removeEventListener('transitionend',oBegin_ma,false);
			setC3Style(oBegin_mask,'transition','.5s all ease');
			oBegin_mask.style.left='560px';
			oBegin_mask.addEventListener('transitionend',oBegin_back,false);
		}
		function oBegin_back(){
			oBegin_mask.removeEventListener('transitionend',oBegin_back,false);
			setC3Style(oBanner,'transition','1s all ease');	
			oBegin_con.style.opacity=1;
			setC3Style(oBanner,'transform','perspective(800px) translateY(60px) rotateY(180deg) scale(1,1)');
			oBanner.addEventListener('transitionend',oBanner_opa,false);
		};
		function oBanner_opa(){
			oBegin_mask.removeEventListener('transitionend',oBanner_opa,false);
			setC3Style(oBegin_con,'transition','.5s all ease');
			oBegin_con.style.opacity=0;
			oBegin.style.opacity=.4;
			setC3Style(oBack,'transition','.5s all ease');
			oBack.style.opacity=0.4;
			oBack.addEventListener('transitionend',oCon_show,false);
		}
		function oCon_show(){
			oBack.removeEventListener('transitionend',oCon_show,false);
			for(var i=0;i<aCon.length;i++){	
				setC3Style(aCon[i],'transition','1s all ease');
				aCon[i].style.opacity=1;
				setC3Style(aCon[i],'transform','perspective(800px) translateX(1000px) translateY(300px) rotateY(-20deg) rotateX(70deg) translateZ('+i*50+'px) scale(.5,.5)');
				aCon[i].style.opacity=1;
			}
			aCon[aCon.length-1].addEventListener('transitionend',oCon_txt,false);
		}
		function oCon_txt(){
			
			aCon[aCon.length-1].removeEventListener('transitionend',oCon_txt,false);
			var str = '  Welcome To My World ! Here is my profile and work.                                                                                                                                                                               ';
	
			for(var i = 0;i<str.length;i++){
				var oB = document.createElement('b');
				oB.innerHTML = str.charAt(i);
				oBack.appendChild(oB);
			}
			var aB =oBack.children;
			var i = 0;
			var timer = null;
			clearInterval(timer);
			timer = setInterval(function(){
				move(aB[i],{opacity:1});
				i++;
				if(i == aB.length){
					clearInterval(timer);	
				}
			},50);
			var bOk=false;
			for(var i=0;i<aCon.length;i++){
				aCon[i].index=i;
				aCon[i].onclick=function(){
					if(bOk){return;}
					bOk = true;
					for(var i=0;i<aCon.length;i++){
						this.style.backgroundImage='url(images/ziliao2.png)';
						setC3Style(aCon[i],'transform','perspective(800px) translateX(1000px) translateY(300px) rotateY(-20deg) rotateX(70deg) translateZ('+i*50+'px) scale(0.5,0.5)');
					}
					setC3Style(oBanner,'transition','1s all ease');
					oBanner.style.opacity=0;
					if(oBanner.style.display==0){bOk = false;}
					this.style.backgroundImage='url(images/ziliao.png)';
					setC3Style(this,'transform','perspective(800px) translateX(230px) translateY(100px) rotateY(0deg) rotateX(0deg) translateZ('+i*50+'px) scale(1,1)');
					this.position='relative';
					var oInfo=document.createElement('div');
					var strA=['about me','a little practice'];
					this.innerHTML='<h3>'+strA[this.index]+'</h3><img src="images/tx.jpg"/><a href="#page'+(this.index+2)+'">ENTER</a>';
					this.appendChild(oInfo);
					setC3Style(oRe_btn,'transition','1s all ease');
					setC3Style(oRe_btn,'transform','perspective(800px) translateX(950px) translateY(100px)');
				};
			}
			oRe_btn.onclick=function(){
				if(bOk){return;}
				bOk = true;
				setC3Style(this,'transform','perspective(800px) translateX(-150px) translateY(100px)');
				oBanner.style.opacity=1;
				for(var i=0;i<aCon.length;i++){
					setC3Style(aCon[i],'transform','perspective(800px) translateX(1000px) translateY(300px) rotateY(-20deg) rotateX(70deg) translateZ('+i*50+'px) scale(0.5,0.5)');
					aCon[i].innerHTML='';
				}
				if(oBanner.style.display==0){bOk = false;}
			}
			
		}
		var oWork=document.querySelector('.work');
		var oWork_box=oWork.querySelector('div');
		var aWork_list=oWork.querySelectorAll('a');
		var oBtn = oWork.querySelector('input');
		var aPos = [];
		for(var i = 0;i<aWork_list.length;i++){
			aPos.push({left:aWork_list[i].offsetLeft,top:aWork_list[i].offsetTop});
		}
		var bok=false;
		function next(){
			oBtn.onclick=function(){
				if(bok){return;}
				bok=true;
				for(var i=0;i<aWork_list.length;i++){
					aWork_list[i].style.position= 'absolute';
					aWork_list[i].style.left=104;
					aWork_list[i].style.top=24;
					aWork_list[i].style.width=0;
					aWork_list[i].style.height=0;
					(function(index){
						setTimeout(function(){
							move(aWork_list[index],{width:150,height:150,left:aPos[index].left,top:aPos[index].top,opacity:1},{complete:function(){
							oBtn.onclick=function(){
								for(var i=0;i<aWork_list.length;i++){
									(function(index){
										setTimeout(function(){
											move(aWork_list[index],{width:0,height:0,left:104,top:24,opacity:0},{complete:function(){
												if(index==0){bok=false;}
												next();
		}});
										},i*100);
									})(i);
								}
							}
									
						}});
						},i*100);
					})(i);
				}
			}			
		}
		next();
		
		function rnd(m,n){
			return Math.floor(Math.random()*(n-m)+m);	
		}
		var oMe=document.querySelector('.me');
		var oMe_btn=oMe.children;
		var count=1;
		for(var i=0;i<oMe_btn.length;i++){
			setC3Style(oMe_btn[i],'transition','2s all ease');
			setC3Style(oMe_btn[i],'transform','perspective(800px) translateY('+rnd(-50,120)+'px) translateZ('+rnd(50,100)+'px)  rotateY('+rnd(0,181)+'deg)');
			oMe_btn[i].onmouseover=function(){
				this.style.backgroundImage='url(images/userbg_clikb.png)';
				setC3Style(this,'transform','perspective(800px) translateY('+rnd(-50,120)+'px) translateZ('+rnd(50,100)+'px)  rotateY('+rnd(0,181)+'deg)');
				this.style.fontSize=40+'px';
			};
			oMe_btn[i].onmouseout=function(){
				this.style.backgroundImage='url(images/userbg_clik.png)';
				setC3Style(this,'transform','perspective(800px) translateY('+rnd(-50,120)+'px) translateZ('+rnd(50,100)+'px)  rotateY('+rnd(0,181)+'deg)');
				this.style.fontSize=20+'px';
			};
		}
		
	},false);