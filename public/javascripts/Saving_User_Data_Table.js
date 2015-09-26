$(document).ready(function(){
	var a = $("input");
	var b = $("#myDiv");
	var c = $("#myData");
	var x = {};
	var t = $("table")
	console.log(t);
	$("#mySave").on("click",function(){
		console.log(a);
		$("input").each(function(index){
			x[$(a[index]).attr("name")]= $(a[index]).val();
			$(a[index]).val("");
		});
		$.ajax({
			url : "/users",
			type : "post",
			data : x,
			success : function(result){
			var dat ="<tr>"+
						"<td>"+result.Firstname+"</td>"+
						"<td>"+result.Lastname+"</td>"+
						"<td>"+result.Address+"</td>"+
						"<td>"+result.Cellno+"</td>"+
					 "</tr>";
			t.append(dat);		 
			}
		});
	});
});