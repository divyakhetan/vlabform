function activate(element){
	var steps = document.getElementsByClassName("step");
	var curr = 0;
	for(var i = 0;i < steps.length;i++){
		steps[i].classList.remove("current");
	}
	element.classList.add("current");

	var content = document.getElementsByClassName("content");
	for(var i = 0;i < steps.length;i++){
		if(steps[i].classList.contains("current")){
			content[i].classList.add("currentStep");
		}
		else content[i].classList.remove("currentStep");
	}
}