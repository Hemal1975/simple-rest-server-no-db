$(document).ready(function(){
	var a = $("input");
	var x ={};
	$("#myBtn").on("click",function(){
		$("input").each(function(index){	
			x[$(a[index]).attr("name")]=$(a[index]).val();
			$(a[index]).val("");	
		});
		$.ajax({
			url: "/users",
			type:"post",
			data: x,
			success:function(result){
				$.ajax({
					url:"/users",
					type:"get",
					data: x,
				success:function(result){
					for(var i=0;i<result.length;i++){	
				$("#myData").append("Firstname :"+result[i].firstname+"<br>",
									"Lastname :"+result[i].lastname+"<br>",
									"Address :"+result[i].Address+"<br>",
									"Cell No : "+result[i].Cellno+"<br><br>");
						}	
					}		
				});					
			}
		});
	});
});