$(document).ready(function(event){
	event.preventDefault;
	
		$("#myDiv").hide();
		$("#myWant").keypress(function(e){
			if(e.keyCode==13){
				if($("#myWant").val()==""){
					alert("Enter Value");
					return;
				}
				$("#myDiv").show();
				var a = $("<input class=selectcheckbox>").attr("type","checkbox");
				//		a.append("<span></span>")
				 b = $("#myWant").val();
			//	 var c = $("<span></span>").append(b);
				 var q = $("<label></label>").append(a).append(b).append("<br>");
				 p =	$("#myData").append(q);
				 $("#myWant").val("");
				 pd = $(".selectcheckbox");
				 $("#myCheckbox").attr('checked',false);
			}
		});
		$("#myCheckbox").on("click",function(){
			if(this.checked){
				$("input").each(function(){
					this.checked = true;
					$(this).closest("label").addClass("intro");
				});
			}else{
				$("input").each(function(){
					this.checked = false;
					$(this).closest("label").removeClass("intro");
				});
			}
		});
		$("#myData").on("click","input",function(){
			$(this).closest("label").addClass("intro");
			if(this.checked){
				var pl = pd.length;
				for(var i=0;i<pl;i++){
					if($(pd[i]).is(":checked")==true){
						console.log(i);
						if(i==pl-1){
							$("#myCheckbox").prop('checked',true);
						}
					}else{
						break;
					}	
				}		
			}else{
				$("#myCheckbox").attr('checked',false);
				$(this).closest("label").removeClass("intro");
			}
		}); 		  	
		$("#myAll").on("click",function(){
	//	var pd = $(".selectcheckbox");
			for(var i=0;i<pd.length;i++){
				$(pd[i]).parent().show();
				$(pd[i]).parent();
			}
		});
		$("#myCompleted").on("click",function(){
			$(pd).each(function(index){
				if($(this).is(':checked')==false){
				//	console.log($(pd[index]));
				console.log("Sdsd")
					$(this).parent().hide();
				}else{
					console.log("aaaaa");
					$(this).parent().show();
				}
			});
		});
		$("#myPending").on("click",function(){
			$(pd).each(function(){
				if ($(this).is(':checked')) {
					$(this).parent().hide();
				}else{
					$(this).parent().show();
				}
			 });
		});
		$("#myRemove").click(function(){
			$(pd).each(function(){
				if($(this).is(":checked")){
					$(this).parent().remove();
					$("#myCheckbox").attr('checked',false);
				}
			});
		});	
});