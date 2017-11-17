$(function() {    
	//聊天控制系统
	
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
                        +"<div class='record-photo ' style='background-image: url(img/chat/user/AndrewNg.jpg);'></div>"+"</div><br>")
			$("#dialouge-items").append(self)
			

			$.ajax({
				type: "POST",
				url: url,
				data: info,
				dataType: "json",
				success: function(result) {
					var robot = $("<div class='record flex  x-center'><div class='record-left flex x-start y-items-center position-relative'> <div class='record-photo ' style='background-image: url(img/chat/user/AndrewNg.jpg);'></div></div>"
					+"<div class='record-center flex x-start '><div class='record-content record-font friend-background '>"+result.text 
					+"</div></div><div class='record-right flex '></div></div></br>")

					$("#dialouge-items").append(robot)
				
				}
			});

		})

	})