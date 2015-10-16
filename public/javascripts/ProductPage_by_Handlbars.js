$(document).ready(function(){	
	var a = $("input");
	var x = {};
	$.ajax({
			url : "/users/" ,
			type: "Get",
			data: x,
			success : function(result){
					console.log(result.length);
					//	for(var i=0;i<result.length;i++){
								var template = Handlebars.compile($("#first-template").html());
								$("div.myPage").append(template(result));
						//	}
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
				type: "Post" ,
				data: {item,price,desc},
				success:function(resu){
					console.log(resu);
					var template = Handlebars.compile($("#first-template").html());
						 $("div.myPage").append(template(resu));				
				}			
		});
	});
	$("div").on("click","span.glyphicon",function(){
	var abc = $(this).closest("div");
		$.ajax({
				url:"/users/" + this.id,
				type:"delete",
				data:{ x } ,
				success: function(result){
					abc.remove();
				}
		});
		return false;
	});
});