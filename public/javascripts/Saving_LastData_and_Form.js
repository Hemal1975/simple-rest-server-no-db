$(document).ready(function(){
		var a = $("input");
		var ab = $("#myDiv2");
		var x = {};
	$("#myBtn").click(function(){
		$("input").each(function(index){
			x[$(a[index]).attr("name")]=$(a[index]).val();		 
		});
		$.ajax({ url: "/users",
				 type:'post',
				 data: x ,			 
					 success: function(result){
					 $.ajax({
							url : "	http://localhost:3000/users",
							type : "GET",
							data : "x",
							success : function(result){
										for(var i=0;i<result.length;i++){
										if(result[i].Firstname != "" && result[i].Lasrname !="" && result[i].Address && result[i].CellNo){
														$("#myDiv2").append('<li> Firstname :'+result[i].Firstname+'</li>',
														'<li> Lasrname :'+result[i].Lastname+'</li>',
														'<li> Address :'+result[i].Address+'</li>',
														'<li> Cellno :'+result[i].CellNo+'</li>');
														$("#myDiv2").append("<br>");
										}
								}
							}
					});
				}	
		});
	});
});