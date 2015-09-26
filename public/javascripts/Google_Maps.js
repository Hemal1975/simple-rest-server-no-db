$(document).ready(function(){

		var a = $("input");
		var ab = $("#myDiv2");
		$("#myZipcode").change(function(){
		var x = $(a).val();
			
		});
		$.ajax({ url:'/users',
				type:"post",
				data: x,
         success: function(result){
             ab.append("fgfgf");
             /*or you could iterate the components for only the city and state*/
			}
		});
	
});