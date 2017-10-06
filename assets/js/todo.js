$("li").click(function(){
	$(this).toggleClass("completed");
});


// Click on X to delete task  - remove the li that contains the clicked on span
$("span").click(function(event){
	// $(".X").click(function(event){
			console.log("span has been clicked");
			//note: $(this).parent().fadeOut().remove; remove won't wait for fadeOut to finish	
		// $(this).parent().fadeOut("slow",function(){
		// 	$(this).remove();
		// });
		$(this).parent().remove();

		event.stopPropagation();
// 	//stop the event from bubbling up and not affect the li click event
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//below grabs new toDo text from input
		var newTask = $(this).val();
		//create a new li and add to ul
		$("ul").append("<li>" + newTask + "</li>");
	}
});