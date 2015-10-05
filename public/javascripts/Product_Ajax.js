$(document).ready(function(){
	var a = $("input");
	var x = {};
	$.ajax({
						url : "/users",
						type: "Get",
						data: "x",
						success : function(result){
							console.log(result.length);
							for(var i=0;i<result.length;i++){
								var pc = $("<div class='well well-lg col-md-9'></div>").append("<b id=myItem>"+result[i].Item+"</b>",
								"<span type=button class='btn btn-primary' style='margin-left:550px' id=myPrice> $"+ result[i].Price +"</span>",
								"<button id="+result[i].id+" class='delete glyphicon glyphicon-remove pull-right'></button></br>",
								"<span id=myDescription>"+result[i].Description+"</span>");
								$("#myData").append(pc)
							}
						}
					});
	$("#myAdd").click(function(){
		var item = $("#inputItem").val();
		var desc = $("#inputDescription").val();
		var price = $("#inputPrice").val();
	//	var data = $("<div class='well well-lg col-md-9'></div>");	
		$("input").each(function(index){
			x[$(a[index]).attr("name")]=$(a[index]).val();
			$(a[index]).val("");
		});
		$.ajax({
				url : "/users",
				type: "Post",
				data: x,
				success:function(resu){
				//	for(var i=0;i<result.length;i++){
								var pc = $("<div class='well well-lg col-md-9'></div>").append("<b id=myItem>"+resu.Item+"</b>",
								"<span type=button class='btn btn-primary' style='margin-left:550px' id=myPrice> $"+ resu.Price +"</span>",
								"<button id="+resu.id+" class='delete glyphicon glyphicon-remove pull-right'></button></br>",
								"<span id=myDescription>"+resu.Description+"</span>");
								$("#myData").append(pc)
						//	}
				}			
		});
	});
	$("#myData").on("click","button",function(){
		$(this).parent("div").remove();
		$.ajax({
				url:"http://localhost:3000/users/" + this.id,
				type:"delete",
				data: x,
				success: function(result){
					$(this).remove();
				}
		});
	});
});