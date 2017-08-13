function swipe(obj,dir,fn){//三个参数：操作元素，方向，执行的函数
		obj.addEventListener("touchstart",start);
		obj.addEventListener("touchend",end);
		var startX = null;
		var startY = null;
		var endX = null;
		var endY = null;
		function start(ev){
			ev = ev.changedTouches[0];//touches
			startX = ev.pageX;
			startY = ev.pageY;
		}
		function end(ev){
			ev = ev.changedTouches[0];//touches
			endX = ev.pageX
			endY = ev.pageY
			if(endX == startX&&endY==startY){//说明按下抬起位置相同，是点击事件。
				if(dir == 'tap'){//方向
					typeof fn == 'function'&&fn.call(obj);//判断是函数则执行
				}
			} 
			if(Math.abs(endX-startX) >=　Math.abs(endY-startY) ){//首先判断是左右滑屏（即x的绝对值大于y）
				if(endX-startX > 0){//为正，向右滑动
					if(dir == 'right'){
						typeof fn == 'function'&&fn.call(obj);
					}
				}
				if(endX-startX < 0){//为负，向左滑动
					if(dir == 'left'){
						typeof fn == 'function'&&fn.call(obj);
					}
				}
			}
			if(Math.abs(endY-startY) >　Math.abs(endX-startX) ){//首先判断是上下滑屏（即Y的绝对值大于X）
				if(endY-startY > 0){//为正，下滑
					if(dir == 'down'){
						typeof fn == 'function'&&fn.call(obj);
					}
				}
				if(endY-startY < 0){//为负，上滑
					if(dir == 'up'){
						typeof fn == 'function'&&fn.call(obj);
					}
				}
			}
			
		}
	
	}