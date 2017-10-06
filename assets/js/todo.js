$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});
// Above: why ul? you can only add a listener (using jQuery) to an existing element when the code is written /first time run
// now add a click listener to the entire ul parent, when an li is clicked inside a ul then run this code


// below prior code doesn not listen to new li's
// $("li").click(function(){
// 	$(this).toggleClass("completed");
// });


// Click on X to delete task  - remove the li that contains the clicked on span
$("ul").on("click", "span", function(event){
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
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + newTask + "</li>");
	}
});

// $(".fa-plus").click(function(e){
// 	e.preventDefault();
// 	console.log("you clicked on the plus sign");
// 	$("input").fadeToggle("slow");
// });

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

