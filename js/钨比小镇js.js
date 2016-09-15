$(".w_sign a").mouseenter(function(){
	$(this).addClass("active").siblings().removeClass("active");
});
$(".tab-tit-l a").mouseenter(function(){
	$(this).addClass("cur").siblings().removeClass("cur");
});
/*$(".focus ul").mouseenter(function(){
	$(".focus-bt-left").css("display","block");
	$(".focus-bt-right").css("display","block");
});
$(".focus ul").mouseout(function(){
	$(".focus-bt-left").css("display","none");
	$(".focus-bt-right").css("display","none");
});*/
/*
//焦点图轮播功能实现
function dotClick(ulName,dotName,moveTime){
	var myUl=$(ulName);  //将焦点图ul赋给myUL变量；
	var myli=$(ulName).children("li:first");  //将第一个li元素赋给myli变量；
	var mylis=$(ulName).children("li");  //所有li元素
	var odot=$("dotName");
	var dotNumbers=1;
	for(var i=0;i<mylis.length-1;i++){
		dotNumbers++;
	}
	var tbsc=null;
	//var tips=$(myli).clone(true);  //生成被选元素副本，包含子节点，文本和属性
	//myUl.append(tips);
	var mylilast=$(ulName).children("li:last");
	var mydotlast=$(dotName).children("li:last");
	/*点击事件*/
/*	var num=0; //图片
	var num2=0;  //小图标
	var imgWidth=myUl.children("li").css("width");  //获取插入图片宽度
	imgWidth=parseInt(imgWidth);  //转化为整型
	var steps=myUl.children("li").length;  //获取li个数
	myUl.width(imgWidth*steps);  //给ul赋值宽度
	/*定时器*/
/*	function sports(){
		num2++;
		num++;
		var distance=imgWidth*-num;
		if(num>myUl.children("li:last").index()){
			num=1;
			myUl.css("left",0).stop().animate({left:(imgWidth*-1)},300);	
		}else{
			myUl.stop().animate({left:distance},300);
		}
		if(num2>mydotlast.index()){
			num2=0;
			odot.children("li").eq(num2).addClass("current").siblings().removeClass("current");
		}else{
			odot.children("li").eq(num2).addClass("current").siblings().removeClass("current");
		}
	}
	tbsc=setInterval(sports,moveTime);
	var distbts;
	odot.children("li").click(function(){
		distbts=imgWidth*$(this).index()*-1;
		$(this).addClass("current").siblings().removeClass("current");
		myUl.animate({left:distbts},300);
		num=$(this).index();
		num2=$(this).index();
		clearInterval(tbsc);
		tbsc=setInterval(sports,moveTime);
	});
	mylis.hover(function(){
		clearInterval(tbsc);
	},function(){
		tbsc=setInterval(sports,moveTime);
	});
}
dotClick($(".slider-main"),$(".slider-nav"),3000);
*/

/*
$(".slider-nav li").click(function(val){
	var num=$(this).index();
	var imgCount=$(".slider-main").length;
	if(num>(imgCount-1)){
		num+=1;
	}
	else{
		num=0;
	}
	$(".slider-main").hide();
	$(".slider-main").eq(num).fadeIn(200);
	$(this).addClass("current").siblings().removeClass("current");
	function showImg(val){
		var imgCount=$(".slider-main").length;
		$(".slider-main").hide();
	    $(".slider-main").eq(val).fadeIn(200);
		$(".slider-nav li").eq(val).addClass("current").siblings().removeClass("current");
		if(num<(imgCount-1)){
			num+=1;
		}
		else{
			num=0;
		}
		setTimeout(function(){showImg(num);},4000);
	}
	var num=0;showImg(num);
});
*/

/*
function getStyle(obj,name)
{
	if(obj.currentStyle){
		return obj.currentStyle[name]   //ie
	}
	else{
		return getComputedStyle(obj,false)[name]   //非ie
	}
}

function getByClass(oParent,nClass)
{
	var eLe=oParent.getElementsByTagName("*");
	var aRrent=[];
	for(var i=0;i<eLe.length;i++){
		if(eLe[i].className==nClass)
		{
			aRrent.push(eLe[i]);
		}
	}
	return aRrent;
}/*
function getByClass(obj,sClass)
{
	if(obj.getElementsByTagName)
	{
		return obj.getElementsByClassName(sClass);
	}
	var result=[];
	var arr=obj.getElementsByTagName("*");
	var re=new RegExp("\\b"+sClass+"\\b");
	for(var i=0;i<arr.length;i++)
	{
		if(re.test(arr[i].className))
		{
			result.push(arr[i]);
		}
	}
	return result;
}
*/
/*
function startMove(obj,att,add)
{
	clearInterval(obj.timer)
	obj.timer=setInterval(function(){
		var cutt=0;
		if(att=="opacity")
		{
			cutt=Math.round(parseFloat(getStyle(obj,att)));
		}
		else
		{
			cutt=Math.round(parseInt(getStyle(obj,att)));
		}
		var speed=(add-cutt)/4;
		speed=speed>0?Math.cell(speed):Math.floor(speed);
		if(cutt==add)
		{
			clearInterval(obj.timer)
		}
		else
		{
			if(att=="opacity")
			{
				obj.style.opacity=(cutt+speed)/100;
				obj.style.filter="alpha(opacity:"+(cutt+speed)+")";
			}
			else{
				obj.style[att]=cutt+speed+"px";
			}
		}
	},30)
}

window.onload=function()
{
	var oDiv=document.getElementsByClassName("focus-box");
	var oPre=getByClass(oDiv,"focus-bt-left")[0];
	//var oPre=document.getElementsByClassName("focus-bt-left");
	//var oNext=getByClass(oDiv,"focus-bt-right")[0];
	var oNext=document.getElementsByClassName("focus-bt-right");
	var oUlBig=document.getElementsByClassName("slider-main");
	//var aBigLi=oUlBig.getElementsByTagName("li");
	//var aBigLi=oUlBig.getElementsByTagName("li");
	var aBigLi=$("slider-main li");
	var oDivSmall=document.getElementsByClassName("slider-nav");
	//var aLiSmall=oDivSmall.getElementsByTagName("li")
	var aLiSmall=$("slider-nav li");
	//var oPreSmall=getByClass(oDiv,"prev")[0];
	var oPreSmall=document.getElementsByClassName("prev");
	//var oNextSmall=getByClass(oDiv,"next")[0];
	var oNextSmall=document.getElementsByClassName("next");
	function tab()
	{
		for(var i=0;i<aLiSmall.length;i++)
		{
			aLiSmall[i].className="";
		}
		aLiSmall[now].className="current"
		startMove(oUlBig,"left",-(now*aBigLi[0].offsetWidth))
	}
	var now=0;
	for(var i=0;i<aLiSmall.length;i++)
	{
		aLiSmall[i].index=i;
		aLiSmall[i].onclick=function()
		{
			now=this.index;
			tab();
		}
	}
	oPre.onclick=oPreSmall.onclick=function()
	{
		now--;
		if(now==-1)
		{
			now=aBigLi.length;
		}
		tab();
	}
	oNext.conclick=oNextSmall.onclick=function()
	{
		now++;
		if(now=aBigLi.length)
		{
			now=0;
		}
		tab();
	}
	var timer=setInterval(oNext.onclick,3000)
	oDiv.onmouseover=function()
	{
		clearInterval(timer)
	}
	oDiv.onmouseout=function()
	{
		timer=setInterval(oNext.onclick,3000)
	}
}
*/
$(function(){
	var size=$(".slider-main li").length;
	$(".slider-main li").eq(0).show();    //显示第一张焦点图
	$(".slider-nav li").mouseover(function()  //鼠标触发小图标时
	{
		$(this).addClass("current").siblings().removeClass("current");
		var index=$(this).index();
		i=index;
		$(".slider-main li").eq(index).stop().fadeIn(200).siblings().stop().fadeOut(200);
	});
	//自动轮播
	var i=0;
	var t=setInterval(move,1500);
	//核心向左运动函数
	function moveL(){
		i--;
		if(i==-1){
			i=size;
		}
		$(".slider-nav li").eq(i).addClass("current").siblings().removeClass("current");
		$(".slider-main li").eq(i).fadeIn(200).siblings().fadeOut(200);
	}
	//核心向右运动函数
	function move(){
		i++;
		if(i>size-1){
			i=0;
		}
		$(".slider-nav li").eq(i).addClass("current").siblings().removeClass("current");
		$(".slider-main li").eq(i).fadeIn(200).siblings().fadeOut(200);
	}
	$(".focus-box .focus-bt-left").click(function(){
		moveL();
	});
	$(".focus-box .focus-bt-right").click(function(){
		move();
	});
	$(".prev").click(function(){
		moveL();
	});
	$(".next").click(function(){
		move();
	});
	//定时器
	$(".focus-box").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(move,1500);
	});	
});
