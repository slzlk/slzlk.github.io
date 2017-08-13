var data = {
		list:[
			{
			img:'img/1.jpg',
			ms:'典藏V2'
			},
			{
			img:'img/2.jpg',
			ms:'典藏V2'
			},
			{
			img:'img/3.jpg',
			ms:'典藏V2'
			},
			{
			img:'img/4.png',
			ms:'典藏V2'
			},
			{
			img:'img/5.png',
			ms:'典藏V2'
			},
			{
			img:'img/6.png',
			ms:'典藏V2'
			},
			{
			img:'img/7.jpg',
			ms:'典藏V2'
			},
			{
			img:'img/8.jpg',
			ms:'典藏V2'
			},
			{
			img:'img/21.jpg',
			ms:'典藏V2'
			},
			{
			img:'img/22.jpg',
			ms:'典藏V2'
			},
			{
			img:'img/23.jpg',
			ms:'典藏V2'
			},
			{
			img:'img/24.jpg',
			ms:'典藏V2'
			},
			{
			img:'img/25.jpg',
			ms:'典藏V2'
			},
			{
			img:'img/22.jpg',
			ms:'典藏V2'
			},
			{
			img:'img/22.jpg',
			ms:'典藏V2'
			}
		]
}
var product = document.getElementById('products');
var len = Math.ceil(data.list.length/8)
var hash = window.location.hash.split("=")[1]? window.location.hash.split("=")[1]:1;
if(hash){
	
}else{
	window.location.hash =  "page=1";
	hash = 1;
}


function setInner(hash){
	product.innerHTML = '';
	for(var i = 9*(hash-1);i < 9*(hash-1)+8;i++){
		if(!data.list[i]){
			return;
		}
		product.innerHTML+=`<li>
								<a href="#">
									<img src="${data.list[i].img}"/>									</a>
								<span>${data.list[i].ms}</span>
							</li>
		`
	}
}
function setHash(){
	setInner(hash)
var page = document.getElementsByClassName("page")[0];
for(var i = 0;i < len;i++){
	page.innerHTML+=`<a href="javascript:;">${i+1}</a>`;
}
var aA = page.getElementsByTagName('a');
for(var i = 0;i < aA.length;i++){
	aA[i].onclick = function(){
		window.location.hash = "page="+this.innerHTML;
		
	}
}
window.onhashchange=function(){
	hash = window.location.hash.split("=")[1];
	setInner(hash)
}
var prev = document.getElementsByClassName("prev")[0];
var next = document.getElementsByClassName("next")[0];
next.onclick = function(){
	hash++
	if(hash >= aA.length){
		hash = aA.length;
		window.location.hash = "page="+hash;
	}
	setInner(hash)
}
prev.onclick = function(){
	hash--
	
	if(hash < 1){
		hash = 1;
		window.location.hash = "page="+hash;
	}
	setInner(hash)
}
}
setHash();
var datas = {
	list:['2016年春节公司放假通知',
	'热烈祝贺汾酒集团盛世典藏驻泰宁办事处即专卖店开业大吉',
	'热烈祝贺汾酒集团盛世典藏驻泰宁办事处即专卖店开业大吉',
	'2015年山东枣庄盛世典藏新品招商签约大会隆重召开',
	'2015年汾酒集团盛世兴典藏全国大区经理会议',
	'2015年汾酒集团盛世典藏成都春季糖酒会工作安排',
	'陇南武都盛世典藏品鉴会部分图片展示',
	'2014年“盛世典藏杯”旅游小姐专场模特大赛取得圆满成功!',
	'汾酒盛世典藏与国投康菲控股管理集团达成战略合作',
	'陕西盛世典藏订货会盛大召开',
	'2016年春节公司放假通知',
	'热烈祝贺汾酒集团盛世典藏驻泰宁办事处即专卖店开业大吉',
	'热烈祝贺汾酒集团盛世典藏驻泰宁办事处即专卖店开业大吉',
	'2015年山东枣庄盛世典藏新品招商签约大会隆重召开',
	'2015年汾酒集团盛世兴典藏全国大区经理会议',
	'2015年汾酒集团盛世典藏成都春季糖酒会工作安排',
	'陇南武都盛世典藏品鉴会部分图片展示',
	'2014年“盛世典藏杯”旅游小姐专场模特大赛取得圆满成功!',
	'汾酒盛世典藏与国投康菲控股管理集团达成战略合作',
	'陕西盛世典藏订货会盛大召开',
	'2016年春节公司放假通知',
	'热烈祝贺汾酒集团盛世典藏驻泰宁办事处即专卖店开业大吉',
	'热烈祝贺汾酒集团盛世典藏驻泰宁办事处即专卖店开业大吉',
	'2015年山东枣庄盛世典藏新品招商签约大会隆重召开',
	'2015年汾酒集团盛世兴典藏全国大区经理会议',
	'2015年汾酒集团盛世典藏成都春季糖酒会工作安排',
	'陇南武都盛世典藏品鉴会部分图片展示',
	'2014年“盛世典藏杯”旅游小姐专场模特大赛取得圆满成功!',
	'汾酒盛世典藏与国投康菲控股管理集团达成战略合作',
	'陕西盛世典藏订货会盛大召开',
	'2016年春节公司放假通知',
	'热烈祝贺汾酒集团盛世典藏驻泰宁办事处即专卖店开业大吉',
	'热烈祝贺汾酒集团盛世典藏驻泰宁办事处即专卖店开业大吉',
	'2015年山东枣庄盛世典藏新品招商签约大会隆重召开',
	'2015年汾酒集团盛世兴典藏全国大区经理会议',
	'2015年汾酒集团盛世典藏成都春季糖酒会工作安排',
	'陇南武都盛世典藏品鉴会部分图片展示',
	'2014年“盛世典藏杯”旅游小姐专场模特大赛取得圆满成功!',
	'汾酒盛世典藏与国投康菲控股管理集团达成战略合作',
	'陕西盛世典藏订货会盛大召开',
	'2016年春节公司放假通知',
	'热烈祝贺汾酒集团盛世典藏驻泰宁办事处即专卖店开业大吉',
	'热烈祝贺汾酒集团盛世典藏驻泰宁办事处即专卖店开业大吉',
	'2015年山东枣庄盛世典藏新品招商签约大会隆重召开',
	'2015年汾酒集团盛世兴典藏全国大区经理会议',
	'2015年汾酒集团盛世典藏成都春季糖酒会工作安排',
	'陇南武都盛世典藏品鉴会部分图片展示',
	'2014年“盛世典藏杯”旅游小姐专场模特大赛取得圆满成功!',
	'汾酒盛世典藏与国投康菲控股管理集团达成战略合作',
	'陕西盛世典藏订货会盛大召开',
	'2016年春节公司放假通知',
	'热烈祝贺汾酒集团盛世典藏驻泰宁办事处即专卖店开业大吉',
	'热烈祝贺汾酒集团盛世典藏驻泰宁办事处即专卖店开业大吉',
	'2015年山东枣庄盛世典藏新品招商签约大会隆重召开',
	'2015年汾酒集团盛世兴典藏全国大区经理会议',
	'2015年汾酒集团盛世典藏成都春季糖酒会工作安排',
	'陇南武都盛世典藏品鉴会部分图片展示',
	'2014年“盛世典藏杯”旅游小姐专场模特大赛取得圆满成功!',
	'汾酒盛世典藏与国投康菲控股管理集团达成战略合作',
	'陕西盛世典藏订货会盛大召开',
	'2016年春节公司放假通知',
	'热烈祝贺汾酒集团盛世典藏驻泰宁办事处即专卖店开业大吉',
	'热烈祝贺汾酒集团盛世典藏驻泰宁办事处即专卖店开业大吉',
	'2015年山东枣庄盛世典藏新品招商签约大会隆重召开',
	'2015年汾酒集团盛世兴典藏全国大区经理会议',
	'2015年汾酒集团盛世典藏成都春季糖酒会工作安排',
	'陇南武都盛世典藏品鉴会部分图片展示',
	'2014年“盛世典藏杯”旅游小姐专场模特大赛取得圆满成功!',
	'汾酒盛世典藏与国投康菲控股管理集团达成战略合作',
	'陕西盛世典藏订货会盛大召开'
	]
}








