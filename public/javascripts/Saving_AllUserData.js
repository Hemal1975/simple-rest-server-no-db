$(document).ready(function(){
	var a = $("input");
		$.ajax({
			url : "/users",
			type : "GET",
			data : "/users",
			success : function(result){
				console.log(result.length);
					for(var i=0;i<result.length;i++){
						$("#myData").append('<li> Firstname :'+result[i].firstname+'</li>',
											'<li> Lasrname :'+result[i].lastname+'</li>',
											'<li> Address :'+result[i].address+'</li>',
											'<li> Cellno :'+result[i].cellNo+'</li>'
											);
					$("#myData").append("<br>")					
				}
			}
		});
});