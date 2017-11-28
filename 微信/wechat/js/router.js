//当页面加载时
$(function(){
	
//	/* 进入时加载 */	
	$("#dynamic").load("page/dynamic/chat-list.html");
	
	
	//点击聊天时
	$("#menu-Chats").click(function(){
		
		$("#dynamic").load("page/dynamic/chat-list.html");
		$("#nav_center_content").html("WeChat");
		$("#function_img").show()
	})
	
	//点击发现时
	$("#menu-Discover").click(function(){
		
		$("#dynamic").load("page/dynamic/discover.html")
		$("#nav_center_content").html("Discover");
		
		
	})
	
	
	
	//控制朋友圈
	//绑定在on上面
	$("#dynamic").on("click","#discover-moments",function(){
		$("#dynamic").load("page/dynamic/moments.html",function(){
			//加载此页时完成隐藏
			$(".moment-function-control").hide();
		})
		$("#nav_center_content").html("Moments");
		$("#function_img").show();
		$("#menu").hide();
		$("#function_img").css("background-image","url(img/nav/照相机.svg)");
			
	});
	
	
	
	

	
	
	//进入 我-->钱包
	$("#dynamic").on("click","#me-wallet",function(){
		$("#dynamic").load("page/dynamic/wallet.html");
		$("#menu").hide();
		$("#nav_center_content").html("Wallet");
		
	})
	
	
	//点击评论时显示
	$("#dynamic").on("click",".moment-content-right",function(){
		var control = $(this).find(".moment-function-control");
		$(control).toggle(100)
	})
	
	
	
	//暂时存放机器人的聊天位置
	$("#menu-Contacts").click(function(){
		$("#dynamic").load("page/dynamic/dialogue.html");
		$("#nav_center_content").html("Robot");
		$("#function_img").hide();
		$("#menu").hide();
	})
	
	//加载 我 的页面
	$("#menu-Me").click(function(){
		
		$("#dynamic").load("page/dynamic/me.html");
		$("#nav_center_content").html("Me");
		$("#function_img").hide();
	})
	
	
	//聊天页面控制器
//	$("#dynamic").on("click",".items",function(){
		//每一个items被点击之后			
//			$(".items").click(function(){
//				$("#dynamic").load("page/dynamic/dialogue.html")
				//菜单隐藏
//				$("#menu").hide();
//				$("#function_img").css("background-image","url(img/nav/我白.svg)");
				//获取当前的人物名称
//				var name = $(this).find(".nickname").html()
				//替换人物名称
//				$("body").find("#nav_center_content").html(name);
//			})

//	})



		$("#dynamic").on("click",".items",function(){
		//每一个items被点击之后			
			$(".items").click(function(){
				
				//获取话语
				//var src = "url(img/chat/user/lwz.jpg);"
				var src = $(this).data("image-src")
				$("#dynamic").load("page/dynamic/dialogue.html",function(){
					
	
					var key = "b7f3afeea99c40c7a9df742f64551105";
					var url = "http://www.tuling123.com/openapi/api";
			
					$('#btn').click(function() {  //当点击时
						
						var info = {
							"key": key,
							"info": $("#input-content").val() 
						}   //向图灵 发送 聊天数据     .val  =  value
						
						var self = $("<div class='record flex  x-center'><div class='record-left flex x-start y-items-center position-relative'>"
						+"</div><div class='record-center flex x-end '><div class='record-content record-font user-background '>"+$("#input-content").val()
						+"</div></div>"+"<div class='record-right x-start y-items-center position-relative '>"
			                        +"<div class='record-photo ' style='background-image: url(img/chat/user/myPhoto.jpg);'></div>"+"</div><br>")
						$("#dialouge-items").append(self)
						
						
			
						$.ajax({
							type: "POST",
							url: url,
							data: info,
							dataType: "json",
							success: function(result) {
								var robot = $("<div class='record flex  x-center'><div class='record-left flex x-start y-items-center position-relative'> <div class='record-photo ' style='background-image: "+src
								+"'></div></div>"
								+"<div class='record-center flex x-start '><div class='record-content record-font friend-background '>"+result.text 
								+"</div></div><div class='record-right flex '></div></div></br>")
								
								//src "url(img/chat/user/AndrewNg.jpg);"
								$("#dialouge-items").append(robot)
							
							}
						});
			
					})
			    })
				
				
				

				//菜单隐藏
				$("#menu").hide();
				$("#function_img").css("background-image","url(img/nav/我白.svg)");
				//获取当前的人物名称
				var name = $(this).find(".nickname").html()
				//替换人物名称
				$("body").find("#nav_center_content").html(name);
			})

		})
	
	
	
		
	
	


});
