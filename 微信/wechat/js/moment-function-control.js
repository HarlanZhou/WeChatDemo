$(function(){

	/*  先让点赞和评论区  都隐藏   */
	
	$(".moment-function-control").hide();
	
	
	/* 点击事件 */
	$(".moment-function-right").click(function(){
		var control = $(this).find(".moment-function-control");
		
		$(control).toggle(100)
	});
	
	
//	图片初始化
	
	
	$(".moment-content-imgs").each(function(){
		
		var imgs = $(this).find(".user-imgs");
		
		if(imgs.length==1){
			imgs.css("background-image","url('"+imgs.data("img")+" ')");
			imgs.addClass("user-imgs-single");
		}
		else if(imgs.length>1){
			
			imgs.each(function(i,img){
				$(img).css("background-image","url('"+$(img).data("img")+"'");
				$(img).addClass("user-imgs-multi");
			})
		}
	})
	
// 图片加载完成

});