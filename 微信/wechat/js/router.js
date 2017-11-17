//当页面加载时
$(function(){
	
//	/* 进入时加载 */	
	$("#dynamic").load("page/dynamic/chat-list.html");
	//点击聊天时
	$("#menu-Chats").click(function(){
		
		$("#dynamic").load("page/dynamic/chat-list.html");
		$("#nav_center_content").html("微信(26)");
		$("#function_img").show()
	})
	//点击发现时
	$("#menu-Discover").click(function(){
		
		$("#dynamic").load("page/dynamic/discover.html")
		$("#nav_center_content").html("Discover");
		
		$("#function_img").hide();
		
//		$("#function_img").hide(2000 , function(){
//			alert("我没啦...")}
//		)
		
	})
		
	$("#menu-Contacts").click(function(){
		$("#dynamic").load("page/dynamic/dialogue.html");
		$("#nav_center_content").html("图灵机器人");
		$("#function_img").hide();
		$("#menu").hide();
	})
	


});
