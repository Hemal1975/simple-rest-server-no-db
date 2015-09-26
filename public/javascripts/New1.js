$(document).ready(function(){
	$("#myBtn").on("click",function(){
		var a = $("input");
		var b = $("#myDiv2");
		$("input").each(function(index){
			b.append($(a[index]).attr("name"));
			b.append($(a[index]).val()+"<br>");
			$(this).val('');
		});
		b.append("<br>");
	});
});