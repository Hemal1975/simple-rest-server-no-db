$(document).ready(function(){
		var a = $("input");
		var ab = $("#myDiv2");
		var x = {};
	$("#myBtn").click(function(){
	/*	for(var i=0;i<a.length;i++){
		x[$(a[i]).attr("name")]=$(a[i]).val();
		} */
		$("input").each(function(index){
			x[$(a[index]).attr("name")]=$(a[index]).val();		 
		});
		$.ajax({ url: "/users",
				 type:'post',
				 data: x ,			 
				 success: function(result){
					ab.append('<li>Firstname : '+result.Firstname+'</li>',
							  '<li>Lastname : '+result.Lastname+'</li>',
							  '<li>Address : '+result.Address+'</li>',
							  '<li>CellNo : '+result.CellNo+'</li>');
					ab.append("<br>");			
				}
		});
	});
});