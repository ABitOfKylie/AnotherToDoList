// Check Off Specific tasks -see note below
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// // Click on span to delete task  - remove the entire li
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(1000,function(){
		$(this).remove();
	});
	event.stopPropagation();
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


$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

// ********************Notes******************
// re: Function check off tasks
// Above: why ul? you can only add a listener (using jQuery) to an existing element when the code is written /first time run
// -add a click listener to the entire ul parent, when an li is clicked inside a ul then run this code


// code below does not listen to newly created li's
// $("li").click(function(){
// 	$(this).toggleClass("completed");
// });

// ****** re: Function delete, fade, remove task ******
//     $(this).parent().fadeOut().remove; remove won't wait for fadeOut to finish	

// Click on span to delete task  - remove the entire li
// $("ul").on("click", "span", function(event){
// 			console.log("span has been clicked");
// 		$(this).parent().remove();

// 		event.stopPropagation();
// 		//stop the event from bubbling up and not affect the li click event
// });
// ----------