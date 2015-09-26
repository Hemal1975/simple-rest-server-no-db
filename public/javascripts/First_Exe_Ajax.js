$(document).ready(function(){
	$("#myBtn").click(function(event){
	//	event.preventDefault();
	var a = $("input[name='Firstname']").val();
	var b = $("input[name='Lastname']").val();
	var c = $("input[name='Address']").val();
	var d = $("input[name='CellNo']").val();
	console.log(a);
		$.ajax({ url: "/users",
				 type:'post',
				 data:{
					a,b,c,d,
				 },
				 success: function(result){
			var ab =$("#myDiv2").append("Firstname :"+result.a+"<br>")
				ab.append("Lastname :"+result.b+"<br>");
				ab.append("Address :"+result.c+"<br>");
				ab.append("Cellno :"+result.d+"<br>");
				}
		});
	});
});