# AnotherToDoList
To Do list using Javascript/jQuery and basic animations

Some notes on the todo.js code: 

re: Function check off tasks
Why use $("ul") and not "li" ? 
  you can only add a listener (using jQuery) to an existing element when the code is written /element must exist on first time run
Solution: add a click listener to the entire ul parent, later when an appended li is clicked inside the ul the listener will run
correct code:  
  $("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
  });
    vs
code below does not listen to newly created li's
   $("li").click(function(){
   $(this).toggleClass("completed");
   });

re: Function delete, fade, remove task
  $(this).parent().fadeOut().remove; remove won't wait for fadeOut to finish	
  
  instead:
  $("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(1000,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

  Note: event.stopPropagation stops the event from bubbling up and does not affect the parent li click event
